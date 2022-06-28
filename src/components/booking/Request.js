import React, { useEffect } from "react";
import classes from "./Request.module.css";
import useFetch from "../../hooks/useFetch";
const Request = (props) => {
  const { apartmentId, currentStatus, stayFrom, stayTo } = props?.request;
  const startDate = new Date(stayFrom).toISOString().split("T")[0];
  const endDate = new Date(stayTo).toISOString().split("T")[0];

  const { data } = useFetch(
    `https://localhost:7043/api/Apartment/${apartmentId}`
  );
  const imgSrc =
    data?.apartmentPicture.apartmentHeader +
    data?.apartmentPicture.apartmentPicture;
  let requestStatusImgSrc;
  if (currentStatus === 0) requestStatusImgSrc = "./assets/pending.png";
  else if (currentStatus === 1) requestStatusImgSrc = "./assets/declined.png";
  else requestStatusImgSrc = "./assets/accepted.png";

  const handleRequestClick = () => {
    props.onRequestClick(props.request);
  };

  return (
    <div className={classes.wrapper} onClick={handleRequestClick}>
      <div className={classes.img_wrapper}>
        <img src={imgSrc ? imgSrc : "./assets/hotel.png"} alt="Hotel" />
      </div>
      <div className={classes.info}>
        <div className={classes.address}>
          <p>{data?.address}</p>
        </div>
        <div className={classes.distance}>
          <p>
            {data?.distanceToCenter} to center, {data?.bedsNumber} beds
          </p>
        </div>
        <div className={classes.description}>
          <p>{data?.apartmentDescription}</p>
        </div>
        <div className={classes.checkin_out}>
          <p>
            {startDate} - {endDate}
          </p>
          <div className={classes.request_situation}>
            <img src={requestStatusImgSrc} />
            {currentStatus === 0 && <p>Pending...</p>}
            {currentStatus === 1 && <p id={classes.declined}>Declined</p>}
            {currentStatus === 2 && <p id={classes.accepted}>Accepted</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
