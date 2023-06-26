import React,{useState} from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import styles from './selectoptionpage6.module.css'
import backbutton from"./backButton.png"

const Selectoptionpage6 = (props) => {
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
      <div className={styles['selectoptionpage6']}>
      <Link to = "/Option4">
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
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dd80873b-c2d7-4a34-89a9-e77252cf01b5/6bbbd245-3935-452e-aacb-6681728cf7ee?org_if_sml=1218"
              alt="Rectangle1I269"
              className={styles['rectangle1']}
            />
          </div>
          <div className={styles['frame74']}>
            <span>
              <span><h2>선호 교양과목을 선택해주세요</h2></span>
            </span>
          </div>
        </div>
        <Link to={"/Option2"}>
        <button>
        <img
          src={backbutton}
          alt="backButton2693"
          className={styles['back-button']}
        />
        </button>
        </Link>
        <div className={styles['frame82']}>
          <div className={styles['list-item']}>
            <div className={styles['content']}>
              <span
                >
                <span><label>
        <input
          type="checkbox"
          value="noneFace"
          checked={selectedOptions.includes('noneFace')}
          onChange={handleOptionChange}
        />
        비대면
      </label></span>
              </span>
            </div>
          </div>
          <div className={styles['list-item1']}>
            <div className={styles['content1']}>
              <span>
                <span><label>
        <input
          type="checkbox"
          value="face"
          checked={selectedOptions.includes('face')}
          onChange={handleOptionChange}
        />
      </label>대면</span>
              </span>
            </div>
          </div>
          <div className={styles['list-item2']}>
            <div className={styles['content2']}>
              <span>
                <span><label>
        <input
          type="checkbox"
          value="humanities"
          checked={selectedOptions.includes('humanities')}
          onChange={handleOptionChange}
        />
        
      </label>인문</span>
              </span>
            </div>
            
          </div>
          <div className={styles['list-item3']}>
            <div className={styles['content3']}>
              <span
                
              >
                <span><label>
        <input
          type="checkbox"
          value="nature"
          checked={selectedOptions.includes('nature')}
          onChange={handleOptionChange}
        />
      </label>자연</span>
              </span>
            </div>
            
          </div>
          <div className={styles['list-item4']}>
            <div className={styles['content4']}>
              <span>
                <span><label>
        <input
          type="checkbox"
          value="PE"
          checked={selectedOptions.includes('PE')}
          onChange={handleOptionChange}
        />
      </label>체육</span>
              </span>
            </div>
            
          </div>
          <div className={styles['list-item5']}>
            <div className={styles['content5']}>
              <span>
                <span><label>
        <input
          type="checkbox"
          value="Art"
          checked={selectedOptions.includes('Art')}
          onChange={handleOptionChange}
        />
      </label>미술</span>
              </span>
            </div>
            
          </div>
          <div className={styles['list-item6']}>
            <div className={styles['content6']}>
              <span>
                <span><label>
        <input
          type="checkbox"
          value="music"
          checked={selectedOptions.includes('music')}
          onChange={handleOptionChange}
        />
      </label>음악</span>
              </span>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Selectoptionpage6
