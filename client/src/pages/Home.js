import React from 'react'
import logo from './cn.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div class="head">
        <div>
        <Link to={"/"}>
          <img src={logo} className='App-logo' alt='React' />
        </Link>
        </div>
        <div>
        <Link to={"/Login"} style={{ textDecoration: "none" }}>
          <span className='loginspan'>로그인</span>
        </Link>
        <Link to={"/Mypage"}>
          <button className='mypage'>my page</button>
        </Link>
        </div>
      </div>
      <div className='menu'> 
        <Link to={"/Reco"}>
          <button className='reco nav'>강좌 추천</button>
        </Link>
        <Link to={"/Alarm"}>
          <button className='alarm nav'>여석 알림</button>
        </Link>
        <Link to={"/Table"}>
          <button className='table nav'>나의 시간표</button>
        </Link>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Home