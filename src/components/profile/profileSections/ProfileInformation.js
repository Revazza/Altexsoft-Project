import React, { useState } from "react";
import classes from "./ProfileInformation.module.css";
import { Card } from "../imports";
function ProfileInformation(props) {

  const imgSrc =
    props.data?.userPicture.userHeader + props.data?.userPicture.userPicture;
  const handleSettingsClick = () => {
    props.onSettingsClick();
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.img_wrapper}>
        <img src={imgSrc ? imgSrc: './assets/Rectangle.png' } alt="Profile Picture" />
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
            <p>{props.data?.userName}</p>
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.template}>
            <p>Email</p>
          </div>
          <div>
            <p>{props.data?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInformation;
