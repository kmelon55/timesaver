import React,{useState} from 'react'
import styles from './selectoptionpage4.module.css'
import Radio from "./Radio"
import RadioGroup from"./RadioGroup"
import { Link, useSearchParams } from 'react-router-dom';
import backbutton from"./backButton.png"

const Selectoptionpage4 = (props) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const optionValue = event.target.value;
    if (selectedOptions.includes(optionValue)) {
      // 이미 선택된 옵션이면 제거
      setSelectedOptions(selectedOptions.filter((option) => option !== optionValue));
    } else {
      // 선택되지 않은 옵션이면 추가
      setSelectedOptions([...selectedOptions, optionValue]);
    }
  };

  return (
    <div className={styles['container']}>
      <div className={styles['selectoptionpage4']}>
      <Link to={"/Option2"}>
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
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83500b0e-6528-4d22-adda-d9e7de434eab/f357ab6e-4744-42b6-9377-98e2a7e8b787?org_if_sml=1219"
              alt="Rectangle1I265"
              className={styles['rectangle1']}
            />
          </div>
          <div className={styles['frame74']}>
            <span>
              <span><h2>선호 시간대를 선택하시오</h2></span>
            </span>
          </div>
          
        </div>
        <Link to={"/mypage"}>
        <button>
        <img
          src={backbutton}
          alt="backButton2655"
          className={styles['back-button']}
        />
        </button>
        </Link>
        <div className={styles['frame82']}>
          <div className={styles['list-item']}>
            <div className={styles['content']}>
              <span>
                <span>
                <label>
        <input
          type="checkbox"
          value="am"
          checked={selectedOptions.includes('am')}
          onChange={handleOptionChange}
        />
        오전
      </label>
                  </span>
              </span>
            </div>
          </div>
          <div className={styles['list-item1']}>
            <div className={styles['content']}>
              <span>
                <span>
                <label>
        <input
          type="checkbox"
          value="pm"
          checked={selectedOptions.includes('pm')}
          onChange={handleOptionChange}
        />
        오후
      </label>
                  </span>
              </span>
            </div>
          </div>
          
        </div>
       
      </div>
    </div>
  )
}

export default Selectoptionpage4
