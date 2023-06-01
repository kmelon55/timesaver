import React from 'react'

import projectStyles from '.style.module.css'
import styles from './selectoptionpage1.module.css'

const Selectoptionpage1 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['selectoptionpage1']}>
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
          <div className={styles['progress-bar']}></div>
          <div className={styles['frame74']}>
            <span
              className={` ${styles['text02']} ${projectStyles['heading-h1']} `}
            >
              <span>학년을 선택해주세요</span>
            </span>
          </div>
          <div className={styles['frame82']}>
            <div className={styles['list-item']}>
              <div className={styles['content']}>
                <span
                  className={` ${styles['text04']} ${projectStyles['body-body-m']} `}
                >
                  <span>대학생 1년</span>
                </span>
              </div>
            </div>
            <div className={styles['list-item1']}>
              <div className={styles['content1']}>
                <span
                  className={` ${styles['text06']} ${projectStyles['body-body-m']} `}
                >
                  <span>대학생 2년</span>
                </span>
              </div>
            </div>
            <div className={styles['list-item2']}>
              <div className={styles['content2']}>
                <span
                  className={` ${styles['text08']} ${projectStyles['body-body-m']} `}
                >
                  <span>대학생 3년</span>
                </span>
              </div>
              <button className={styles['right-button']}>
                <img
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83500b0e-6528-4d22-adda-d9e7de434eab/81576a71-d242-43d3-8533-67772ee2b971?org_if_sml=1112"
                  alt="FillI241"
                  className={styles['fill']}
                />
              </button>
            </div>
            <div className={styles['list-item3']}>
              <div className={styles['content3']}>
                <span
                  className={` ${styles['text10']} ${projectStyles['body-body-m']} `}
                >
                  <span>대학생 4년</span>
                </span>
              </div>
            </div>
            <div className={styles['list-item4']}>
              <div className={styles['content4']}>
                <span
                  className={` ${styles['text12']} ${projectStyles['body-body-m']} `}
                >
                  <span>대학원생 1년</span>
                </span>
              </div>
            </div>
            <div className={styles['list-item5']}>
              <div className={styles['content5']}>
                <span
                  className={` ${styles['text14']} ${projectStyles['body-body-m']} `}
                >
                  <span>대학원생 2년</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/backbutton2414-gzv.svg"
          alt="backButton2414"
          className={styles['back-button']}
        />
        <div className={styles['bottombar']}>
          <button className={styles['selectoptionbutton']}>
            <img
              src="/optionselectbuttoni397-hn33.svg"
              alt="optionselectbuttonI397"
              className={styles['optionselectbutton']}
            />
            <span className={styles['text16']}>
              <span>강의 옵션 선택</span>
            </span>
          </button>
          <button className={styles['homebutton']}>
            <span className={styles['text18']}>
              <span>Home</span>
            </span>
            <img
              src="/homebuttoni397-kdl.svg"
              alt="HomeButtonI397"
              className={styles['home-button1']}
            />
          </button>
          <button className={styles['mypagebutton']}>
            <span className={styles['text20']}>
              <span>my page</span>
            </span>
            <img
              src="/userpagebuttoni397-81v.svg"
              alt="UserpagebuttonI397"
              className={styles['userpagebutton']}
            />
          </button>
        </div>
        <div className={styles['i-o-status-bar']}>
          <div className={styles['action']}>
            <span className={styles['text22']}>
              <span>9:41</span>
            </span>
          </div>
          <div className={styles['container1']}>
            <span className={styles['text24']}>
              <span>􀛨</span>
            </span>
            <img
              src="/signali241-qi1.svg"
              alt="SignalI241"
              className={styles['signal']}
            />
            <span className={styles['text26']}>
              <span>􀙇</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Selectoptionpage1
