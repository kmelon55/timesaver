import nest_asyncio
import asyncio
from pyppeteer import launch
import re
from pprint import pprint
from models import db, Course
from app import create_app
app = create_app()

term = '1' #  1학기-1 / 2학기-2 / 하계-6 / 동계-7 > 드롭다운 value임

TERM_NAME = {'1' : 'normal1', '2' : 'normal2', '6' : 'summer', '7' : 'winter'}
CLASSIFICATION_NAME = {'1' : 'major', '2' : 'general', '3' : 'none'} #전공/교양으로 나누어서 테이블에 저장하기 위한 테이블 이름 요소
URL = 'https://hakstd.jnu.ac.kr/web/Suup/TimeTable/Suup030_C.aspx'

YEAR_DD_ID = '#ContentPlaceHolder_ContentPlaceHolderSub_ddlYear'
GRADE_DD_ID = '#ContentPlaceHolder_ContentPlaceHolderSub_ddlNOW_GRADE'
SEMESTER_ID = '#ContentPlaceHolder_ContentPlaceHolderSub_ddlTerm'
CLASSIFICATION_ID = '#ContentPlaceHolder_ContentPlaceHolderSub_ddlSubj'
CLASSLOCAL_ID = '#ContentPlaceHolder_ContentPlaceHolderSub_ddlDaesang'
SEARCH_BTN_ID = '#ContentPlaceHolder_ContentPlaceHolderSub_lBtnLst'
TOTALNUM_ID = '#ContentPlaceHolder_ContentPlaceHolderSub_lblTcnt'
TABLE_ID = '#ContentPlaceHolder_ContentPlaceHolderSub_gvData'
ENTERYEAR_ID = "#ContentPlaceHolder_ContentPlaceHolderSub_ddlHakMoonApply_year"

DAESANG = '0' #수강장소 : 전체

course = []

#강의실 나누기
PATTERN = re.compile(r"([\w\-()]{2,}?)\1+") #def find_repeated_string(s):
def find_repeated_string(s):
    match = PATTERN.search(s)
    if match:
        return match.group(1)
    else:
        return s

#강의시간 나누기
def split_classtime(s):
    days = re.findall('[가-힣]+', s)
    times = re.findall('\d+', s)
    return ''.join([day + time for day, time in zip(days, times)]).strip()


# 페이지에 있는 모든 드롭다운 요소 이름 가져오기
async def dropdowns_set_apply(page):
    try:
        dropdown_set = {}
        dropdowns = await page.querySelectorAll('select')
        for i, dropdown in enumerate(dropdowns):
            dropdown_name = await dropdown.getProperty('id')
            dropdown_set[str(i)]= '#'+ str(await dropdown_name.jsonValue())  #인덱스에 0부터 str로 저장
        return dropdown_set
    except:
        print("[Error : dropdowns_set_apply()]\n")

#한 드롭다운의 모든 요소 이름과 변수 값 가져오기
async def option_in_dropdown_apply(page, cssid):
    try:
        await page.waitForSelector(cssid)
        dropdown_element = await page.querySelector(cssid)
        dropdown_options = await dropdown_element.querySelectorAll('option')
        option_in_dropdown = {} #드롭다운 안의 요소와 변수값
        for option in dropdown_options:
            option_name = await option.getProperty('text')
            option_value = await option.getProperty('value')
            option_in_dropdown[await option_value.jsonValue()] = await option_name.jsonValue()
        return option_in_dropdown
    except:
        print("[Error : option_in_dropdown_apply()]\n")

#버튼 클릭
async def click_btn(page, selector):
    await page.waitForSelector(selector)
    await page.evaluate("window.alert = function(){}") #정적 알림창 무시
    await page.click(selector)

#값 불러오기
async def get_totalnum(page, selector):
    await page.waitForSelector(selector)
    return await page.evaluate('document.querySelector("'+selector+'").textContent')

#드롭다운의 옵션을 선택
async def set_dropdown(page, selector, key):
    await page.waitForSelector(selector)
    while True:
        try:
            await page.select(selector, key)
            break
        except:
            await asyncio.sleep(1) #실패 시 1초 대기

#드롭다운에서 선택된 옵션의 텍스트값
async def text_of_selected(page, selector):
    return await page.evaluate('''
        (select_element) => {
        return select_element.options[select_element.selectedIndex].text;
        }
        ''', await page.querySelector(selector))

#테이블의 데이터 긁어오기
async def get_tabledata(page, selector, totalnum):
    await page.waitForFunction('''document.querySelectorAll("'''+ selector + ''' tr").length > '''+str(totalnum))
    return await page.evaluate('''
                    const table = document.querySelector("''' + selector +'''");
                    const rows = table.querySelectorAll('tr');
                    const rowData = [];
                    for (const row of rows) {
                        const cells = row.querySelectorAll('td');
                        const cellData = [];
                        for (const cell of cells) {
                            cellData.push(cell.innerText.trim());
                        }
                        rowData.push(cellData);
                    }
                    rowData
                ''')

#드롭다운마다 선택된 옵션의 텍스트를 리스트로 만들어 반환
async def selected_dd_options(page):
    selected_texts = []
    dropdowns = await page.querySelectorAll('select')
    for dropdown in dropdowns:
        selected_option = await dropdown.querySelector('option[selected]')
        selected_text = await page.evaluate('(element) => element.textContent', selected_option)
        selected_texts.append(selected_text)
    return selected_texts

#데이터 빼내기
async def data_crawling(page, totalnum):
    while True:
        try:
            while True:
                data = await get_tabledata(page, TABLE_ID, totalnum) #테이블에서 강의 긁어오기 
                to_sql_list = [] #db에 쌓을 강의 리스트
                grade = await text_of_selected(page, GRADE_DD_ID) #선택한 학년 받아오기
                ALL_num = 0 #수강학년이 ALL인 경우 모든 학년에 나타나기 때문에 1학년에서만 추가하고, 다른 학년은 추가를 안함.

                for i in data:
                    if len(i) == 14:
                        if grade == '1학년' or i[4] != 'ALL':
                            to_sql_list.append(
                                [x.strip() for x in i[2].split("-")] #과목 코드와 분반
                                + 
                                [
                                i[1], #과목이름
                                i[10], #교수이름
                                split_classtime(i[11]), #강의시간
                                find_repeated_string(i[12]), #강의실
                                i[3], #분류
                                i[4], #학년
                                float(i[7].split()[0]), #학점수
                                i[0], #강의지역
                                i[13], #비고
                                i[9] #수강대상
                            ])
                        else:
                            ALL_num += 1 #리스트에 넣지않은 ALL 과목의 개수

                if len(to_sql_list) + ALL_num != int(totalnum):#수 안 맞으면 다시 시도
                    await page.reload()
                    continue
                
                return to_sql_list
        except:
            print("[Error : data_crawling()]\n")
            await page.reload()
            continue

def remove_ignore_data(data, clsfctn):
    filtered_data = []
    clsfctn_index = int(int(clsfctn) - 1)
    for lecture in data:
        filtered_data.append(lecture)
    return filtered_data



def create_table(year, term, clsfctn):
    table_name = f'{year}_{TERM_NAME[term]}_{CLASSIFICATION_NAME[clsfctn]}'
    print(f"Table: {table_name}\n")
    return table_name


def input_lecture(selected_dd_options, lecture_data, term, clsfctn):
    lecture_data = remove_ignore_data(lecture_data, clsfctn)
    num = 0
    with app.app_context():

        for course_data in lecture_data:
            name = course_data[2]
            location = course_data[5]
            subject = course_data[6]
            subject_code = course_data[0]
            target_grade = course_data[7]
            professor = course_data[3]
            schedule = course_data[4] 

            # 이미 존재하는 과목인지 검증
            existing_course = Course.query.filter_by(subject_code=subject_code).first()
            if existing_course:
                print(f"이미 존재하는 과목입니다: {subject_code}")
            else:
                course = Course(
                    name=name,
                    location=location,
                    subject=subject,
                    subject_code=subject_code,
                    target_grade=target_grade,
                    major_seats=None,
                    other_seats=None,
                    minor_seats=None,
                    professor=professor,
                    schedule=schedule
                )
                db.session.add(course)
                db.session.commit()
                num += 1
                print(num)
                print(f"과목이 성공적으로 저장되었습니다: {subject_code}")

    return lecture_data

#과목 찾기
IGNORE_LIST = [
    ['선택하세요', '전체(공통)'], #전공
    ["선택하세요", '전체(공통)', #교양
    "2006년 이전 입학자",
    "2007~2009년 입학자",
    "2010년 입학자",
    "2011년 입학자",
    "2012년 입학자",
    "2013년 입학자",
    "2014년 입학자",
    "2015년 입학자",
    "2016년 입학자",
    "2017년 입학자"
    ]
]

async def find_subject(page, nowdd, clsfctn):
    try:
        await page.waitForSelector(SEARCH_BTN_ID)

        if nowdd < 0 :  #계절학기
            await click_btn(page, SEARCH_BTN_ID) #조회 클릭
            totalnum = await get_totalnum(page, TOTALNUM_ID)#조회 후 강의 개수 받아오기
            if totalnum != '0': #강의 개수 1개 이상일 때
                input_lecture(
                    await selected_dd_options(page),
                    await data_crawling(page, totalnum),
                    term, clsfctn
                )

        else:           #일반학기
            dropdown_set = await dropdowns_set_apply(page) #드롭다운들 받아오기
            cssid = dropdown_set[str(nowdd)] #현재 선택할 드롭다운의 cssid 선택
            option_in_dropdown = await option_in_dropdown_apply(page, cssid) #현재 선택할 드롭다운의 옵션들 받아오기
            
            print(clsfctn-1)
            for key in option_in_dropdown:
                if not option_in_dropdown[key] in IGNORE_LIST[clsfctn - 1]:
                    await set_dropdown(page, cssid, key) #드롭다운의 옵션 선택
                    if (len(dropdown_set) - 1) == nowdd : #현재 선택이 마지막일 경우
                        await click_btn(page, SEARCH_BTN_ID) #조회 클릭
                        totalnum = await get_totalnum(page, TOTALNUM_ID)#조회 후 강의 개수 받아오기
                        if totalnum != '0': #강의 개수 1개 이상일 때
                            input_lecture(
                                await selected_dd_options(page),
                                await data_crawling(page, totalnum),
                                term, clsfctn
                            )

                    else: #옵션을 선택해야할 드롭다운이 아직 남았을 경우
                        await find_subject(page, nowdd+1, clsfctn) #재귀
    except Exception as e:
        print(f"[Error : find_subject()] {e}")
        import traceback
        traceback.print_exc()

#학기에 맞춰 작업
async def semester(page):
    year = await text_of_selected(page, YEAR_DD_ID)
    if int(term) < 3: #일반학기
        #########전공별 크롤링
        # subj = '2' #전공
        # nowdd = 4 
        # clsfctn = 1 #classfication 전공(1)/교양(2)/계절(3)을 전달
        # await set_dropdown(page, CLASSIFICATION_ID, subj)
        # while True:
        #     try:
        #         await page.select(SEMESTER_ID, term) #학기 nowdd = 1
        #         await page.select(CLASSIFICATION_ID, subj) #교육과정 2
        #         await page.select(CLASSLOCAL_ID, DAESANG) #수강장소 3
        #         break
        #     except:
        #         await asyncio.sleep(1)
        # await find_subject(page, nowdd, clsfctn)
        # await page.reload()
        #########교양 크롤링
        subj = '1' #교양/기타
        nowdd = 4
        clsfctn = 2
        await set_dropdown(page, CLASSIFICATION_ID, subj)
        while True:
            try:
                await page.select(SEMESTER_ID, term) #학기 nowdd = 1
                await page.select(CLASSIFICATION_ID, subj) #교육과정 2
                await page.select(CLASSLOCAL_ID, DAESANG) #수강장소 3
                break
            except:
                await asyncio.sleep(1)
        await find_subject(page, nowdd, clsfctn)
        
    else: #계절학기
        subj = '0' #전체
        grade = '1'
        nowdd = -1 #계절은 nowdd 마이너스로 넘김
        clsfctn = 3
        await set_dropdown(page, CLASSIFICATION_ID, subj)
        while True:
            try:
                await page.select(SEMESTER_ID, term) #학기 nowdd = 1
                await page.select(CLASSIFICATION_ID, subj) #교육과정 2
                await page.select(CLASSLOCAL_ID, DAESANG) #수강장소 3
                await page.select(GRADE_DD_ID, grade) #학년
                break
            except:
                await asyncio.sleep(1)
        await find_subject(page, nowdd, clsfctn) 

async def main():
    browser = await launch(
        headless=True,
        args=['--no-sandbox']
    )
    page = await browser.newPage()
    await page.goto(URL)
    await semester(page)
    await browser.close()
    return

def crawling_lecture(recv_term):
    global term
    term = recv_term
    nest_asyncio.apply()
    asyncio.run(main())



#사용 예시 - '1' 1학기 / '2' 2학기 / '6' 하계 / '7' 동계
crawling_lecture('2')