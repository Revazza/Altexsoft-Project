import React from "react";
import Button from "../../../UI/Button";
import classes from "./Item.module.css";

function Item(props) {
  return (
    <div className={classes.item}>
      <div className={classes.img_wrapper}>
        <img src="./assets/Rectangle.png" />
      </div>
      <article className={classes.characteristic}>
        <h4>{props.title}</h4>
        <div className={classes.additional_info}>
          <p>{props.distanceToCenter}m to center</p>
          <p>{props.bed} beds</p>
        </div>
        <div className={classes.description}>
          <p>
            {props.description}
          </p>
        </div>
      </article>
      <div className={classes.booking_btn}>
        <Button type='button' disabled={!props.isAvailable} title='Book Now' />
      </div>
    </div>
  );
}

export default Item;
