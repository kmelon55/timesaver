import React, { useState } from 'react'
import logo from './logoimage.jpg';
import { Link } from 'react-router-dom';
import './sign-uppage.css'

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [subject, setSubject] = useState('');
    const [number, setNumber] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);

    const handleSignup = async (e) => {
      e.preventDefault();

      const response = await fetch('/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password})
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
        window.location.href = '/Login';
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
            <span className="sign-uppage-text01 HeadingH3">
              <span>Sign up</span>
            </span>
            <span className="sign-uppage-text03 BodyBodyS">
              <span>
                Create an account to get started
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
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
            <div className="sign-uppage-text-field1">
              <span className="sign-uppage-text10 HeadingH5">
                <span>Email Address</span>
              </span>
              <input type="text" className="sign-uppage-field1" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="sign-uppage-text-field2">
              <span className="sign-uppage-text15 HeadingH5">
                <span>Password</span>
              </span>
              <input type="text" className="sign-uppage-field2" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="sign-uppage-text-field4">
              <span className="sign-uppage-text23 HeadingH5">
                <span>학과</span>
              </span>
              <input type="text" className="sign-uppage-field3" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className="sign-uppage-text-field5">
              <span className="sign-uppage-text28 HeadingH5">
                <span>학번</span>
              </span>
              <input type="text" className="sign-uppage-field4" value={number} onChange={(e) => setNumber(e.target.value)} />
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
        
        <img
          alt="logoimage2475"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dd80873b-c2d7-4a34-89a9-e77252cf01b5/fe3ed9da-a7d7-4e30-b8b7-58fd4db02a0a?org_if_sml=13964"
          className="sign-uppage-logoimage"
        />
        <img
          alt="backButton2414"
          src="/backbutton2414-mjte.svg"
          className="sign-uppage-back-button"
        />
      </div>
    </div>
  )
}

export default Register