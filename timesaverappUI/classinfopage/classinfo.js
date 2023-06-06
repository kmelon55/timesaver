import React from 'react'

import styles from './classinfopage.module.css'

const Classinfopage = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['classinfopage']}>
        <span className={styles['text']}>
          <span>소프트웨어공학응용</span>
        </span>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83500b0e-6528-4d22-adda-d9e7de434eab/9be6e068-0362-43e5-89a1-1876be63d735?org_if_sml=111832"
          alt="Rectangle102422"
          className={styles['rectangle10']}
        />
        <img
          src="/line152422-qune.svg"
          alt="Line152422"
          className={styles['line15']}
        />
        <img
          src="/line202425-rd6a.svg"
          alt="Line202425"
          className={styles['line20']}
        />
        <img
          src="/line172422-ydt5.svg"
          alt="Line172422"
          className={styles['line17']}
        />
        <img
          src="/line182422-puh.svg"
          alt="Line182422"
          className={styles['line18']}
        />
        <img
          src="/line192422-yb6t.svg"
          alt="Line192422"
          className={styles['line19']}
        />
        <span className={styles['text02']}>
          <span>
            강의 평점
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className={styles['text04']}>
          <span>5.0</span>
        </span>
        <span className={styles['text06']}>
          <span>
            교수
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className={styles['text08']}>
          <span>김진술</span>
        </span>
        <span className={styles['text10']}>
          <span>화 12:00-13:30, 목 12:00-13:30</span>
        </span>
        <span className={styles['text12']}>
          <span>공 7-118</span>
        </span>
        <span className={styles['text14']}>
          <span>시간</span>
        </span>
        <span className={styles['text16']}>
          <span>
            <span>
              #개발 #프론트엔드 #백엔드 #UI #DB
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>#소프트웨어공학개론</span>
            <br></br>
            <span>#코딩 #팀프로젝트</span>
          </span>
        </span>
        <span className={styles['text23']}>
          <span>키워드</span>
        </span>
        <span className={styles['text25']}>
          <span>장소</span>
        </span>
        <img
          src="/backbutton2414-58or.svg"
          alt="backButton2414"
          className={styles['back-button']}
        />
        <button className={styles['alert-button']}>
          <img
            src="/belli398-ol5vv.svg"
            alt="BellI398"
            className={styles['bell']}
          />
          <span className={styles['text27']}>
            <span>여석 알림 받기</span>
          </span>
        </button>
        <div className={styles['bottombar']}>
          <button className={styles['selectoptionbutton']}>
            <img
              src="/optionselectbuttoni397-urdd.svg"
              alt="optionselectbuttonI397"
              className={styles['optionselectbutton']}
            />
            <span className={styles['text29']}>
              <span>강의 옵션 선택</span>
            </span>
          </button>
          <button className={styles['homebutton']}>
            <span className={styles['text31']}>
              <span>Home</span>
            </span>
            <img
              src="/homebuttoni397-sk0v.svg"
              alt="HomeButtonI397"
              className={styles['home-button1']}
            />
          </button>
          <button className={styles['mypagebutton']}>
            <span className={styles['text33']}>
              <span>my page</span>
            </span>
            <img
              src="/userpagebuttoni397-kaec.svg"
              alt="UserpagebuttonI397"
              className={styles['userpagebutton']}
            />
      </div>
    </div>
  )
}

export default Classinfopage

