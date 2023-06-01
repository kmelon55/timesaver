import React from 'react'

import projectStyles from '.style.module.css'
import styles from './selectoptionpage5.module.css'

const Selectoptionpage5 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['selectoptionpage5']}>
        <div className={styles['frame51']}>
          <button className={styles['button-primary']}>
            <span
              className={` ${styles['text']} ${projectStyles['action-action-m']} `}
            >
              <span>Next</span>
            </span>
          </button>
        </div>
        <div className={styles['frame83']}>
          <div className={styles['progress-bar']}>
            <img
              src="/rectangle1i267-lati-200h.png"
              alt="Rectangle1I267"
              className={styles['rectangle1']}
            />
          </div>
          <div className={styles['frame74']}>
            <span
              className={` ${styles['text02']} ${projectStyles['heading-h1']} `}
            >
              <span>공강 선호 요일을 선택해주세요</span>
            </span>
          </div>
        </div>
        <img
          src="/backbutton2680-1anmw.svg"
          alt="backButton2680"
          className={styles['back-button']}
        />
        <div className={styles['frame82']}>
          <div className={styles['list-item']}>
            <div className={styles['content']}>
              <span
                className={` ${styles['text04']} ${projectStyles['body-body-m']} `}
              >
                <span>월요일</span>
              </span>
            </div>
          </div>
          <div className={styles['list-item1']}>
            <div className={styles['content1']}>
              <span
                className={` ${styles['text06']} ${projectStyles['body-body-m']} `}
              >
                <span>화요일</span>
              </span>
            </div>
          </div>
          <div className={styles['list-item2']}>
            <div className={styles['content2']}>
              <span
                className={` ${styles['text08']} ${projectStyles['body-body-m']} `}
              >
                <span>목요일</span>
              </span>
            </div>
            <button className={styles['right-button']}>
              <img
                src="/filli268-k8y4-200h.png"
                alt="FillI268"
                className={styles['fill']}
              />
            </button>
          </div>
          <div className={styles['list-item3']}>
            <div className={styles['content3']}>
              <span
                className={` ${styles['text10']} ${projectStyles['body-body-m']} `}
              >
                <span>금요일</span>
              </span>
            </div>
            <button className={styles['right-button1']}>
              <img
                src="/filli268-xj5n-200h.png"
                alt="FillI268"
                className={styles['fill1']}
              />
            </button>
          </div>
          <div className={styles['list-item4']}>
            <div className={styles['content4']}>
              <span
                className={` ${styles['text12']} ${projectStyles['body-body-m']} `}
              >
                <span>공강 없어도 상관 없음</span>
              </span>
            </div>
            <button className={styles['right-button2']}>
              <img
                src="/filli269-4f5zi-200h.png"
                alt="FillI269"
                className={styles['fill2']}
              />
            </button>
          </div>
        </div>
        <div className={styles['bottombar']}>
          <button className={styles['selectoptionbutton']}>
            <img
              src="/optionselectbuttoni397-dfbc.svg"
              alt="optionselectbuttonI397"
              className={styles['optionselectbutton']}
            />
            <span className={styles['text14']}>
              <span>강의 옵션 선택</span>
            </span>
          </button>
          <button className={styles['homebutton']}>
            <span className={styles['text16']}>
              <span>Home</span>
            </span>
            <img
              src="/homebuttoni397-e94.svg"
              alt="HomeButtonI397"
              className={styles['home-button1']}
            />
          </button>
          <button className={styles['mypagebutton']}>
            <span className={styles['text18']}>
              <span>my page</span>
            </span>
            <img
              src="/userpagebuttoni397-v7sc.svg"
              alt="UserpagebuttonI397"
              className={styles['userpagebutton']}
            />
         
      </div>
    </div>
  )
}

export default Selectoptionpage5
