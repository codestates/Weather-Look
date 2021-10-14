import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from "./pages/Signin";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Signup from "./pages/Signup";
import ChangeCheckPwd from "./pages/ChangeCheckPwd";
import ChangeUserInfo from "./pages/ChangeUserInfo";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: black;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

function App() {
  //const state = useSelector((state) => state.userReducer);

  //console.log("app user", state);

  //사용자 인증 확인 함수

  /*useEffect(() => {
    isAuthenticated();
  }, []);*/
  // console.log("env--", process.env.REACT_APP_END_POINT);
  return (
    <div>
      <Container resizeMode="stretch" className="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact={true} path="/">
              <Main />
            </Route>
            <Route exact={true} path="/signin">
              <Signin />
            </Route>
            <Route exact={true} path="/mypage">
              <Mypage />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/mypage/passwordCheck">
              <ChangeCheckPwd />
            </Route>
            <Route path="/mypage/informationChange">
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
