import React, { useRef, useState } from "react";
import classes from "./AddApartment.module.css";

import { Button, Input,useSelector,useHttp } from "../../imports";
import jwt from 'jwt-decode';

function AddApartment(props) {
  const token = useSelector((state) => state.auth.token);
  const {sendRequest} = useHttp();

  const cityRef = useRef();
  const addressRef = useRef();
  const distanceRef = useRef();
  const bedRef = useRef();
  const descriptionRef = useRef();
  const [imgSrc, setImgSrc] = useState(undefined);

  const apartmentClasses = props.hideApartment
    ? `${classes.wrapper} ${classes.hideApartment}`
    : `${classes.wrapper}`;

  const handleFileChange = (event) => {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) =>{
      setImgSrc(e.target.result);
    }
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    let image64 = imgSrc.replace('data:image/jpeg;base64,','');
    const request = {
      userID:jwt(token).UserId,
      city:cityRef.current.value,
      address:addressRef.current.value,
      distanceToCenter:+distanceRef.current.value,
      apartmentDescription:descriptionRef.current.value,
      bedsNumber:+bedRef.current.value,
      apartmentPicture:image64,
    }

    sendRequest('https://localhost:7043/api/Apartment/AddApartment',{
      method:'POST',
      body:JSON.stringify(request),
    })
    
  };

  return (
    <form className={apartmentClasses} onSubmit={handleSubmission}>
      <div className={classes.apartment_attributes}>
        <div className={classes.inputs}>
          <Input type="text" placeholder="City" ref={cityRef} />
        </div>
        <div className={classes.inputs}>
          <Input type="text" placeholder="Address" ref={addressRef} />
        </div>
        <div className={classes.inputs}>
          <Input
            type="text"
            placeholder="Distance to center"
            ref={distanceRef}
          />
        </div>
        <div className={classes.inputs}>
          <Input type="text" placeholder="Number of beds" ref={bedRef} />
        </div>
        <div className={classes.inputs} id={classes.description}>
          <textarea placeholder="Description" ref={descriptionRef}></textarea>
        </div>
        <input type="file" onChange={handleFileChange} />
      </div>
      <div className={classes.photo_wrapper}>
        <img
          src={imgSrc ? imgSrc : "./assets/Rectangle.png"}
          alt="Your Image"
        />
      </div>
      <div className={classes.submit_btn}>
        <Button type="submit" title="Add Apartment" />
      </div>
    </form>
  );
}

export default AddApartment;
