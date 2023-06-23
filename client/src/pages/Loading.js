import React from 'react'

import styles from './loadingpage.module.css'

const Loadingpage = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['loadingpage']}>
        <div className={styles['logoimage']}>
          <img
            src="/logoimage13-svvv-500h.png"
            alt="logoimage13"
            className={styles['logoimage1']}
          />
        </div>
        <div className={styles['from-cnu-elogobottom']}>
          <span className={styles['text']}>
            <span>from CNU C.E</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Loadingpage