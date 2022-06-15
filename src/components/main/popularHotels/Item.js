import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../UI/Button";
import classes from "./Item.module.css";

function Item(props) {
  const { title, distanceToCenter, description, bed, isAvailable, id } =
    props.hotel;
  const history = useHistory();
  const handleItemClick = () => {
    history.push(`/result/${title}`, {
      state: props.hotel,
    });
  };
  return (
    <div className={classes.item} onClick={handleItemClick}>
      <div className={classes.img_wrapper}>
        <img src="./assets/Rectangle.png" />
      </div>
      <article className={classes.characteristic}>
        <h4>{title}</h4>
        <div className={classes.additional_info}>
          <p>{distanceToCenter}m to center</p>
          <p>{bed} beds</p>
        </div>
        <div className={classes.description}>
          <p>{description}</p>
        </div>
      </article>
      <div className={classes.booking_btn}>
        <Button type="button" disabled={!isAvailable} title="Book Now" />
      </div>
    </div>
  );
}

export default Item;
