import "./App.css";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import { authSliceActions } from "./store/authSlice";
import Authentication from "./pages/Authentication";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import { getCookie } from "./helperFunctions/HelperFunctions";
import Guests from "./pages/Guests";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (getCookie("token")) {
      dispatch(authSliceActions.login(getCookie("token")));
      history.push("/");
    } else {
      history.push("/auth/login");
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Switch>
          <Route path="/auth">
            <Authentication />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path='/my-guests'>
            <Guests />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
