import React, { useState } from "react";
import classes from "./ChangeProfile.module.css";

import ChangeInformation from "./changeInformation/ChangeInformation";

import {
  emailInput,
  usernameInput,
  passwordInput,
  useHttp,
  getCookie,
} from "../imports";
import jwt from "jwt-decode";
function ChangeProfile(props) {
  const { sendRequest } = useHttp();

  const handleUpdateInfo = async (newInfo) => {
    console.log(newInfo);

    let key = Object.keys(newInfo)[0];
    let value = newInfo[key];
    if (key !== "password")
     value = value.toLowerCase();

    key = key.charAt(0).toUpperCase() + key.slice(1);
    const userID = jwt(getCookie('token')).UserId;
    const requestBody = {
      userId:userID,
      [`new${key}`]:value,
    };
    const response = await sendRequest(
      `https://localhost:7043/api/User/Change${key}`,
      { method: "POST", body: JSON.stringify(requestBody) }
    );
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
