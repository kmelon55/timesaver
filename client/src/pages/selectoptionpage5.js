import React,{useState} from 'react'
import styles from './selectoptionpage5.module.css'
import backbutton from"./backButton.png"

import { Link, useSearchParams } from 'react-router-dom';

const Selectoptionpage5 = (props) => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
  

  return (
    <div className={styles['container']}>
      <div className={styles['selectoptionpage5']}>
      <Link to ={"/Option3"}>
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
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83500b0e-6528-4d22-adda-d9e7de434eab/88768360-4123-4215-a6db-e3f87f7c4cf5?org_if_sml=1227"
              alt="Rectangle1I267"
              className={styles['rectangle1']}
            />
          </div>
          <div className={styles['frame74']}>
            <span>
              <span><h2>공강 선호 요일을 선택해주세요</h2></span>
            </span>
          </div>
        </div>
        <Link to={"/Option1"}>
        <img
          src={backbutton}
          alt="backButton2680"
          className={styles['back-button']}
        />
        </Link>
        <div className={styles['frame82']}>
          <div className={styles['list-item']}>
            <div className={styles['content']}>
              <span>
                <span>
                <div>
      <label>
        <input
          type="radio"
          name="option"
          value="Mon"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        월요일
      </label>
   </div>
                  </span>
              </span>
            </div>
          </div>
          <div className={styles['list-item1']}>
            <div className={styles['content1']}>
              <span
                
              >
                <span><label>
        <input
          type="radio"
          name="option"
          value="Tue"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        화요일
      </label></span>
              </span>
            </div>
          </div>
          <div className={styles['list-item2']}>
            <div className={styles['content2']}>
              <span
                
              >
                <span><label>
        <input
          type="radio"
          name="option"
          value="Thu"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        목요일
      </label></span>
              </span>
            </div>
            
          </div>
          <div className={styles['list-item3']}>
            <div className={styles['content3']}>
              <span
                
              >
                <span><label>
        <input
          type="radio"
          name="option"
          value="Fri"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        금요일
      </label></span>
              </span>
            </div>
            
          </div>
          <div className={styles['list-item4']}>
            <div className={styles['content4']}>
              <span
                
              >
                <span><label>
        <input
          type="radio"
          name="option"
          value="All"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        상관없음
      </label></span>
              </span>
            </div>
            
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Selectoptionpage5
