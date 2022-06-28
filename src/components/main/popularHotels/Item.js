import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../UI/Button";
import classes from "./Item.module.css";
import { useState } from "react";
import useHttp from "../../../hooks/useHttp";
import useFetch from "../../../hooks/useFetch";
import { getCookie } from "../../../helperFunctions/HelperFunctions";
import {notificationSliceActions} from '../../../store/notificationSlice';
import jwt from "jwt-decode";

function Item(props) {
  const {
    city,
    distanceToCenter,
    apartmentDescription,
    bedsNumber,
    apartmentId,
    address,
    apartmentPicture
  } = props.hotel;
  const { sendRequest } = useHttp();
  const { error,data } = useFetch(
    `https://localhost:7043/api/User/${jwt(getCookie("token")).UserId}`
  );
  let imgSrc = './assets/Rectangle.png';
  if(data)
  {
    imgSrc = apartmentPicture.apartmentHeader + apartmentPicture.apartmentPicture;
  }
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const handleSubmission = async () => {    
    let requestBody = {
      guestId: data.userId,
      firstName: data.firstName,
      lastName: data.lastName,
      city,
      apartmentId,
      hostFrom: `${startDate}`,
      hostTo: `${endDate}`,
    };
    const response = await sendRequest('https://localhost:7043/api/Booking/Booking',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body:JSON.stringify(requestBody)
    });
    console.log(response)
  };
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const buttonIsAvailable = startDate.length !== 0 && endDate.length !== 0;
  const currentDate = new Date();
  const minDate = currentDate.toISOString().split('T')[0];
  console.log(currentDate);
  const maxAvailabeDate = currentDate.setMonth(currentDate.getMonth() + 1);
  console.log(maxAvailabeDate);
  return (
    <div className={classes.item}>
      <div className={classes.descr_wrapper}>
        <div className={classes.img_wrapper}>
          <img src={imgSrc} />
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
            <input type="date" onChange={handleStartDateChange} min={minDate} max="2022-07-28"/>
          </div>
          <div className={classes.end_date}>
            <p>End Date</p>
            <input type="date" onChange={handleEndDateChange}  min={minDate} max="2022-06-30"/>
          </div>
          <div className={classes.booking_btn}>
            <Button
              type="button"
              title="Book Now"
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
