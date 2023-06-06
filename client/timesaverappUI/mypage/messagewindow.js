import React from 'react'

import styles from './messagewindow.module.css'

const Messagewindow = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['messagewindow']}>
        <img
          src="/logopage4613-ae2-200w.png"
          alt="logopage4613"
          className={styles['logopage']}
        />
        <span className={styles['text']}>
          <span>탈퇴하시겠습니까?</span>
        </span>
        <div className={styles['checkbox-variants']}>
          <div className={styles['checkbox-parentcomponents']}>
            <div className={styles['wrapper']}>
              <img
                src="/checkmarki461-h0ay.svg"
                alt="CheckmarkI461"
                className={styles['checkmark']}
              />
            </div>
            <span className={styles['text2']}>
              <span>네, 탈퇴하겠습니다.</span>
            </span>
          </div>
        </div>
        <div className={styles['checkbox-variants1']}>
          <div className={styles['checkbox-parentcomponents1']}>
            <div className={styles['wrapper1']}>
              <div className={styles['checkmark1']}></div>
            </div>
            <span className={styles['text4']}>
              <span>아니오, 계정을 유지하겠습니다</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messagewindow


