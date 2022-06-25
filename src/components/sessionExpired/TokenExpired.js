import React from "react";
import ReactDOM from "react-dom";
import classes from "./TokenExpired.module.css";
import { useDispatch } from "react-redux";
import {
  authSliceActions,
  notificationActions,
  Button,
  getCookie,
  useHistory
} from "../../AppImports";


function TokenExpired() {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById("backdrop-overlay")
      )}
      {ReactDOM.createPortal(
        <TokenExpiredOverlay />,
        document.getElementById("tokenExpired-overlay")
      )}
    </React.Fragment>
  );
}

const TokenExpiredOverlay = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(authSliceActions.logout());
    dispatch(notificationActions.hideSessionExpired());
    history.push('/auth/login');
  };
  const handleExtendSession = () => {
    const currentDate = new Date();
    const newSessionDate = currentDate.getTime()/1000 + 100;
    dispatch(authSliceActions.login({ token: getCookie("token"), exp: newSessionDate}));
    dispatch(notificationActions.hideSessionExpired());
  };

  return (
    <section className={classes.wrapper}>
      <h2>Session Expired</h2>
      <div className={classes.btn_wrapper}>
        <Button title="Extend Session" onClick={handleExtendSession} />
        <Button
          title="Sign Out"
          className={classes.logut_btn}
          onClick={handleSignOut}
        />
      </div>
    </section>
  );
};

const BackDrop = () => {
  return <div className={classes.backdrop}></div>;
};

export default TokenExpired;
