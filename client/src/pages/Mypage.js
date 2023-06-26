import React, { useEffect, useState } from 'react';
import dd from './backButton.png';
import { Link } from 'react-router-dom';
import logo from './logoimage.png';
import BottomMenu from './BottomMenu';

function List(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
      getUsers();
    }, []);
  
    const getUsers = async() => {
      await fetch('/user')
        .then(response => response.json())
        .then(data => {
          const { users } = data;
          setUsers(users);
        })
        .catch(error => {
          console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
        });
    };


    console.log(users[6]);

    const [username, setUsername] = useState('');
    const [grade, setGrade] = useState('');
    const [preferences, setPreferences] = useState('');
    const [major, setMajor] = useState('');
    const [interests, setInterests] = useState('');
    const [semester, setSemester] = useState('');
    const [requirements, setRequirements] = useState('');

    const handleSignup = async (e) => {
      e.preventDefault();

      const response = await fetch('/user/7/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, preferences, grade, major, interests, semester, requirements})
      });

      if (response.ok) {
        // 회원가입 성공 시 처리
        console.log('변경 성공');

      } else {
        // 회원가입 실패 시 처리
        console.log('변경 실패');
      }


    };

    const handleLogout = () => {
      // 로그아웃 처리
      // ...
  
      // 로그아웃 시 상태 업데이트 및 로컬 스토리지에서 삭제
      localStorage.removeItem('loggedInUser');
      window.location.href = '/';
    };
    

    // for (let i = 0; i < users.length; i++) {
    //   if()
    // }
  

  return (
    <div className="sign-uppage-container">
      <div className="sign-uppage-sign-uppage">
        <div className="sign-uppage-loginoptions">
          <div className="sign-uppage-text">
              <h2>내 정보</h2>
          </div>
          <form onSubmit={handleSignup}>
          <div className="sign-uppage-form">
            <div className="sign-uppage-text-field">
              <span className="sign-uppage-text05 HeadingH5">
                <span>Name</span>
              </span>
              <input type="text" className="sign-uppage-field" placeholder='송동혁' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="sign-uppage-text-field2">
              <span className="sign-uppage-text15 HeadingH5">
                <span>선호도</span>
              </span>
              <input type="text" placeholder="금공강" className="sign-uppage-field2" value={preferences} onChange={(e) => setPreferences(e.target.value)} />
            </div>
            <div className="sign-uppage-text-field1">
              <span className="sign-uppage-text10 HeadingH5">
                <span>학년</span>
              </span>
              <input type="text" placeholder='3' className="sign-uppage-field1" value={grade} onChange={(e) => setGrade(e.target.value)} />
            </div>
            <div className="sign-uppage-text-field1">
              <span className="sign-uppage-text10 HeadingH5">
                <span>학기</span>
              </span>
              <input type="text" placeholder='1' className="sign-uppage-field1" value={semester} onChange={(e) => setSemester(e.target.value)} />
            </div>
            <div className="sign-uppage-text-field4">
              <span className="sign-uppage-text23 HeadingH5">
                <span>전공</span>
              </span>
              <input type="text" placeholder='컴퓨터공학과' className="sign-uppage-field3" value={major} onChange={(e) => setMajor(e.target.value)} />
            </div>
            <div className="sign-uppage-text-field5">
              <span className="sign-uppage-text28 HeadingH5">
                <span>흥미</span>
              </span>
              <input type="text" placeholder='체육' className="sign-uppage-field4" value={interests} onChange={(e) => setInterests(e.target.value)} />
            </div>
          </div>
          <Link to={"/Option1"}>
          <button type="submit" className='register-button'>변경</button>
          </Link>
          <button onClick={handleLogout} className='logoutbtn'>로그아웃</button>
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
        <BottomMenu />
      </div>
    </div>
  );
};

export default List;