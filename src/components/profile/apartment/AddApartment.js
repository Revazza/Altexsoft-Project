import React, { useRef, useState } from "react";
import classes from "./AddApartment.module.css";

import Input from "../../../UI/input/Input";

import Button from "../../../UI/Button";

function AddApartment() {
  const cityRef = useRef();
  const addressRef = useRef();
  const distanceRef = useRef();
  const bedRef = useRef();
  const [imgSrc, setImgSrc] = useState(undefined);
  const handleFileChange = (event) => {
    const src = URL.createObjectURL(event.target.files[0]);
    console.log(src);
    setImgSrc(src);
  };

  return (
    <form className={classes.wrapper}>
      <div className={classes.apartment_attributes}>
        <div className={classes.inputs}>
          <Input type="text" placeholder="City" />
        </div>
        <div className={classes.inputs}>
          <Input type="text" placeholder="Address" />
        </div>
        <div className={classes.inputs}>
          <Input type="text" placeholder="Distance to center" />
        </div>
        <div className={classes.inputs}>
          <Input type="text" placeholder="Number of beds" />
        </div>
        <div className={classes.inputs}>
          <label>Choose Amenities</label>
          <div id={classes.checkbox_container}>
            <div className={classes.checkbox_wrapper}>
              <input type="checkbox" name="wifi" />
              <label for="wifi">Wi-Fi</label>
            </div>
            <div className={classes.checkbox_wrapper}>
              <input type="checkbox" name="pool" />
              <label for="pool">Pool</label>
            </div>
            <div className={classes.checkbox_wrapper}>
              <input type="checkbox" name="gym" />
              <label for="gym">Gym</label>
            </div>
            <div className={classes.checkbox_wrapper}>
              <input type="checkbox" name="parking" />
              <label for="parking">Parking</label>
            </div>
            <div className={classes.checkbox_wrapper}>
              <input type="checkbox" name="garage" />
              <label for="garage">Garage</label>
            </div>
          </div>
        </div>
        <div className={classes.inputs} id={classes.description}>
          <textarea placeholder="Description"></textarea>
        </div>
        <input type="file" onChange={handleFileChange} />
      </div>
      <div className={classes.photo_wrapper}>
        <img
          src={imgSrc ? imgSrc : "./assets/Rectangle.png"}
          alt="Uploaded Image"
        />
      </div>
      <div className={classes.submit_btn}>
        <Button type="submit" title="Add Apartment" />
      </div>
    </form>
  );
}

export default AddApartment;
