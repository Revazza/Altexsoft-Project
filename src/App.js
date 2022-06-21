import "./App.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  MyBookings,
} from "./AppImports";
import { notificationActions } from "./store/store";
import TokenExpired from "./components/sessionExpired/TokenExpired";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const showNotification = useSelector(
    (state) => state.notification.showNotification
  );
  const sessionExpired = useSelector((state) => state.notification.sessionExpired)
  const location = useLocation();
  useEffect(() => {
    if (getCookie("token")) {
      //Request should be added with token
      dispatch(authSliceActions.login({token:getCookie('token')}));
      dispatch(authSliceActions.setToken(getCookie("token")));
      history.push("/");
    } else {
      history.push("/auth/login");
    }
  }, []);

  useEffect(() => {
    let userDate = new Date(getCookie("tokenExp"));
    let currentTime = new Date();
    if (currentTime.getTime() > userDate.getTime())
      dispatch(notificationActions.showSessionExpired());
  }, [location]);

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
          <Route path="/my-bookings">
            <MyBookings />
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
      {sessionExpired && <TokenExpired/>}
    </div>
  );
}

export default App;
