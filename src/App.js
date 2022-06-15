import "./App.css";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import { authSliceActions } from "./store/authSlice";
import Authentication from "./pages/Authentication";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Profile from "./pages/Profile";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = localStorage.getItem("token");

  if (token === null) {
    // history.replace('/auth')
  } else {
    // dispatch(authSliceActions.login(token));
    // history.replace('/home')
  }

  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Switch>
          <Route path="/auth">
            <Authentication />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/result">
            <h1>I am result</h1>
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="*">
            <Redirect to='/' />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
