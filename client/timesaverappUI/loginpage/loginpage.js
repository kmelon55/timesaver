import React from 'react'

import styles from './loginpage.module.css'

const Loginpage = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['loginpage']}>
        <img
          src="/logoimage145-md5p-200h.png"
          alt="logoimage145"
          className={styles['logoimage']}
        />
        <div className={styles['-denterspace']}>
          <img
            src="/rectangle8155-t4ij-200h.png"
            alt="Rectangle8155"
            className={styles['rectangle8']}
          />
          <img
            src="/ellipse8156-z33s-200w.png"
            alt="Ellipse8156"
            className={styles['ellipse8']}
          />
          <img
            src="/ellipse7157-o2i-200w.png"
            alt="Ellipse7157"
            className={styles['ellipse7']}
          />
        </div>
        <div className={styles['passwordenterspace']}>
          <img
            src="/rectangle9159-t34c-200h.png"
            alt="Rectangle9159"
            className={styles['rectangle9']}
          />
          <img
            src="/ellipse6160-feme-200w.png"
            alt="Ellipse6160"
            className={styles['ellipse6']}
          />
          <img
            src="/ellipse9161-cl19-200w.png"
            alt="Ellipse9161"
            className={styles['ellipse9']}
          />
        </div>
        <span className={styles['text']}>
          <span>ID :</span>
        </span>
        <span className={styles['text2']}>
          <span>PW :</span>
        </span>
        <button className={styles['signinbutton']}>
          <span className={styles['text4']}>sign in</span>
        </button>
        <button className={styles['find-id-wbutton']}>
          <span className={styles['text5']}>
            <span>find ID/PW</span>
          </span>
        </button>
        <span className={styles['text7']}>/</span>
      </div>
    </div>
  )
}

export default Loginpage