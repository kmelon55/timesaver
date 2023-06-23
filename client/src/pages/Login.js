import React from 'react'
import logo from './cn.png';
import { Link } from 'react-router-dom';

function Login() {
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
      <div className='logininput'>
        <h1>TIME SAVER</h1>
        <h3>login</h3>
      </div>
    </div>
  )
}

export default Login