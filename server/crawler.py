import nest_asyncio
import asyncio
from pyppeteer import launch
import re

#
term = '1'  # 1학기-1 / 2학기-2 / 하계-6 / 동계-7 > 드롭다운 value임

TERM_NAME = {'1': 'normal1', '2': 'normal2', '6': 'summer', '7': 'winter'}
CLASSIFICATION_NAME = {'1': 'major', '2': 'general', '3': 'none'}  # 전공/교양으로 나누어서 테이블에 저장하기 위한 테이블 이름 요소
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

DAESANG = '0'  # 수강장소 : 전체

# 강의실 나누기
PATTERN = re.compile(r"([\w\-()]{2,}?)\1+")


def find_repeated_string(s):
    match = PATTERN.search(s)
    if match:
        return match.group(1)
    else:
        return s


# 강의시간 나누기
DAYS_TEXT = {'월': 'mon', '화': 'tue', '수': 'wen', '목': 'thu', '금': 'fri', '토': 'sat', '일': 'sun'}


def split_classtime(s):
    days = re.findall('[가-힣]+', s)
    times = re.findall('\d+', s)
    days = [DAYS_TEXT[day] for day in days]
    return ''.join([days + time + ' ' for days, time in zip(days, times)]).strip()


# 페이지에 있는 모든 드롭다운 요소 이름 가져오기
async def dropdowns_set_apply(page):
    try:
        dropdown_set = {}
        dropdowns = await page.querySelectorAll('select')
        for i, dropdown in enumerate(dropdowns):
            dropdown_name = await dropdown.getProperty('id')
            dropdown_set[str(i)] = '#' + str(await dropdown_name.jsonValue())  # 인덱스에 0부터 str로 저장
        return dropdown_set
    except:
        print("[Error : dropdowns_set_apply()]\n")


# 한 드롭다운의 모든 요소 이름과 변수 값 가져오기
async def option_in_dropdown_apply(page, cssid):
    try:
        await page.waitForSelector(cssid)
        dropdown_element = await page.querySelector(cssid)
        options = await dropdown_element.querySelectorAll('option')
        option_dict = {}
        for option in options:
            option_name = await option.getProperty('innerText')
            option_value = await option.getProperty('value')
            option_dict[str(await option_name.jsonValue())] = str(await option_value.jsonValue())
        return option_dict
    except:
        print("[Error : option_in_dropdown_apply()]\n")


# 선택한 드롭다운의 모든 정보들 저장하기
async def selected_dd_options(page):
    try:
        dropdown_set = await dropdowns_set_apply(page)
        selected_dd_options = {}
        for key in dropdown_set:
            option_in_dropdown = await option_in_dropdown_apply(page, dropdown_set[key])
            selected_dd_options[key] = option_in_dropdown
        return selected_dd_options
    except:
        print("[Error : selected_dd_options()]\n")


# 텍스트 데이터 가져오기
async def text_of_selected(page, cssid):
    try:
        await page.waitForSelector(cssid)
        selected_element = await page.querySelector(cssid)
        selected_text = await page.evaluate('(element) => element.textContent', selected_element)
        return str(selected_text)
    except:
        print("[Error : text_of_selected()]\n")


# 버튼 클릭
async def click_btn(page, cssid):
    try:
        await page.waitForSelector(cssid)
        await page.click(cssid)
    except:
        print("[Error : click_btn()]\n")


# 드롭다운 선택하기
async def set_dropdown(page, cssid, value):
    try:
        await page.waitForSelector(cssid)
        await page.select(cssid, value)
    except:
        print("[Error : set_dropdown()]\n")


# 총 강의 개수 가져오기
async def get_totalnum(page, cssid):
    try:
        await page.waitForSelector(cssid)
        totalnum_element = await page.querySelector(cssid)
        totalnum_text = await page.evaluate('(element) => element.textContent', totalnum_element)
        return str(totalnum_text)
    except:
        print("[Error : get_totalnum()]\n")


# 데이터 크롤링하기
async def data_crawling(page, totalnum):
    try:
        await page.waitForSelector(TABLE_ID)
        table_element = await page.querySelector(TABLE_ID)
        rows = await table_element.querySelectorAll('tr')

        lecture_list = []
        for row in rows[1:]:
            columns = await row.querySelectorAll('td')

            lecture_dict = {
                'subject_code': await page.evaluate('(element) => element.textContent', columns[0]),
                'subject_name': await page.evaluate('(element) => element.textContent', columns[1]),
                'class_code': await page.evaluate('(element) => element.textContent', columns[3]),
                'class_name': await page.evaluate('(element) => element.textContent', columns[4]),
                'class_type': await page.evaluate('(element) => element.textContent', columns[5]),
                'credit': await page.evaluate('(element) => element.textContent', columns[6]),
                'class_time': split_classtime(await page.evaluate('(element) => element.textContent', columns[7])),
                'classroom': find_repeated_string(
                    await page.evaluate('(element) => element.textContent', columns[8])),
                'professor': await page.evaluate('(element) => element.textContent', columns[9]),
                'capacity': await page.evaluate('(element) => element.textContent', columns[10]),
                'remark': await page.evaluate('(element) => element.textContent', columns[11])
            }
            lecture_list.append(lecture_dict)

        return lecture_list
    except:
        print("[Error : data_crawling()]\n")


IGNORE_LIST = {
    '0': [''],
    '1': ['일반'],
    '2': ['체험']
}


def remove_ignore_data(data, clsfctn):
    return [lecture for lecture in data if lecture['class_type'] not in IGNORE_LIST[clsfctn]]


def create_table(year, term, clsfctn):
    table_name = f'{year}_{TERM_NAME[term]}_{CLASSIFICATION_NAME[clsfctn]}'
    print(f"Table: {table_name}\n")
    return table_name


def input_lecture(selected_dd_options, lecture_data, year, term, clsfctn):
    lecture_data = remove_ignore_data(lecture_data, clsfctn)
    table_name = create_table(year, term, clsfctn)
    print(lecture_data)  # Print lecture data as an array

    # Perform additional operations if needed


async def find_subject(page, nowdd, clsfctn):
    try:
        await page.waitForSelector(SEARCH_BTN_ID)

        if nowdd < 0:  # 계절학기
            await click_btn(page, SEARCH_BTN_ID)  # 조회 클릭
            totalnum = await get_totalnum(page, TOTALNUM_ID)  # 조회 후 강의 개수 받아오기
            if totalnum != '0':  # 강의 개수 1개 이상일 때
                input_lecture(
                    await selected_dd_options(page),
                    await data_crawling(page, totalnum),
                    term, clsfctn
                )

        else:  # 일반학기
            dropdown_set = await dropdowns_set_apply(page)  # 드롭다운들 받아오기
            cssid = dropdown_set[str(nowdd)]  # 현재 선택할 드롭다운의 cssid 선택
            option_in_dropdown = await option_in_dropdown_apply(page, cssid)  # 현재 선택할 드롭다운의 옵션들 받아오기

            print(int(clsfctn) - 1)
            for key in option_in_dropdown:
                if not option_in_dropdown[key] in IGNORE_LIST[int(clsfctn) - 1]:
                    await set_dropdown(page, cssid, key)  # 드롭다운의 옵션 선택
                    if (len(dropdown_set) - 1) == nowdd:  # 현재 선택이 마지막일 경우
                        await click_btn(page, SEARCH_BTN_ID)  # 조회 클릭
                        totalnum = await get_totalnum(page, TOTALNUM_ID)  # 조회 후 강의 개수 받아오기
                        if totalnum != '0':  # 강의 개수 1개 이상일 때
                            input_lecture(
                                await selected_dd_options(page),
                                await data_crawling(page, totalnum),
                                term, clsfctn
                            )

                    else:  # 옵션을 선택해야할 드롭다운이 아직 남았을 경우
                        await find_subject(page, nowdd + 1, clsfctn)  # 재귀
    except:
        print("[Error : find_subject()]")


# 학기에 맞춰 작업
async def semester(page):
    year = await text_of_selected(page, YEAR_DD_ID)
    if int(term) < 3:  # 일반학기
        #########전공별 크롤링
        subj = '2'  # 전공
        await set_dropdown(page, CLASSIFICATION_ID, subj)
        await find_subject(page, 0, subj)  # 전공 시작
        #########교양별 크롤링
        subj = '1'  # 교양
        await set_dropdown(page, CLASSIFICATION_ID, subj)
        await find_subject(page, 0, subj)  # 교양 시작
    else:  # 계절학기
        #########계절학기 크롤링
        subj = '3'  # 계절학기
        await set_dropdown(page, CLASSIFICATION_ID, subj)
        await find_subject(page, -1, subj)  # 계절학기 시작


async def main():
    browser = await launch(
        headless=True,
        args=['--no-sandbox']
    )
    page = await browser.newPage()
    await page.goto(URL)
    await semester(page)
    await browser.close()


nest_asyncio.apply()
asyncio.run(main())
