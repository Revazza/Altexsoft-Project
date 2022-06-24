import React, { useState } from "react";
import classes from "./ChangeProfile.module.css";

import ChangeInformation from "./changeInformation/ChangeInformation";

import { emailInput, usernameInput, passwordInput, useHttp } from "../imports";

function ChangeProfile(props) {
  const { sendRequest } = useHttp();

  const handleUpdateInfo = (newInfo) => {
    console.log(newInfo);
    
    let key = Object.keys(newInfo)[0];
    let value = newInfo[key];
    if(key !== 'password')
      value = value.toLowerCase();
    console.log(value);
    sendRequest('https://localhost:7043/api/User/+id',{method:'PATCH',body:JSON.stringify({
      path:`/${key}`,
      op:'replace',
      value,
    })})

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
