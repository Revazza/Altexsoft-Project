import React, { useState } from "react";
import classes from "./ChangeProfile.module.css";

import ChangeInformation from "./changeInformation/ChangeInformation";

import { emailInput, usernameInput, passwordInput, useHttp,getCookie } from "../imports";
import jwt from 'jwt-decode';
function ChangeProfile(props) {
  const { sendRequest } = useHttp();

  const handleUpdateInfo = async (newInfo) => {
    console.log(newInfo);
    
    let key = Object.keys(newInfo)[0];
    let value = newInfo[key];
    if(key !== 'password')
      value = value.toLowerCase();
    console.log(value);
    const requestBody = {
      path:`/${key}`,
      op:'replace',
      value
    }
    console.log(requestBody);
    const response = await sendRequest(`https://localhost:7043/api/User/${jwt(getCookie('token'))}`,{method:'PATCH',body:JSON.stringify(requestBody)});
    console.log(response);

  };

  const smallWindow = window.innerWidth <= 920;
  const showSettings = smallWindow && props.showSettings;
  return (
    <div
      className={classes.wrapper}
      id={showSettings ? classes.showSettings : ""}
    >
      <div className={classes.form_wrapper}>
        <ChangeInformation
          title="Change Email"
          updateInfo={emailInput}
          onUpdateInfo={handleUpdateInfo}
        />
        <ChangeInformation
          title="Change Username"
          updateInfo={usernameInput}
          onUpdateInfo={handleUpdateInfo}
        />
        <ChangeInformation
          title="Change Password"
          updateInfo={passwordInput}
          onUpdateInfo={handleUpdateInfo}
        />
      </div>
    </div>
  );
}

export default ChangeProfile;
