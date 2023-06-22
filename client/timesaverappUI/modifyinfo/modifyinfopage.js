import React from 'react'

import projectStyles from '.style.module.css'
import styles from './modifyinfopage.module.css'

const Modifyinfopage = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['modifyinfopage']}>
        <span className={styles['text']}>
          <span>내 정보 변경</span>
        </span>
        <div className={styles['bottombar']}>
          <button className={styles['selectoptionbutton']}>
            <img
              alt="optionselectbuttonI461"
              src="/optionselectbuttoni461-m6ah.svg"
              className={styles['optionselectbutton']}
            />
            <span className={styles['text02']}>
              <span>강의 옵션 선택</span>
            </span>
          </button>
          <button className={styles['homebutton']}>
            <span className={styles['text04']}>
              <span>Home</span>
            </span>
            <img
              alt="HomeButtonI461"
              src="/homebuttoni461-r0ck.svg"
              className={styles['home-button1']}
            />
          </button>
          <button className={styles['mypagebutton']}>
            <span className={styles['text06']}>
              <span>my page</span>
            </span>
            <img
              alt="UserpagebuttonI461"
              src="/userpagebuttoni461-ipco.svg"
              className={styles['userpagebutton']}
            />
          </button>
        </div>
        <div className={styles['form']}>
          <div className={styles['text-field']}>
            <span
              className={` ${styles['text08']} ${projectStyles['heading-h5']} `}
            >
              <span>Email Address</span>
            </span>
            <div className={styles['field']}>
              <div className={styles['content']}>
                <div className={styles['text10']}>
                  <span
                    className={` ${styles['text11']} ${projectStyles['body-body-m']} `}
                  >
                    <span>name@email.com</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['text-field1']}>
            <span
              className={` ${styles['text13']} ${projectStyles['heading-h5']} `}
            >
              <span>Password</span>
            </span>
            <div className={styles['field1']}>
              <div className={styles['content1']}>
                <div className={styles['text15']}>
                  <span
                    className={` ${styles['text16']} ${projectStyles['body-body-m']} `}
                  >
                    <span>Create a passaword</span>
                  </span>
                </div>
              </div>
              <div className={styles['icon']}>
                <img
                  alt="FillI461"
                  src="/filli461-im1-200h.png"
                  className={styles['fill']}
                />
              </div>
            </div>
          </div>
          <div className={styles['text-field2']}>
            <div className={styles['field2']}>
              <div className={styles['content2']}>
                <div className={styles['text18']}>
                  <span
                    className={` ${styles['text19']} ${projectStyles['body-body-m']} `}
                  >
                    <span>Confirm password</span>
                  </span>
                </div>
              </div>
              <div className={styles['icon1']}>
                <img
                  alt="FillI461"
                  src="/filli461-bxh-200h.png"
                  className={styles['fill1']}
                />
              </div>
            </div>
          </div>
          <div className={styles['text-field3']}>
            <span
              className={` ${styles['text21']} ${projectStyles['heading-h5']} `}
            >
              <span>학과</span>
            </span>
            <div className={styles['field3']}>
              <div className={styles['content3']}>
                <div className={styles['text23']}>
                  <span
                    className={` ${styles['text24']} ${projectStyles['body-body-m']} `}
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

