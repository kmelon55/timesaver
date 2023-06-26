import React from "react"
import { Link } from "react-router-dom"

function BottomMenu(){
    return(
        <div className='bottom_menu'>
            <div>
                <Link to={"/Table"}>
                  강의추천
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