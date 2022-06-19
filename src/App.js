import "./App.css";
import { useEffect } from "react";

import {
  Home,
  Header,
  Profile,
  Guests,
  Notification,
  getCookie,
  Switch,
  Route,
  useHistory,
  Redirect,
  useSelector,
  useDispatch,
  authSliceActions,
  Authentication,
} from "./AppImports";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const showNotification = useSelector(
    (state) => state.notification.showNotification
  );

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
          <Route path="/my-guests">
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
      {showNotification && <Notification />}
    </div>
  );
}

export default App;
