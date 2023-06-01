import React from 'react'

import projectStyles from '.style.module.css'
import styles from './modifyinfopage.module.css'

const Modifyinfopage = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['modifyinfopage']}>
        <div className={styles['i-o-status-bar']}>
          <div className={styles['action']}>
            <span className={styles['text']}>
              <span>9:41</span>
            </span>
          </div>
          <div className={styles['container1']}>
            <span className={styles['text02']}>
              <span>􀛨</span>
            </span>
            <img
              src="/signali461-a19i.svg"
              alt="SignalI461"
              className={styles['signal']}
            />
            <span className={styles['text04']}>
              <span>􀙇</span>
            </span>
          </div>
        </div>
        <span className={styles['text06']}>
          <span>내 정보 변경</span>
        </span>
        <div className={styles['bottombar']}>
          <button className={styles['selectoptionbutton']}>
            <img
              src="/optionselectbuttoni461-m6ah.svg"
              alt="optionselectbuttonI461"
              className={styles['optionselectbutton']}
            />
            <span className={styles['text08']}>
              <span>강의 옵션 선택</span>
            </span>
          </button>
          <button className={styles['homebutton']}>
            <span className={styles['text10']}>
              <span>Home</span>
            </span>
            <img
              src="/homebuttoni461-r0ck.svg"
              alt="HomeButtonI461"
              className={styles['home-button1']}
            />
          </button>
          <button className={styles['mypagebutton']}>
            <span className={styles['text12']}>
              <span>my page</span>
            </span>
            <img
              src="/userpagebuttoni461-ipco.svg"
              alt="UserpagebuttonI461"
              className={styles['userpagebutton']}
            />
          </button>
        </div>
        <div className={styles['form']}>
          <div className={styles['text-field']}>
            <span
              className={` ${styles['text14']} ${projectStyles['heading-h5']} `}
            >
              <span>Email Address</span>
            </span>
            <div className={styles['field']}>
              <div className={styles['content']}>
                <div className={styles['text16']}>
                  <span
                    className={` ${styles['text17']} ${projectStyles['body-body-m']} `}
                  >
                    <span>name@email.com</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['text-field1']}>
            <span
              className={` ${styles['text19']} ${projectStyles['heading-h5']} `}
            >
              <span>Password</span>
            </span>
            <div className={styles['field1']}>
              <div className={styles['content1']}>
                <div className={styles['text21']}>
                  <span
                    className={` ${styles['text22']} ${projectStyles['body-body-m']} `}
                  >
                    <span>Create a passaword</span>
                  </span>
                </div>
              </div>
              <div className={styles['icon']}>
                <img
                  src="/filli461-im1-200h.png"
                  alt="FillI461"
                  className={styles['fill']}
                />
              </div>
            </div>
          </div>
          <div className={styles['text-field2']}>
            <div className={styles['field2']}>
              <div className={styles['content2']}>
                <div className={styles['text24']}>
                  <span
                    className={` ${styles['text25']} ${projectStyles['body-body-m']} `}
                  >
                    <span>Confirm password</span>
                  </span>
                </div>
              </div>
              <div className={styles['icon1']}>
                <img
                  src="/filli461-bxh-200h.png"
                  alt="FillI461"
                  className={styles['fill1']}
                />
              </div>
            </div>
          </div>
          <div className={styles['text-field3']}>
            <span
              className={` ${styles['text27']} ${projectStyles['heading-h5']} `}
            >
              <span>학과</span>
            </span>
            <div className={styles['field3']}>
              <div className={styles['content3']}>
                <div className={styles['text29']}>
                  <span
                    className={` ${styles['text30']} ${projectStyles['body-body-m']} `}
                  >
                    <span>ex. 컴퓨터정보통신공학과</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modifyinfopage

