import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components/Common";
import { Main, Mypage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
