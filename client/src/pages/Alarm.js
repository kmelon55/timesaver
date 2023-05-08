import React from 'react'
import logo from './cn.png';
import { Link } from 'react-router-dom';

function Alarm() {
  return (
    <div>
      <div class="head">
        <Link to={"/"}>
          <img src={logo} className='App-logo' alt='React' />
        </Link>
        <Link to={"/Mypage"}>
          <button className='mypage'>my page</button>
        </Link>
      </div>
    </div>
  )
}

export default Alarm