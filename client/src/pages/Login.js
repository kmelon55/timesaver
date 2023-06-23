import React, { useState } from 'react'
import logo from './logoimage.jpg';
import { Link } from 'react-router-dom';
import styles from './loginpage.module.css'

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      // 로그인 성공 시 처리
      console.log('로그인 성공');
    } else {
      // 로그인 실패 시 처리
      alert('로그인 실패');

    }
  };

  return (
    <div className={styles['container']}>
      <div className={styles['loginpage']}>
        <Link to={"/"}>
          <img src={logo} className={styles['logoimage']} alt='React' />
        </Link>
        <form onSubmit={handleLogin}>
          <div className={styles['-denterspace']}>
            <input
              type="text"
              className={styles['rectangle8']}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles['passwordenterspace']}>
            <input
              type="text"
              className={styles['rectangle9']}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles['signinbutton']}>
            로그인
          </button>
          <Link to={"/Register"}>
          <span className={styles['signuplink']}>회원가입</span>
          </Link>
        </form>
        <span className={styles['text']}>
          <span>ID :</span>
        </span>
        <span className={styles['text2']}>
          <span>PW :</span>
        </span>
      </div>
    </div>
  );
  
}

export default Login