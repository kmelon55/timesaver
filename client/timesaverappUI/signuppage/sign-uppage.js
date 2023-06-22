import React from 'react'

import projectStyles from '.style.module.css'
import styles from './sign-uppage.module.css'

const SignUppage = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['sign-uppage']}>
        <div className={styles['loginoptions']}>
          <div className={styles['text']}>
            <span
              className={` ${styles['text01']} ${projectStyles['heading-h3']} `}
            >
              <span>Sign up</span>
            </span>
            <span
              className={` ${styles['text03']} ${projectStyles['body-body-s']} `}
            >
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
          <div className={styles['form']}>
            <div className={styles['text-field']}>
              <span
                className={` ${styles['text05']} ${projectStyles['heading-h5']} `}
              >
                <span>Name</span>
              </span>
              <div className={styles['field']}>
                <div className={styles['content']}>
                  <div className={styles['text07']}>
                    <span
                      className={` ${styles['text08']} ${projectStyles['body-body-m']} `}
                    >
                      <span>홍길</span>
                    </span>
                    <img
                      alt="CursorI245"
                      src="/cursori245-dvf.svg"
                      className={styles['cursor']}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['text-field1']}>
              <span
                className={` ${styles['text10']} ${projectStyles['heading-h5']} `}
              >
                <span>Email Address</span>
              </span>
              <div className={styles['field1']}>
                <div className={styles['content1']}>
                  <div className={styles['text12']}>
                    <span
                      className={` ${styles['text13']} ${projectStyles['body-body-m']} `}
                    >
                      <span>name@email.com</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['text-field2']}>
              <span
                className={` ${styles['text15']} ${projectStyles['heading-h5']} `}
              >
                <span>Password</span>
              </span>
              <div className={styles['field2']}>
                <div className={styles['content2']}>
                  <div className={styles['text17']}>
                    <span
                      className={` ${styles['text18']} ${projectStyles['body-body-m']} `}
                    >
                      <span>Create a passaword</span>
                    </span>
                  </div>
                </div>
                <div className={styles['icon']}>
                  <img
                    alt="FillI245"
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dd80873b-c2d7-4a34-89a9-e77252cf01b5/6850b661-6d17-42f3-968c-ca9616ec26b8?org_if_sml=1115"
                    className={styles['fill']}
                  />
                </div>
              </div>
            </div>
            <div className={styles['text-field3']}>
              <div className={styles['field3']}>
                <div className={styles['content3']}>
                  <div className={styles['text20']}>
                    <span
                      className={` ${styles['text21']} ${projectStyles['body-body-m']} `}
                    >
                      <span>Confirm password</span>
                    </span>
                  </div>
                </div>
                <div className={styles['icon1']}>
                  <img
                    alt="FillI245"
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dd80873b-c2d7-4a34-89a9-e77252cf01b5/3db11a4c-0da5-453a-b7f2-efaed40367ad?org_if_sml=1115"
                    className={styles['fill1']}
                  />
                </div>
              </div>
            </div>
            <div className={styles['text-field4']}>
              <span
                className={` ${styles['text23']} ${projectStyles['heading-h5']} `}
              >
                <span>학과</span>
              </span>
              <div className={styles['field4']}>
                <div className={styles['content4']}>
                  <div className={styles['text25']}>
                    <span
                      className={` ${styles['text26']} ${projectStyles['body-body-m']} `}
                    >
                      <span>ex. 컴퓨터정보통신공학과</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['text-field5']}>
              <span
                className={` ${styles['text28']} ${projectStyles['heading-h5']} `}
              >
                <span>학번</span>
              </span>
              <div className={styles['field5']}>
                <div className={styles['content5']}>
                  <div className={styles['text30']}>
                    <span
                      className={` ${styles['text31']} ${projectStyles['body-body-m']} `}
                    >
                      <span>ex. 191234</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['frame93']}>
            <div className={styles['checkbox']}></div>
            <span
              className={` ${styles['text33']} ${projectStyles['body-body-s']} `}
            >
              <span>제 3자가 개인정보 수집 및 활용하는 것에 동의합니다</span>
            </span>
          </div>
        </div>
        <img
          alt="logoimage2475"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dd80873b-c2d7-4a34-89a9-e77252cf01b5/fe3ed9da-a7d7-4e30-b8b7-58fd4db02a0a?org_if_sml=13964"
          className={styles['logoimage']}
        />
        <img
          alt="backButton2414"
          src="/backbutton2414-mjte.svg"
          className={styles['back-button']}
        />
      </div>
    </div>
  )
}

export default SignUppage

