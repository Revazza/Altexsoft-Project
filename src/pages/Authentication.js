import React, { useEffect, useState } from "react";
import Register from "../components/authentication/register/Register";
import Login from "../components/authentication/login/Login";
import useHttp from "../hooks/useHttp";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../store/authSlice";

function Authentication() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isUser, setIsUser] = useState(null);
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();
  const history = useHistory();
  const handleNewUser = async (newUser) => {
    delete newUser.image;
    const response = await sendRequest("https://localhost:7043/api/User/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newUser }),
    });
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
    console.log(response);
    if(response.errorMsg === undefined)
      dispatch(authSliceActions.login(response.data))
    history.push('/');
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
