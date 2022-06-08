import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import { authSliceActions } from "./store/authSlice";
import Authentication from "./pages/Authentication";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import Header from "./components/header/Header";

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
          <Route exact path="/auth">
            <Authentication />
          </Route>
          <Route path='/'>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/result'>
              <h1>I am result</h1>
            </Route>
            <Route path='/profile'>
              <h1>I am profile</h1>
            </Route>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
