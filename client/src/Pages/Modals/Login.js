import React, { useState } from "react";
import "../../css/Login.css";
// import logo from "../../images/logo.png";
import Signup from "./Signup";
import axios from "axios";
import { Redirect } from "react-router";
// TODO :밖에 클릭하면 로그인창 사라지도록 하기
const LoginModal = ({ loginBtnOn, setLoginBtnOn, setIsLogin }) => {
  const [signupBtnOn, setSignupBtnOn] = useState(false);
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [loginErr, setLoginErr] = useState(false);
  const inputChange = (e) => {
    if (e.target.name === "email") {
      setUserInput({
        ...userInput,
        email: e.target.value,
      });
    } else if (e.target.name === "password") {
      setUserInput({
        ...userInput,
        password: e.target.value,
      });
    }
  };
  const loginHandler = async (e) => {
    if (userInput.email.trim() === "" || userInput.password.trim() === "") {
      setLoginErr(true);
    } else {
      setLoginErr(false);
      try {
        const data = await axios({
          method: "POST",
          url: "http://localhost:4000/user/signin",
          data: userInput,
        });
        console.log(data);
        setLoginErr(false);
        setLoginBtnOn(false);
        setIsLogin(true);
      } catch (err) {
        setLoginErr(true);
      }
    }
  };

  if (loginBtnOn) {
    return (
      <div className="login-container">
        <div className="login-box">
          <div
            className="close-btn button"
            onClick={(e) => setLoginBtnOn(false)}
          >
            X
          </div>
          {signupBtnOn ? (
            <Signup
              setSignupBtnOn={setSignupBtnOn}
              setLoginBtnOn={setLoginBtnOn}
            />
          ) : (
            <div className="login-left-box">
              <div className="login-title modal-title">
                <img src="image/login/title.png" alt="title"></img>
              </div>
              <div className="login-input">
                <div>계정 로그인</div>
                <div className="login-input-box">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="이메일"
                    onChange={inputChange}
                  ></input>
                  <label>이메일</label>
                </div>
                <div className="login-input-box">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    onChange={inputChange}
                  ></input>
                  <label>비밀번호</label>
                </div>
                {loginErr ? (
                  <div className="login-errMsg">
                    <div>아이디 또는 비밀번호가 잘못 입력 되었습니다. </div>
                    <div>아이디와 비밀번호를 정확히 입력해 주세요.</div>
                  </div>
                ) : null}
                <div className="login-button-box">
                  <div className="login-btn button" onClick={loginHandler}>
                    로그인
                  </div>
                  <div>
                    <div className="login-forgot-password">
                      <span className="button">암호를 잊어버리셨나요?</span>
                    </div>
                    <div className="login-signup">
                      <span>처음 오셨나요?</span>
                      <span
                        className="button"
                        onClick={(e) => setSignupBtnOn(true)}
                      >
                        가입하기
                      </span>
                    </div>
                  </div>
                </div>
                <div className="login-oauth">
                  <div className="oauth-box">
                    <div>
                      <img
                        id="google-logo"
                        src="image/login/google.png"
                        alt="google"
                      ></img>
                    </div>
                    <div className="oauth-name button">구글 로그인</div>
                  </div>
                  <div className="oauth-box">
                    <div>
                      <img
                        id="naver-logo"
                        src="image/login/naver.png"
                        alt="naver"
                      ></img>
                    </div>
                    <div className="oauth-name button">네이버 로그인</div>
                  </div>
                  <div className="oauth-box">
                    <div>
                      <img
                        id="kakao-logo"
                        src="image/login/kakao.png"
                        alt="kakao"
                      ></img>
                    </div>
                    <div className="oauth-name button">카카오 로그인</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="login-right-box">
            <img src="image/login/loginModal.png" alt="loginModal-img"></img>
          </div>
        </div>
      </div>
    );
  }
  return <Redirect to={{ pathname: "/" }} />;
};

export default LoginModal;
