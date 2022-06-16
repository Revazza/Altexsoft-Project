import React, { useEffect, useState } from "react";
import Register from "../components/authentication/register/Register";
import Login from "../components/authentication/login/Login";
import useHttp from "../hooks/useHttp";
import { Route, Switch } from "react-router-dom";

function Authentication() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isUser, setIsUser] = useState(null);
  const { sendRequest } = useHttp();
  useEffect(() => {}, []);

  const handleNewUser = (newUser) => {
    console.log(newUser);
    delete newUser.image;
    sendRequest("https://localhost:7043/api/User", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newUser }),
    });

  };
  const handleLogin = (user) => {
    console.log(user);
  };

  return (
    <div className="Auth_wrapper">
      <Route path="/auth/register">
        <Register onSubmit={handleNewUser} isRegistered={isRegistered} />
      </Route>
      <Route path="/auth/login">
        <Login onSubmit={handleLogin} isUser={isUser} />
      </Route>
    </div>
  );
}

export default Authentication;
