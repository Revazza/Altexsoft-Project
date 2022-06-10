import React, { useEffect, useState } from "react";
import Register from "../components/authentication/register/Register";
import Login from "../components/authentication/login/Login";
import useHttp from "../hooks/useHttp";

function Authentication() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isUser, setIsUser] = useState(null);
  const [currentSection, setCurrentSection] = useState("login");
  const {sendRequest} = useHttp();
  useEffect(() => {}, []);

  const handleNewUser = (newUser) => {
    console.log(newUser);
  };
  const handleLogin = (user) => {
    console.log(user);
    sendRequest('url',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({...user}),
    });
  };
  const handleSectionChange = (newSection) => {
    setCurrentSection(newSection);
  };

  return (
    <div className="Auth_wrapper">
      {currentSection === "register" && (
        <Register
          onSubmit={handleNewUser}
          isRegistered={isRegistered}
          onSectionChange={handleSectionChange}
        />
      )}
      {currentSection === "login" && (
        <Login
          onSubmit={handleLogin}
          isUser={isUser}
          onSectionChange={handleSectionChange}
        />
      )}
    </div>
  );
}

export default Authentication;
