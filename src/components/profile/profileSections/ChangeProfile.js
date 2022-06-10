import React, { useState } from "react";
import classes from "./ChangeProfile.module.css";

import ChangeInformation from "./changeInformation/ChangeInformation";

import {
  validateEmail,
  validateUsername,
  validatePassword
} from "../../../helperFunctions/HelperFunctions";

const emailInput = {
  inputs: [
    {
      id: 0,
      inputType: "text",
      placeholder: "Change Email",
      validationFuncion: validateEmail,
      name: "email",
    },
  ],
  button: {
    type: "submit",
    title: "Update Email",
  },
};
const usernameInput = {
  inputs: [
    {
      id: 0,
      inputType: "text",
      placeholder: "Change Username",
      validationFuncion: validateUsername,
      name: "username",
    },
  ],
  button: {
    type: "submit",
    title: "Update Username",
  },
};

function ChangeProfile() {
  const passwordInput = {
    inputs: [
      {
        id: 0,
        inputType: "password",
        placeholder: "Change Password",
        validationFuncion: validatePassword,
        name: "password",
      },
      {
        id:1,
        inputType:'password',
        placeholder:'Repeat Password',
        validationFuncion:validatePassword,
        name:'rePassword',
      }
    ],
    button: {
      type: "submit",
      title: "Update Password",
    },
  };

  const handleUpdateInfo = (newInfo) =>{
    console.log(newInfo);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.form_wrapper}>
        <ChangeInformation title="Change Email" updateInfo={emailInput} onUpdateInfo={handleUpdateInfo} />
        <ChangeInformation title="Change Username" updateInfo={usernameInput} />
        <ChangeInformation title="Change Password" updateInfo={passwordInput} className={classes.reset_form}/>
      </div>
    </div>
  );
}

export default ChangeProfile;
