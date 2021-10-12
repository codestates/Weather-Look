import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Signup from "./pages/Signup";
import ChangeUserInfo from "./pages/ChangeUserInfo";
import styled from "styled-components";
import main from "../src/weatherBackground/main.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${main});
  background-color: ivory;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <div>
      <Container resizeMode="stretch" className="app">
        <BrowserRouter>
          <Header />
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
        </BrowserRouter>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
