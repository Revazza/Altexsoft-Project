import React, { useState } from "react";
import { authSliceActions, notificationActions } from "../store/store";
import jwt from "jwt-decode";

import {
  Register,
  Login,
  useHttp,
  useDispatch,
  useHistory,
  Route,
} from "./imports";

function Authentication() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isUser, setIsUser] = useState(null);
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();
  const history = useHistory();
  const handleNewUser = async (newUser) => {
    delete newUser.image;
    const response = await sendRequest(
      "https://localhost:7043/api/User/Register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newUser }),
      }
    );
    console.log(response);
  };
  const handleLogin = async (user) => {
    const response = await sendRequest(
      "https://localhost:7043/api/User/Login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...user }),
      }
    );
    const token = jwt(response.data);
    console.log(token);
    if (response.errorMsg === undefined) {
      dispatch(
        notificationActions.showNotification({
          msg: "Logged In Successfuly",
          type: "success",
        })
      );
      dispatch(
        authSliceActions.login({ token: response.data, exp: token.exp})
      );
      history.push("/");
    }
  };

  return (
    <div className="Auth_wrapper">
      <Route path="/auth/register">
        <Register onSubmit={handleNewUser} />
      </Route>
      <Route path="/auth/login">
        <Login onSubmit={handleLogin} />
      </Route>
    </div>
  );
}

export default Authentication;
