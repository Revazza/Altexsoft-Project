import React from 'react';
import classes from './ProfileInformation.module.css';

function ProfileInformation() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.img_wrapper}>
        <img src='./assets/user2.png' alt='Profile Picture' />
      </div>
    </div>
  )
}

export default ProfileInformation;
