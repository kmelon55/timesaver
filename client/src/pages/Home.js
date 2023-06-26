import React, { useEffect, useState } from 'react'
import logo from './logoimage.png';
import { Link } from 'react-router-dom';
import styles from './loginpage.module.css';
import Table from './Table';
import Recommend from './Recommend';

function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      setIsLoggedIn(true);
      localStorage.setItem('loggedInUser', username);
    } else {
      // 로그인 실패 시 처리
      console.log('로그인 실패');
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    // 로그아웃 처리
    // ...

    // 로그아웃 시 상태 업데이트 및 로컬 스토리지에서 삭제
    setIsLoggedIn(false);
    localStorage.removeItem('loggedInUser');
  };


  return (
    <div>
    {isLoggedIn? <Recommend />: 
    (<div className={styles['container']}>
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
          <span className='signup'><Link to={"/register"}>sign up</Link></span>
        </form>
        <span className={styles['text']}>
          <span>ID :</span>
        </span>
        <span className={styles['text2']}>
          <span>PW :</span>
        </span>
      </div>
    </div>)}
    </div>
  );
  
}

export default Login