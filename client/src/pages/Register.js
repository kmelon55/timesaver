import React, { useState } from 'react'
import logo from './logoimage.png';
import dd from './backButton.png';
import { Link } from 'react-router-dom';
import './sign-uppage.css'

function Register() {
    const [username, setUsername] = useState('');
    const [grade, setGrade] = useState('');
    const [password, setPassword] = useState('');
    const [major, setMajor] = useState('');
    const [student_id, setId] = useState('');
    const [semester, setSemester] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);

    const handleSignup = async (e) => {
      e.preventDefault();

      const response = await fetch('/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, grade, major, student_id, semester})
      });

      if (response.ok) {
        // 회원가입 성공 시 처리
        console.log('회원가입 성공');
        setSignupSuccess(true);
      } else {
        // 회원가입 실패 시 처리
        console.log('회원가입 실패');
      }
    };

    if (signupSuccess) {
        // 회원가입이 성공하면 팝업창을 띄우고 로그인 페이지로 리다이렉트
        alert('회원가입이 완료되었습니다');
        window.location.href = '/';
      }

  return (
    // <div>
    //   <div class="head">
    //     <Link to={"/"}>
    //       <img src={logo} className='App-logo' alt='React' />
    //     </Link>
    //     <Link to={"/Mypage"}>
    //       <button className='mypage'>my page</button>
    //     </Link>
    //   </div>
    //   <div className='outer'>
    //   <div className='registerInput'>
    //     <h1>TIME SAVER</h1>
    //     <h3>회원가입</h3>
    //     <form onSubmit={handleSignup}>
    //         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    //         <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
    //         <button type="submit">회원가입</button>
    //     </form>
    //   </div>
    //   </div>
    // </div>
    <div className="sign-uppage-container">
      <div className="sign-uppage-sign-uppage">
        <div className="sign-uppage-loginoptions">
          <div className="sign-uppage-text">
              <h2>Sign up</h2>
            <span className="sign-uppage-text03 BodyBodyS">
              <span>
                Create an account to get started
                </span>
              </span>
          </div>
          <form onSubmit={handleSignup}>
          <div className="sign-uppage-form">
            <div className="sign-uppage-text-field">
              <span className="sign-uppage-text05 HeadingH5">
                <span>Name</span>
              </span>
              <input type="text" className="sign-uppage-field" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="sign-uppage-text-field2">
              <span className="sign-uppage-text15 HeadingH5">
                <span>Password</span>
              </span>
              <input type="text" className="sign-uppage-field2" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="sign-uppage-text-field1">
              <span className="sign-uppage-text10 HeadingH5">
                <span>학년</span>
              </span>
              <input type="text" className="sign-uppage-field1" value={grade} onChange={(e) => setGrade(e.target.value)} />
            </div>
            <div className="sign-uppage-text-field1">
              <span className="sign-uppage-text10 HeadingH5">
                <span>학기</span>
              </span>
              <input type="text" className="sign-uppage-field1" value={semester} onChange={(e) => setSemester(e.target.value)} />
            </div>
            <div className="sign-uppage-text-field4">
              <span className="sign-uppage-text23 HeadingH5">
                <span>학과</span>
              </span>
              <input type="text" className="sign-uppage-field3" value={major} onChange={(e) => setMajor(e.target.value)} />
            </div>
            <div className="sign-uppage-text-field5">
              <span className="sign-uppage-text28 HeadingH5">
                <span>학번</span>
              </span>
              <input type="text" className="sign-uppage-field4" value={student_id} onChange={(e) => setId(e.target.value)} />
            </div>
          </div>
          <div className="sign-uppage-frame93">
            <input type='checkbox' className="sign-uppage-checkbox"></input>
            <span className="sign-uppage-text33 BodyBodyS">
              <span>제 3자가 개인정보 수집 및 활용하는 것에 동의합니다</span>
            </span>
          </div>
          <button type="submit" className='register-button'>회원가입</button>
          </form>
        </div>
        <img src={logo} className='sign-uppage-logoimage' alt='React' />
        <Link to={"/"}>
          <img
            alt='React'
            src={dd}
            className="sign-uppage-back-button"
          />
        </Link>
      </div>
    </div>
  )
}

export default Register