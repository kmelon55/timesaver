import React from 'react'

import styles from './mypage.module.css'

const Mypage = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['mypage']}>
        <div className={styles['myinfoframe']}>
          <span className={styles['text']}>
            <span>홍길동</span>
          </span>
          <span className={styles['text02']}>
            <span>191234</span>
          </span>
          <span className={styles['text04']}>
            <span>컴퓨터정보통신공학과</span>
          </span>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83500b0e-6528-4d22-adda-d9e7de434eab/31d96da6-a645-4c26-8561-573fc7db36a1?org_if_sml=13959"
            alt="logopage2413"
            className={styles['logopage']}
          />
        </div>
        <div className={styles['i-o-status-bar']}>
          <div className={styles['action']}>
            <span className={styles['text06']}>
              <span>9:41</span>
            </span>
          </div>
          <div className={styles['container1']}>
            <span className={styles['text08']}>
              <span>􀛨</span>
            </span>
            <img
              src="/signali241-oc2im.svg"
              alt="SignalI241"
              className={styles['signal']}
            />
            <span className={styles['text10']}>
              <span>􀙇</span>
            </span>
          </div>
        </div>
        <span className={styles['text12']}>
          <span>내 정보</span>
        </span>
        <div className={styles['accountframe']}>
          <span className={styles['text14']}>
            <span>
              계정
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className={styles['frame']}>
            <span className={styles['text16']}>
              <span>학과 변경</span>
            </span>
          </div>
          <div className={styles['frame1']}>
            <span className={styles['text18']}>
              <span>비밀번호 변경</span>
            </span>
          </div>
          <div className={styles['frame2']}>
            <span className={styles['text20']}>
              <span>이메일 변경</span>
            </span>
          </div>
        </div>
        <div className={styles['etcframe']}>
          <span className={styles['text22']}>
            <span>기타</span>
          </span>
          <div className={styles['frame3']}>
            <span className={styles['text24']}>
              <span>회원 탈퇴</span>
            </span>
          </div>
          <div className={styles['frame4']}>
            <span className={styles['text26']}>
              <span>로그아웃</span>
            </span>
          </div>
        </div>
        <div className={styles['bottombar']}>
          <button className={styles['selectoptionbutton']}>
            <img
              src="/optionselectbuttoni397-de4n.svg"
              alt="optionselectbuttonI397"
              className={styles['optionselectbutton']}
            />
            <span className={styles['text28']}>
              <span>강의 옵션 선택</span>
            </span>
          </button>
          <button className={styles['homebutton']}>
            <span className={styles['text30']}>
              <span>Home</span>
            </span>
            <img
              src="/homebuttoni397-4qx6.svg"
              alt="HomeButtonI397"
              className={styles['home-button1']}
            />
          </button>
          <button className={styles['mypagebutton']}>
            <span className={styles['text32']}>
              <span>my page</span>
            </span>
            <img
              src="/userpagebuttoni397-k7q9.svg"
              alt="UserpagebuttonI397"
              className={styles['userpagebutton']}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Mypage
