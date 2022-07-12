import React from "react";
import classes from "./ProfileInformation.module.css";
function ProfileInformation(props) {

  const imgSrc =
    props.userPicture?.userHeader + props.userPicture?.userPicture;
  const handleSettingsClick = () => {
    props.onSettingsClick();
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.img_wrapper}>
        <img src={imgSrc ? imgSrc: './assets/Rectangle.png' } alt="Profile" />
      </div>
      <div className={classes.settings} onClick={handleSettingsClick}>
        <img src="./assets/settings.png" alt='settings'/>
      </div>
      <div className={classes.info_wrapper}>
        <div className={classes.info}>
          <div className={classes.template}>
            <p>Username:</p>
          </div>
          <div>
            <p>{props.username}</p>
          </div>
        </div>
        <div className={classes.info}>
          <div className={classes.template}>
            <p>Email</p>
          </div>
          <div>
            <p>{props.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInformation;
