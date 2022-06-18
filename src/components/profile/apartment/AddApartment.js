import React, { useEffect, useRef, useState } from "react";
import classes from "./AddApartment.module.css";

import Input from "../../../UI/input/Input";

import Button from "../../../UI/Button";

function AddApartment(props) {
  const cityRef = useRef();
  const addressRef = useRef();
  const distanceRef = useRef();
  const bedRef = useRef();
  const descriptionRef = useRef();
  const [imgSrc, setImgSrc] = useState(undefined);
  const [ameneties,setAmeneties] = useState();

  const handleFileChange = (event) => {
    const src = URL.createObjectURL(event.target.files[0]);
    setImgSrc(src);
  };
  const handleAmenetiesChange = (event) =>{
    let amenetie = {
      [event.target.name]:event.target.checked,
    }
    setAmeneties((prevState) =>{
      return {...prevState,...amenetie};
    })
  }
  const handleSubmission = (event) =>{
    event.preventDefault();
    let tempAmeneties = {...ameneties};
    for(let key in tempAmeneties)
    {
      if(tempAmeneties[key] === false)
        delete tempAmeneties[key];
    }
    console.log(tempAmeneties);
    
  }

  return (
    <form className={classes.wrapper} onSubmit={handleSubmission}>
      <div className={classes.apartment_attributes}>
        <div className={classes.inputs}>
          <Input type="text" placeholder="City" ref={cityRef} />
        </div>
        <div className={classes.inputs}>
          <Input type="text" placeholder="Address" ref={addressRef}/>
        </div>
        <div className={classes.inputs}>
          <Input type="text" placeholder="Distance to center" ref={distanceRef}/>
        </div>
        <div className={classes.inputs}>
          <Input type="text" placeholder="Number of beds" ref={bedRef}/>
        </div>
        <div className={classes.inputs}>
          <label>Choose Amenities</label>
          <div id={classes.checkbox_container}>
            <div className={classes.checkbox_wrapper}>
              <input type="checkbox" name="wifi" onChange={handleAmenetiesChange} />
              <label htmlFor="wifi" >Wi-Fi</label>
            </div>
            <div className={classes.checkbox_wrapper}>
              <input type="checkbox" name="pool" onChange={handleAmenetiesChange}/>
              <label htmlFor="pool">Pool</label>
            </div>
            <div className={classes.checkbox_wrapper}>
              <input type="checkbox" name="gym" onChange={handleAmenetiesChange}/>
              <label htmlFor="gym">Gym</label>
            </div>
            <div className={classes.checkbox_wrapper}>
              <input type="checkbox" name="parking" onChange={handleAmenetiesChange}/>
              <label htmlFor="parking">Parking</label>
            </div>
            <div className={classes.checkbox_wrapper}>
              <input type="checkbox" name="garage" onChange={handleAmenetiesChange}/>
              <label htmlFor="garage">Garage</label>
            </div>
          </div>
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
