import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Signup from "./pages/Signup";
import ChangeUserInfo from "./pages/ChangeUserInfo";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="app">
      <BrowserRouter>
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
        <Switch>
          <Route exact={true} path="/">
            <Main />
          </Route>
          <Route exact={true} path="/mypage">
            <Mypage />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/mypage/informationchange">
            <ChangeUserInfo />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
