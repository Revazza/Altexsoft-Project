import React from "react";
import classes from "./Item.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import jwt from 'jwt-decode';
import {
  Button,
  useHttp,
  getCookie,
  notificationActions,
} from "./imports";

function Item(props) {
  const {
    city,
    distanceToCenter,
    apartmentDescription,
    bedsNumber,
    apartmentId,
    address,
    apartmentPicture,
    apartmentStatus,
  } = props.hotel;
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();


  let imgSrc = "./assets/Rectangle.png";
  if (apartmentPicture) {
    imgSrc =
      apartmentPicture.apartmentHeader + apartmentPicture.apartmentPicture;
  }
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const handleSubmission = async () => {
    const userInfo = jwt(getCookie('token'));
    let requestBody = {
      guestId: userInfo.UserId,
      firstName: userInfo.FirstName,
      lastName: userInfo.LastName,
      city,
      apartmentId,
      hostFrom: `${startDate}`,
      hostTo: `${endDate}`,
    };
    const response = await sendRequest(
      "https://localhost:7043/api/Booking/Booking",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
        body: JSON.stringify(requestBody),
      }
    );
    dispatch(
      notificationActions.showNotification({
        type: !response.errorMsg ? "success" : "error",
        msg: !response.errorMsg ? 'Stay Requested' : response.errorMsg,
      })
    );
  };
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const buttonIsAvailable =
    startDate.length !== 0 && endDate.length !== 0 && apartmentStatus === null;
  //getting current date in yyyy-mm-d format
  const minDate = new Date().toISOString().split("T")[0];
  const currentDate = new Date();
  //getting current date + 1 month in yyyy-mm-d format
  const maxAvailabeDate = new Date(
    currentDate.setMonth(currentDate.getMonth() + 1)
  )
    .toISOString()
    .split("T")[0];
  return (
    <div className={classes.item}>
      <div className={classes.descr_wrapper}>
        <div className={classes.img_wrapper}>
          <img src={imgSrc} alt='Hotel' />
        </div>
        <article className={classes.characteristic}>
          <h4>{address}</h4>
          <div className={classes.additional_info}>
            <p>{distanceToCenter}m to center</p>
            <p>{bedsNumber} beds</p>
          </div>
          <div className={classes.description}>
            <p>{apartmentDescription}</p>
          </div>
        </article>
        <section className={classes.date_input}>
          <div className={classes.start_date}>
            <p>Start Date</p>
            <input
              type="date"
              onChange={handleStartDateChange}
              min={minDate}
              max={maxAvailabeDate}
            />
          </div>
          <div className={classes.end_date}>
            <p>End Date</p>
            <input
              type="date"
              onChange={handleEndDateChange}
              min={minDate}
              max={maxAvailabeDate}
            />
          </div>
          <div className={classes.booking_btn}>
            <Button
              type="button"
              title={apartmentStatus === null ? "Book Now" : "Not Available"}
              disabled={!buttonIsAvailable}
              onClick={handleSubmission}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Item;
