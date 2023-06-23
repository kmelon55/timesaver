import React, { useEffect, useState } from 'react'
import logo from './cn.png';
import { Link, Navigate } from 'react-router-dom';
import styles from './homepage1.module.css'
import Loadingpage from './Loading';
import Login from './Login';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = true;

  useEffect(() => {
    // 가정: 데이터를 가져오는 비동기 작업을 수행하는 함수가 있다고 가정합니다.
    // 이 함수가 완료되면 로딩 화면을 숨깁니다.
    fetchData()
      .then(() => setIsLoading(false))
      .catch((error) => console.error(error));
  }, []);

  // 데이터를 가져오는 비동기 작업을 수행하는 함수
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      // 여기에서 실제 데이터를 가져오는 비동기 작업을 수행합니다.
      // 예를 들어, API 호출이나 데이터베이스 조회 등을 수행할 수 있습니다.
      // 데이터를 성공적으로 가져오면 resolve를 호출하고,
      // 작업이 실패하면 reject를 호출합니다.

      // 여기에서는 3초 후에 데이터를 가져오도록 설정합니다.
      setTimeout(() => {
        resolve(); // 데이터 가져오기 성공
        // reject(new Error('데이터를 가져오는 동안 문제가 발생했습니다.')); // 데이터 가져오기 실패
      }, 2000);
    });
  };
  return (
    // <div className="Home">
    //   <div class="head">
    //     <div>
    //     <Link to={"/"}>
    //       <img src={logo} className='App-logo' alt='React' />
    //     </Link>
    //     </div>
    //     <div>
    //     <Link to={"/Login"} style={{ textDecoration: "none" }}>
    //       <span className='loginspan'>로그인</span>
    //     </Link>
    //     <Link to={"/Mypage"}>
    //       <button className='mypage'>my page</button>
    //     </Link>
    //     </div>
    //   </div>
    //   <div className='menu'> 
    //     <Link to={"/Reco"}>
    //       <button className='reco nav'>강좌 추천</button>
    //     </Link>
    //     <Link to={"/Alarm"}>
    //       <button className='alarm nav'>여석 알림</button>
    //     </Link>
    //     <Link to={"/Table"}>
    //       <button className='table nav'>나의 시간표</button>
    //     </Link>
    //   </div>
    //   <div>

    //   </div>
    // </div>
    <div>
    {isLoggedIn ? (
      <div className="loading">
        {/* 로딩 중임을 나타내는 메시지를 표시할 수 있습니다. */}
        <Login />
      </div>
    ) : (
      <div className={styles['container']}>
      <div className={styles['homepage']}>
        <div className={styles['bottombar']}>
          <button className={styles['selectoptionbutton']}>
            <img
              src="/optionselectbuttoni396-cof2.svg"
              alt="optionselectbuttonI396"
              className={styles['optionselectbutton']}
            />
            <span className={styles['text']}>
              <span>강의 옵션 선택</span>
            </span>
          </button>
          <button className={styles['homebutton']}>
            <span className={styles['text002']}>
              <span>Home</span>
            </span>
            <img
              src="/homebuttoni396-69d.svg"
              alt="HomeButtonI396"
              className={styles['home-button1']}
            />
          </button>
          <button className={styles['mypagebutton']}>
            <span className={styles['text004']}>
              <span>my page</span>
            </span>
            <img
              src="/userpagebuttoni396-mm2q.svg"
              alt="UserpagebuttonI396"
              className={styles['userpagebutton']}
            />
          </button>
        </div>
        <div className={styles['frame3']}>
          <img
            src="/line1837-zwu.svg"
            alt="Line1837"
            className={styles['line1']}
          />
          <img
            src="/line7843-rr4.svg"
            alt="Line7843"
            className={styles['line7']}
          />
          <img
            src="/line8844-do5h.svg"
            alt="Line8844"
            className={styles['line8']}
          />
          <button className={styles['tablepopupbutton9']}>
            <span className={styles['text006']}>
              <span>
                <span>데이터베이스</span>
                <br></br>
                <span>시스템</span>
              </span>
            </span>
            <span className={styles['text011']}>
              <span>공7-219</span>
            </span>
          </button>
          <button className={styles['tablepopupbutton17']}>
            <span className={styles['text013']}>
              <span>
                <span>데이터베이스</span>
                <br></br>
                <span>시스템</span>
              </span>
            </span>
            <span className={styles['text018']}>
              <span>공7-219</span>
            </span>
          </button>
          <img
            src="/line9845-dfv2.svg"
            alt="Line9845"
            className={styles['line9']}
          />
          <img
            src="/line10846-s32e.svg"
            alt="Line10846"
            className={styles['line10']}
          />
          <img
            src="/line11847-zynr.svg"
            alt="Line11847"
            className={styles['line11']}
          />
          <img
            src="/line12848-kt9q.svg"
            alt="Line12848"
            className={styles['line12']}
          />
          <img
            src="/line13849-6i1g.svg"
            alt="Line13849"
            className={styles['line13']}
          />
          <img
            src="/line14850-m9g.svg"
            alt="Line14850"
            className={styles['line14']}
          />
          <img
            src="/line2838-mqvr.svg"
            alt="Line2838"
            className={styles['line2']}
          />
          <img
            src="/line3839-cawd.svg"
            alt="Line3839"
            className={styles['line3']}
          />
          <img
            src="/line4840-hisz.svg"
            alt="Line4840"
            className={styles['line4']}
          />
          <img
            src="/line5841-j2wc.svg"
            alt="Line5841"
            className={styles['line5']}
          />
          <button className={styles['tablepopupbutton13']}>
            <span className={styles['text020']}>
              <span>인공지능</span>
            </span>
            <span className={styles['text022']}>
              <span>공7-118</span>
            </span>
          </button>
          <button className={styles['tablepopupbutton18']}>
            <span className={styles['text024']}>
              <span>인공지능</span>
            </span>
            <span className={styles['text026']}>
              <span>공7-118</span>
            </span>
          </button>
          <img
            src="/line6842-ejcn.svg"
            alt="Line6842"
            className={styles['line6']}
          />
          <span className={styles['text028']}>
            <span>월 화 수 목 금</span>
          </span>
          <span className={styles['text030']}>9</span>
          <span className={styles['text031']}>
            <span>10</span>
          </span>
          <span className={styles['text033']}>
            <span>11</span>
          </span>
          <span className={styles['text035']}>
            <span>12</span>
          </span>
          <span className={styles['text037']}>1</span>
          <span className={styles['text038']}>2</span>
          <span className={styles['text039']}>3</span>
          <span className={styles['text040']}>4</span>
          <span className={styles['text041']}>5</span>
          <button className={styles['tablepopupbutton3']}>
            <span className={styles['text042']}>
              <span>
                <span>C프로그래밍</span>
                <br></br>
                <span>기초및실습</span>
              </span>
            </span>
            <span className={styles['text047']}>
              <span>공7-219</span>
            </span>
          </button>
          <button className={styles['tablepopupbutton15']}>
            <span className={styles['text049']}>
              <span>
                <span>C프로그래밍</span>
                <br></br>
                <span>기초및실습</span>
              </span>
            </span>
            <span className={styles['text054']}>
              <span>공7-219</span>
            </span>
          </button>
          <button className={styles['tablepopupbutton5']}>
            <div className={styles['frame101']}>
              <span className={styles['text056']}>
                <span>운영체제</span>
              </span>
              <span className={styles['text058']}>
                <span>공7-219</span>
              </span>
            </div>
          </button>
          <button className={styles['tablepopupbutton4']}>
            <span className={styles['text060']}>
              <span>인공지능</span>
            </span>
            <span className={styles['text062']}>
              <span>공7-118</span>
            </span>
          </button>
          <button className={styles['tablepopupbutton7']}>
            <span className={styles['text064']}>
              <span>인공지능</span>
            </span>
            <span className={styles['text066']}>
              <span>공7-118</span>
            </span>
          </button>
          <button className={styles['tablepopupbutton2']}>
            <div className={styles['frame98']}>
              <span className={styles['text068']}>
                <span>
                  <span>C프로그래밍</span>
                  <br></br>
                  <span>기초및실습</span>
                </span>
              </span>
              <span className={styles['text073']}>
                <span>공7-219</span>
              </span>
            </div>
          </button>
          <button className={styles['tablepopupbutton8']}>
            <div className={styles['frame103']}>
              <span className={styles['text075']}>
                <span>웹프로그래밍</span>
              </span>
              <span className={styles['text077']}>
                <span>공7-219</span>
              </span>
            </div>
          </button>
          <button className={styles['tablepopupbutton11']}>
            <span className={styles['text079']}>
              <span>웹프로그래밍</span>
            </span>
            <span className={styles['text081']}>
              <span>공7-219</span>
            </span>
          </button>
          <button className={styles['tablepopupbutton16']}>
            <span className={styles['text083']}>
              <span>웹프로그래밍</span>
            </span>
            <span className={styles['text085']}>
              <span>공7-219</span>
            </span>
          </button>
          <button className={styles['tablepopupbutton1']}>
            <div className={styles['frame99']}>
              <span className={styles['text087']}>
                <span>
                  <span>C프로그래밍</span>
                  <br></br>
                  <span>기초및실습</span>
                </span>
              </span>
              <span className={styles['text092']}>
                <span>공7-219</span>
              </span>
            </div>
          </button>
          <button className={styles['tablepopupbutton6']}>
            <div className={styles['frame100']}>
              <span className={styles['text094']}>
                <span>
                  <span>C프로그래밍</span>
                  <br></br>
                  <span>기초및실습</span>
                </span>
              </span>
              <span className={styles['text099']}>
                <span>공7-219</span>
              </span>
            </div>
          </button>
          <button className={styles['tablepopupbutton12']}>
            <span className={styles['text101']}>
              <span>
                <span>C프로그래밍</span>
                <br></br>
                <span>기초및실습</span>
              </span>
            </span>
            <span className={styles['text106']}>
              <span>공7-219</span>
            </span>
          </button>
          <button className={styles['tablepopupbutton10']}>
            <span className={styles['text108']}>
              <span>운영체제</span>
            </span>
            <span className={styles['text110']}>
              <span>공7-219</span>
            </span>
          </button>
          <button className={styles['tablepopupbutton14']}>
            <span className={styles['text112']}>
              <span>
                <span>C프로그래밍</span>
                <br></br>
                <span>기초및실습</span>
              </span>
            </span>
            <span className={styles['text117']}>
              <span>공7-219</span>
            </span>
          </button>
        </div>
        <div className={styles['frame']}>
          <span className={styles['text119']}>
            <span>시간표 추가</span>
          </span>
          <img
            src="/circledplusi395-7rfe.svg"
            alt="CircledPlusI395"
            className={styles['circled-plus']}
          />
        </div>
        <span className={styles['text121']}>
          <span>2023년 1학기</span>
        </span>
        <span className={styles['text123']}>
          <span>TimeTable</span>
        </span>
        <button className={styles['button']}>
          <span className={styles['text125']}>추천 시간표 보기</span>
          <img
            src="/calendari395-lq4d.svg"
            alt="CalendarI395"
            className={styles['calendar']}
          />
        </button>
        <img
          src="/searchbutton3958-ghth.svg"
          alt="SearchButton3958"
          className={styles['search-button']}
        />
      </div>
    </div>
    )}
  </div>

  )
}

export default Home