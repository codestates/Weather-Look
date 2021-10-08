<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 810b3f3be95212c090872f97b74ec2cfdec107e0
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Signup from "./pages/Signup";
import ChangeUserInfo from "./pages/ChangeUserInfo";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact={true} path="/">
            <Main />
          </Route>
<<<<<<< HEAD
          <Route path="/mypage">
=======
          <Route exact={true} path="/mypage">
>>>>>>> 810b3f3be95212c090872f97b74ec2cfdec107e0
            <Mypage />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
<<<<<<< HEAD
=======
          <Route path="/mypage/informationchange">
            <ChangeUserInfo />
          </Route>
>>>>>>> 810b3f3be95212c090872f97b74ec2cfdec107e0
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
