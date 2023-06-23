import React from "react"
import { Link } from "react-router-dom"

function BottomMenu(){
    return(
        <div className='bottom_menu'>
            <div>
                <Link to={"/List"}>
                  강의조회
                </Link>
            </div>
            <div>
                <Link to={"/"}>
                  Home
                </Link>
            </div>
            <div>
                <Link to={"/Mypage"}>
                  Mypage
                </Link>
            </div>
        </div>
    )

}

export default BottomMenu