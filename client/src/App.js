import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditPage from "./pages/EditPage";
import "./css/App.css";
import LoginModal from "./pages/modals/Login";
import Signup from "./pages/modals/Signup";

export default function App() {
  const [loginBtnOn, setLoginBtnOn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">
            <img id="sm-logo" src="images/Logo_sm.png" alt="withyouLogo" />
          </Link>
          <div id="nav-menu">
            {!isLogin ? (
              // 로그인이 아닐 경우
              <div id="nav-user">
                <span id="nav-login">
                  <Link to="/login" onClick={() => setLoginBtnOn(true)}>
                    Login
                  </Link>
                </span>
                <span id="nav-join">
                  <Link to="/join">Sign Up</Link>
                </span>
              </div>
            ) : (
              // 로그인 상태일 경우
              <div id="nav-user">
                <span id="nav-login">
                  <Link to="/logout">Logout</Link>
                </span>
                <span id="nav-join">
                  <Link to="/mypage">Mypage</Link>
                </span>
              </div>
            )}
          </div>
        </nav>

        <Switch>
          <Route path="/login">
            <LoginModal
              loginBtnOn={loginBtnOn}
              setLoginBtnOn={setLoginBtnOn}
              setIsLogin={setIsLogin}
            />
          </Route>
          <Route path="/join">
            <Signup />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/mypage">
            <Mypage />
          </Route>
          <Route path="/">
            <EditPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// 이 부분들의 코드 분리하기

function Logout() {
  return <h2>Logout</h2>;
}

function Mypage() {
  return <h2>Mypage</h2>;
}
