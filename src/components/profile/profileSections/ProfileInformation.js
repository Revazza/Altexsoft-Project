import React, { useState } from "react";
import classes from "./ProfileInformation.module.css";

function ProfileInformation() {
  const [showPassword, setShowPassword] = useState(false);
  const password = "Sandro1234";
  const passwordType = showPassword?'text':'password'

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.img_wrapper}>
        <img src="./assets/user2.png" alt="Profile Picture" />
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
        <div className={classes.info}>
          <div className={classes.template}>
            <p>Password</p>
          </div>
          <div className={classes.real_info}>
            <input type={passwordType} value={password} readOnly={true} />
            {!showPassword && (
              <img
                onClick={handleShowPassword}
                src="./assets/hide.png"
                alt="hide"
              />
            )}
            {showPassword && (
              <img
                onClick={handleShowPassword}
                src="./assets/show.png"
                alt="show"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInformation;
