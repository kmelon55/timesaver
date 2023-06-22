import React from 'react'

import './sign-uppage.css'

const SignUppage = (props) => {
  return (
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
          <div className="sign-uppage-form">
            <div className="sign-uppage-text-field">
              <span className="sign-uppage-text05 HeadingH5">
                <span>Name</span>
              </span>
              <div className="sign-uppage-field">
                <div className="sign-uppage-content">
                  <div className="sign-uppage-text07">
                    <span className="sign-uppage-text08 BodyBodyM">
                      <span>홍길</span>
                    </span>
                    <img
                      alt="CursorI245"
                      src="/cursori245-dvf.svg"
                      className="sign-uppage-cursor"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sign-uppage-text-field1">
              <span className="sign-uppage-text10 HeadingH5">
                <span>Email Address</span>
              </span>
              <div className="sign-uppage-field1">
                <div className="sign-uppage-content1">
                  <div className="sign-uppage-text12">
                    <span className="sign-uppage-text13 BodyBodyM">
                      <span>name@email.com</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sign-uppage-text-field2">
              <span className="sign-uppage-text15 HeadingH5">
                <span>Password</span>
              </span>
              <div className="sign-uppage-field2">
                <div className="sign-uppage-content2">
                  <div className="sign-uppage-text17">
                    <span className="sign-uppage-text18 BodyBodyM">
                      <span>Create a passaword</span>
                    </span>
                  </div>
                </div>
                <div className="sign-uppage-icon">
                  <img
                    alt="FillI245"
                    src="/filli245-i6io-200h.png"
                    className="sign-uppage-fill"
                  />
                </div>
              </div>
            </div>
            <div className="sign-uppage-text-field3">
              <div className="sign-uppage-field3">
                <div className="sign-uppage-content3">
                  <div className="sign-uppage-text20">
                    <span className="sign-uppage-text21 BodyBodyM">
                      <span>Confirm password</span>
                    </span>
                  </div>
                </div>
                <div className="sign-uppage-icon1">
                  <img
                    alt="FillI245"
                    src="/filli245-rd9r-200h.png"
                    className="sign-uppage-fill1"
                  />
                </div>
              </div>
            </div>
            <div className="sign-uppage-text-field4">
              <span className="sign-uppage-text23 HeadingH5">
                <span>학과</span>
              </span>
              <div className="sign-uppage-field4">
                <div className="sign-uppage-content4">
                  <div className="sign-uppage-text25">
                    <span className="sign-uppage-text26 BodyBodyM">
                      <span>ex. 컴퓨터정보통신공학과</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sign-uppage-text-field5">
              <span className="sign-uppage-text28 HeadingH5">
                <span>학번</span>
              </span>
              <div className="sign-uppage-field5">
                <div className="sign-uppage-content5">
                  <div className="sign-uppage-text30">
                    <span className="sign-uppage-text31 BodyBodyM">
                      <span>ex. 191234</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sign-uppage-frame93">
            <div className="sign-uppage-checkbox"></div>
            <span className="sign-uppage-text33 BodyBodyS">
              <span>제 3자가 개인정보 수집 및 활용하는 것에 동의합니다</span>
            </span>
          </div>
        </div>
        <img
          alt="logoimage2475"
          src="/logoimage2475-3gv9-200w.png"
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

export default SignUppage

