import React from 'react'

import projectStyles from '.style.module.css'
import styles from './selectoptionpage7.module.css'

const Selectoptionpage7 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['selectoptionpage7']}>
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
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dd80873b-c2d7-4a34-89a9-e77252cf01b5/9751ac01-0809-4e51-b277-867a88c54970?org_if_sml=1218"
              alt="Rectangle1I281"
              className={styles['rectangle1']}
            />
          </div>
          <div className={styles['frame74']}>
            <span
              className={` ${styles['text02']} ${projectStyles['heading-h1']} `}
            >
              <span>듣고 싶은 전공선택 과목을 입력해주세요</span>
            </span>
          </div>
        </div>
        <img
          src="/backbutton2810-wd4m.svg"
          alt="backButton2810"
          className={styles['back-button']}
        />
        <div className={styles['field']}>
          <div className={styles['content']}>
            <div className={styles['text04']}>
              <span
                className={` ${styles['text05']} ${projectStyles['body-body-m1']} `}
              >
                X
              </span>
              <img
                src="/cursor2810-bi2l.svg"
                alt="Cursor2810"
                className={styles['cursor']}
              />
            </div>
          </div>
          <img
            src="/vector2810-30g.svg"
            alt="Vector2810"
            className={styles['vector']}
          />
        </div>
        <div className={styles['bottombar']}>
          <button className={styles['selectoptionbutton']}>
            <img
              src="/optionselectbuttoni398-ofg9.svg"
              alt="optionselectbuttonI398"
              className={styles['optionselectbutton']}
            />
            <span className={styles['text06']}>
              <span>강의 옵션 선택</span>
            </span>
          </button>
          <button className={styles['homebutton']}>
            <span className={styles['text08']}>
              <span>Home</span>
            </span>
            <img
              src="/homebuttoni398-9d4v.svg"
              alt="HomeButtonI398"
              className={styles['home-button1']}
            />
          </button>
          <button className={styles['mypagebutton']}>
            <span className={styles['text10']}>
              <span>my page</span>
            </span>
            <img
              src="/userpagebuttoni398-1t9.svg"
              alt="UserpagebuttonI398"
              className={styles['userpagebutton']}
            />
      </div>
    </div>
  )
}

export default Selectoptionpage7
