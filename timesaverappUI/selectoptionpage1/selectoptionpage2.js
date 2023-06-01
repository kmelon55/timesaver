import React from 'react'

import projectStyles from '.style.module.css'
import styles from './selectoptionpage2.module.css'

const Selectoptionpage2 = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['selectoptionpage2']}>
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
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83500b0e-6528-4d22-adda-d9e7de434eab/f357ab6e-4744-42b6-9377-98e2a7e8b787?org_if_sml=1219"
              alt="Rectangle1I263"
              className={styles['rectangle1']}
            />
          </div>
          <div className={styles['frame74']}>
            <span
              className={` ${styles['text02']} ${projectStyles['heading-h1']} `}
            >
              <span>학과를 입력해주세요</span>
            </span>
          </div>
        </div>
        <img
          src="/backbutton2641-4s1.svg"
          alt="backButton2641"
          className={styles['back-button']}
        />
        <div className={styles['field']}>
          <div className={styles['content']}>
            <div className={styles['text04']}>
              <span
                className={` ${styles['text05']} ${projectStyles['body-body-m1']} `}
              >
                <span>컴퓨터정보통신공</span>
              </span>
              <img
                src="/cursor2646-2lth.svg"
                alt="Cursor2646"
                className={styles['cursor']}
              />
            </div>
          </div>
          <img
            src="/vector2647-arv6.svg"
            alt="Vector2647"
            className={styles['vector']}
          />
        </div>
        <div className={styles['bottombar']}>
          <button className={styles['selectoptionbutton']}>
            <img
              src="/optionselectbuttoni397-sm36.svg"
              alt="optionselectbuttonI397"
              className={styles['optionselectbutton']}
            />
            <span className={styles['text07']}>
              <span>강의 옵션 선택</span>
            </span>
          </button>
          <button className={styles['homebutton']}>
            <span className={styles['text09']}>
              <span>Home</span>
            </span>
            <img
              src="/homebuttoni397-6fon.svg"
              alt="HomeButtonI397"
              className={styles['home-button1']}
            />
          </button>
          <button className={styles['mypagebutton']}>
            <span className={styles['text11']}>
              <span>my page</span>
            </span>
            <img
              src="/userpagebuttoni397-vi5d.svg"
              alt="UserpagebuttonI397"
              className={styles['userpagebutton']}
            />
         
      </div>
    </div>
  )
}

export default Selectoptionpage2
