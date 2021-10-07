import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
 

  return (
    <div className="app">
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <Main />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
