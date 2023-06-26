import React,{useState} from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import styles from './selectoptionpage8.module.css'
import backbutton from"./backButton.png"

const Selectoptionpage8 = (props) => {
  const [text, inputText]= useState("X")

  return (
    <div className={styles['container']}>
      <div className={styles['selectoptionpage8']}>
      <Link to= "/mypage">
        <div className={styles['frame51']}>
          
          <button className={styles['button-primary']}>
            <span>
              <span>Home</span>
            </span>
          </button>
          
        </div>
        </Link>
        <div className={styles['frame83']}>
          <div className={styles['progress-bar']}>
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dd80873b-c2d7-4a34-89a9-e77252cf01b5/1a9e195c-8a19-41a6-8bc3-14b59d976178?org_if_sml=1232"
              alt="Rectangle1I281"
              className={styles['rectangle1']}
            />
          </div>
          <div className={styles['frame74']}>
            <span
              
            >
              <span>
                <h3>들어야 하는 타 학년 전공필수 과목(재수강 등)을<br/> 입력해주세요</h3>
              </span>
            </span>
          </div>
        </div>
        <Link to={"/Option4"}>
        <button>
        <img
          src={backbutton}
          alt="backButton2810"
          className={styles['back-button']}
        />
        </button>
        </Link>
        <div className={styles['field']}>
          <div className={styles['content']}>
            <div className={styles['text04']}>
              <span>
              <input type='text' value={text} onChange={(e)=> inputText(e.target.value)} style={{width:"250px"}} />
              </span>
              
            </div>
          </div>
          
        </div>
        
    </div>
    </div>
  )
}

export default Selectoptionpage8
