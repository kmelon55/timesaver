import React,{useState} from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import styles from './selectoptionpage7.module.css'
import backbutton from"./backButton.png"
const Selectoptionpage7 = (props) => {
  const [text, inputText]= useState("X")

  return (
    <div className={styles['container']}>
      <div className={styles['selectoptionpage7']}>
      <Link to="/Option5">
        <div className={styles['frame51']}>
          
          <button className={styles['button-primary']}>
            <span>
              <span>Next</span>
            </span>
          </button>
          
        </div>
        </Link>
        <div className={styles['frame83']}>
          <div className={styles['progress-bar']}>
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dd80873b-c2d7-4a34-89a9-e77252cf01b5/9751ac01-0809-4e51-b277-867a88c54970?org_if_sml=1218"
              alt="Rectangle1I281"
              className={styles['rectangle1']}
            />
          </div>
          <div className={styles['frame74']}>
            <span>
              <span><h3>듣고 싶은 전공선택 과목을 입력해주세요</h3></span>
            </span>
          </div>
        </div>
        <Link to={"/Option3"}>
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
                <input type='text' value={text} onChange={(e)=> inputText(e.target.value)} style={{width:"250px"}}/>
              </span>
              
            </div>
          </div>
          
        </div>
        
    </div>
    </div>
  )
}

export default Selectoptionpage7
