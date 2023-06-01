import React from 'react'

import projectStyles from '.style.module.css'
import styles from './selectoptionpage3.module.css'

const Selectoptionpage3 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['selectoptionpage3']}>
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
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83500b0e-6528-4d22-adda-d9e7de434eab/9f771303-06ce-4401-b3ac-b07c0f1481b8?org_if_sml=1219"
              alt="Rectangle1I264"
              className={styles['rectangle1']}
            />
          </div>
          <div className={styles['frame74']}>
            <span
              className={` ${styles['text02']} ${projectStyles['heading-h1']} `}
            >
              <span>잔여 학점을 입력해주세요</span>
            </span>
          </div>
        </div>
        <img
          src="/backbutton2649-1sqb.svg"
          alt="backButton2649"
          className={styles['back-button']}
        />
        <div className={styles['form']}>
          <div className={styles['text-field']}>
            <span className={styles['text04']}>
              <span>전공 필수</span>
            </span>
            <div className={styles['field']}>
              <div className={styles['content']}>
                <div className={styles['text06']}>
                  <span
                    className={` ${styles['text07']} ${projectStyles['body-body-m']} `}
                  ></span>
                  <img
                    src="/cursori266-zhs8.svg"
                    alt="CursorI266"
                    className={styles['cursor']}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['text-field1']}>
            <span className={styles['text08']}>
              <span>전공 선택</span>
            </span>
            <div className={styles['field1']}>
              <div className={styles['content1']}>
                <div className={styles['text10']}>
                  <span
                    className={` ${styles['text11']} ${projectStyles['body-body-m']} `}
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['text-field2']}>
            <span className={styles['text12']}>
              <span>일반 선택</span>
            </span>
            <div className={styles['field2']}>
              <div className={styles['content2']}>
                <div className={styles['text14']}>
                  <span
                    className={` ${styles['text15']} ${projectStyles['body-body-m']} `}
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['text-field3']}>
            <span className={styles['text16']}>
              <span>교양 필수</span>
            </span>
            <div className={styles['field3']}>
              <div className={styles['content3']}>
                <div className={styles['text18']}>
                  <span
                    className={` ${styles['text19']} ${projectStyles['body-body-m']} `}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['bottombar']}>
          <button className={styles['selectoptionbutton']}>
            <img
              src="/optionselectbuttoni397-gh4f.svg"
              alt="optionselectbuttonI397"
              className={styles['optionselectbutton']}
            />
            <span className={styles['text20']}>
              <span>강의 옵션 선택</span>
            </span>
          </button>
          <button className={styles['homebutton']}>
            <span className={styles['text22']}>
              <span>Home</span>
            </span>
            <img
              src="/homebuttoni397-ap7.svg"
              alt="HomeButtonI397"
              className={styles['home-button1']}
            />
          </button>
          <button className={styles['mypagebutton']}>
            <span className={styles['text24']}>
              <span>my page</span>
            </span>
            <img
              src="/userpagebuttoni397-i77.svg"
              alt="UserpagebuttonI397"
              className={styles['userpagebutton']}
            />
         
      </div>
    </div>
  )
}

export default Selectoptionpage3
