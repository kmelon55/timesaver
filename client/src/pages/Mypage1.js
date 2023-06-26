import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import styles from './mypage.module.css'
import Login, {loginedInUser} from './Home';
import logo from './logoimage.png';
import homebutton from './homebutton.svg'
import mypage from './mypage.svg'
import optionselectbutton from './optionselectbutton.svg'

// function Mypage() {
//   return (
//     <div>
//       <div class="head">
//         <Link to={"/"}>
//           <img src={logo} className='App-logo' alt='React' />
//         </Link>
//         <Link to={"/Mypage"}>
//           <button className='mypage'>my page</button>
//         </Link>
//       </div>
//     </div>
//   )
// }

const MyPage = () => {

  // const [userInfo, setUserInfo] = useState({loginedInUser});
  const [userInfo, setUserInfo]=useState({
    username: "홍길동",
    password: " ",
    grage: "1",
    major: "컴퓨터",
    student_id:'123456',
    semester:2
  })

  const [textMajor, setTextMajor] = useState("");
  const [textPwd, setTextPwd] = useState("");

  const majorChange = () => {
    setUserInfo(prevUserInfo => ({
      ...prevUserInfo,
      major: textMajor,
    }));
  };


  //비밀번호에 맞게 수정하기
  const pwdChange = () => {
    setUserInfo(prevUserInfo => ({
      ...prevUserInfo,
      pwd: textPwd,
    }));
  };

  return (
    <div className={styles['container']}>
      <div className={styles['mypage']}>
        <div className={styles['myinfoframe']}>
          <span className={styles['text']}>
          <span>{userInfo.username}</span>
          </span>
          <div style={{top: "13px", left: "100px", position: 'absolute'}}>
          {userInfo.email}
          </div>
        
          <span className={styles['text02']}>
            <span>{userInfo.student_id}</span>
          </span>
          <span className={styles['text04']}>
            <span>{userInfo.major}</span>
          </span>
          <img
            src={logo}
            alt="logoimage2413"
            className={styles['logopage']}
          />
        </div>
       
        <span className={styles['text12']}>
          <span>내 정보</span>
        </span>
        <div className={styles['accountframe']}>
          <span className={styles['text14']}>
            <span>
              계정
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className={styles['frame']}>
            <span className={styles['text16']}>
              <span>
               
              <input type="text" value= {textMajor} onChange={(e)=> setTextMajor(e.target.value)}  />
              <button onClick={majorChange}>전공 변경</button>    
              
              </span>
            </span>
          </div>
          
          <div className={styles['frame1']}>
            <span className={styles['text18']}>
              <span><button>비밀번호변경</button>
	              </span>
            </span>
          </div>
          
        </div>
        <div className={styles['etcframe']}>
          <span className={styles['text22']}>
            <span>기타</span>
          </span>
          <div className={styles['frame3']}>
            <span className={styles['text24']}>
              <span><button>
                회원 탈퇴</button></span>
            </span>
          </div>
          <div className={styles['frame4']}>
            <span className={styles['text26']}>
              <span><button>
              로그아웃
              </button>
                </span>
            </span>
          </div>
        </div>
        <div className={styles['bottombar']}>
          <Link to={"/Option1"}>
          <button className={styles['selectoptionbutton']}>
            <img
              src={optionselectbutton}
              alt="optionselectbuttonI397"
              className={styles['optionselectbutton']}
            />
            <span className={styles['text28']}>
              <span>강의 옵션 선택</span>
            </span>
          </button>
          </Link>
          <Link to={"/"}>
            <button className={styles['homebutton']}>
            <span className={styles['text30']}>
              <span>Home</span>
            </span>
            <img
              src={homebutton}
              alt="HomeButtonI397"
              className={styles['home-button1']}
            />
          </button>
          </Link>
          <button className={styles['mypagebutton']}>
            <span className={styles['text32']}>
              <span>my page</span>
            </span>
            <img
              src={mypage}
              alt="UserpagebuttonI397"
              className={styles['userpagebutton']}
            />
          </button>
        </div>
      </div>
      

    </div>
  );
};

export default MyPage