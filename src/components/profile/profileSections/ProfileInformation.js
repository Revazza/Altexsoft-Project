import React, { useState } from "react";
import classes from "./ProfileInformation.module.css";
import { Card } from "../imports";
function ProfileInformation(props) {
  

  const handleSettingsClick = () =>{
    props.onSettingsClick();
  }

  return (
    <Card className={classes.wrapper}>
      <div className={classes.img_wrapper}>
        <img src="./assets/user2.png" alt="Profile Picture" />
      </div>
      <div className={classes.settings} onClick={handleSettingsClick}>
        <img src="./assets/settings.png" />
      </div>
      <div className={classes.info_wrapper}>
        <div className={classes.info}>
          <div className={classes.template}>
            <p>Username:</p>
          </div>
          <div>
            <p>My Username</p>
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.template}>
            <p>Email</p>
          </div>
          <div>
            <p>My Email</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProfileInformation;
