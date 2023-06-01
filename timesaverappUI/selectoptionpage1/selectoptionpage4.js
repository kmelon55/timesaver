import React from 'react'

import projectStyles from '.style.module.css'
import styles from './selectoptionpage4.module.css'

const Selectoptionpage4 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['selectoptionpage4']}>
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
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83500b0e-6528-4d22-adda-d9e7de434eab/88768360-4123-4215-a6db-e3f87f7c4cf5?org_if_sml=1227"
              alt="Rectangle1I265"
              className={styles['rectangle1']}
            />
          </div>
          <div className={styles['frame74']}>
            <span
              className={` ${styles['text02']} ${projectStyles['heading-h1']} `}
            >
              <span>선호 시간대를 선택해주세요</span>
            </span>
          </div>
        </div>
        <img
          src="/backbutton2655-grcb.svg"
          alt="backButton2655"
          className={styles['back-button']}
        />
        <div className={styles['frame82']}>
          <div className={styles['list-item']}>
            <div className={styles['content']}>
              <span
                className={` ${styles['text04']} ${projectStyles['body-body-m']} `}
              >
                <span>오전</span>
              </span>
            </div>
          </div>
          <div className={styles['list-item1']}>
            <div className={styles['content1']}>
              <span
                className={` ${styles['text06']} ${projectStyles['body-body-m']} `}
              >
                <span>오후</span>
              </span>
            </div>
          </div>
          <div className={styles['list-item2']}>
            <div className={styles['content2']}>
              <span
                className={` ${styles['text08']} ${projectStyles['body-body-m']} `}
              >
                <span>저녁</span>
              </span>
            </div>
            <button className={styles['right-button']}>
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83500b0e-6528-4d22-adda-d9e7de434eab/8c7f6fe3-c001-4e88-97a1-a1813582b53a?org_if_sml=1112"
                alt="FillI267"
                className={styles['fill']}
              />
            </button>
          </div>
        </div>
        <div className={styles['bottombar']}>
          <button className={styles['selectoptionbutton']}>
            <img
              src="/optionselectbuttoni397-ckof.svg"
              alt="optionselectbuttonI397"
              className={styles['optionselectbutton']}
            />
            <span className={styles['text10']}>
              <span>강의 옵션 선택</span>
            </span>
          </button>
          <button className={styles['homebutton']}>
            <span className={styles['text12']}>
              <span>Home</span>
            </span>
            <img
              src="/homebuttoni397-edui.svg"
              alt="HomeButtonI397"
              className={styles['home-button1']}
            />
          </button>
          <button className={styles['mypagebutton']}>
            <span className={styles['text14']}>
              <span>my page</span>
            </span>
            <img
              src="/userpagebuttoni397-drkg.svg"
              alt="UserpagebuttonI397"
              className={styles['userpagebutton']}
            />
          </button>
        </div>
        <div className={styles['i-o-status-bar']}>
          <div className={styles['action']}>
            <span className={styles['text16']}>
              <span>9:41</span>
            </span>
          </div>
          <div className={styles['container1']}>
            <span className={styles['text18']}>
              <span>􀛨</span>
            </span>
            <img
              src="/signali265-w.svg"
              alt="SignalI265"
              className={styles['signal']}
            />
            <span className={styles['text20']}>
              <span>􀙇</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Selectoptionpage4
