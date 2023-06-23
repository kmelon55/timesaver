import React from 'react'
import logo from './cn.png';
import { Link } from 'react-router-dom';

function Table() {
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
    <div className='mytime'>
      <h2>시간표</h2>
      <table className='time_table'>
        <tr>
            <th>시간</th>
            <th>월요일</th>
            <th>화요일</th>
            <th>수요일</th>
            <th>목요일</th>
            <th>금요일</th>
        </tr>
        <tr>
            <td>9</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>10</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>11</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>12</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>13</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>14</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>15</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>16</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>17</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
      </table>
    </div>
    </div>
  )
}

export default Table