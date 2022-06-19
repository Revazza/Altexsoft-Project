import React, { useState } from "react";
import classes from "./ChangeProfile.module.css";

import ChangeInformation from "./changeInformation/ChangeInformation";

import { emailInput, usernameInput, passwordInput } from "../imports";

function ChangeProfile() {
  const handleUpdateInfo = (newInfo) => {
    console.log(newInfo);
  };

  return (
    <div className={classes.wrapper}>
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
