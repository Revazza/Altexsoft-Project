import React from "react";

import styles from "./Card.module.css";

function Card(props) {

  const classes = `${styles.wrapper} ${props.className}`

  return <div className={classes} onClick={props?.onClick}>
    {props.children}
  </div>;
}

export default Card;
