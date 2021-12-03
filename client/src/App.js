import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditPage from "./pages/EditPage";
import LandingPage from "./pages/LandingPage";
import Mypage from "./pages/Mypage";
import Nav from "./components/Nav";
import axios from "axios";
import "./App.css";
axios.default.withCredentials = true;
const server_url_1 = "http://localhost:4000";
const server_url_2 =
  "http://ec2-3-24-168-238.ap-southeast-2.compute.amazonaws.com:4000";

export default function App() {
  const [accessToken, setAccessToken] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [loginBtn, setLoginBtn] = useState(false);
  const [signupBtn, setSignupBtn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    mobile: "",
  });
  const [landingOn, setLandingOn] = useState(true);
  const getAccessToken = (authorizationCode, loginType) => {
    axios({
      method: "POST",
      url: `${server_url_2}/user/callback`,
      data: { authorizationCode: authorizationCode, type: loginType },
    }).then((resp) => {
      const { accessToken } = resp.data;
      setIsLogin(true);
      sessionStorage.setItem("isLoginSession", isLogin);
      sessionStorage.setItem("accessTokenSession", accessToken);
    });
  };
  useEffect(() => {
    const isLoginSession = sessionStorage.getItem("isLoginSession");
    const accessTokenSession = sessionStorage.getItem("accessTokenSession");
    if (isLoginSession) {
      setIsLogin(isLoginSession);
    }
    if (accessTokenSession) {
      setAccessToken(accessTokenSession);
    }
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    if (authorizationCode) {
      const loginType = sessionStorage.getItem("loginType");
      getAccessToken(authorizationCode, loginType);
      // window.location.assign("http://localhost:3000");
    }
  }, []);

  return (
    <Router>
      <Nav
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        loginBtn={loginBtn}
        setLoginBtn={setLoginBtn}
        signupBtn={signupBtn}
        setSignupBtn={setSignupBtn}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        accessToken={accessToken}
        setAccessToken={setAccessToken}
        landingOn={landingOn}
        setLandingOn={setLandingOn}
      />

      <Switch>
        <Route exact={true} path="/">
          {!loginBtn && (
            <LandingPage landingOn={landingOn} setLandingOn={setLandingOn} />
          )}
        </Route>
        <Route path="/editpage">{!loginBtn && <EditPage setLandingOn={setLandingOn} />}</Route>
        <Route path="/mypage">
          <Mypage accessToken={accessToken} />
        </Route>
      </Switch>
    </Router>
  );
}
