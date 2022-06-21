import React from "react";
import classes from "./Request.module.css";

const Request = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.img_wrapper}>
        <img src="./assets/user2.png" />
      </div>
      <div className={classes.info}>
        <div className={classes.address}>
          <p>Address,some long address</p>
        </div>
        <div className={classes.distance}>
          <p>500m to center, 2 beds</p>
        </div>
        <div className={classes.description}>
          <p>Some long description very osom hotel bla bla bla bla surrounded by very good people bla bla bla and blaaaaaaaa</p>
        </div>
        <div className={classes.ameneties}>
          <p>WiFi,Gym,Parking,Castle,Windows</p>
        </div>
        <div className={classes.checkin_out}>
          <p>2022/12/14 - 2022/12/30</p>
        </div>  

      </div>
    </div>
  );
};

export default Request;
