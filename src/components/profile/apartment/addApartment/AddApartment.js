import React, { useRef, useState } from "react";
import classes from "./AddApartment.module.css";

import {
  Button,
  Input,
  useSelector,
  useHttp,
} from "../../imports";

import Map from "./map/Map";

import jwt from "jwt-decode";

function AddApartment(props) {
  const token = useSelector((state) => state.auth.token);
  const { sendRequest } = useHttp();

  const cityRef = useRef();
  const addressRef = useRef();
  const distanceRef = useRef();
  const bedRef = useRef();
  const descriptionRef = useRef();
  const [lat,setLat] = useState(41.7151);
  const [lng,setLng] = useState(44.8268);
  const [img, setImg] = useState(undefined);

  const apartmentClasses = props.hideApartment
    ? `${classes.wrapper} ${classes.hideApartment}`
    : `${classes.wrapper}`;

  const handleFileChange = (event) => {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      setImg(e.target.result);
    };
  };

  const handlePositionChange = (event) =>{
    setLat(event.lat);
    setLng(event.lng);
    console.log(event);
  }

  const handleSubmission = (event) => {
    event.preventDefault();
    let image64 = img.replace("data:image/jpeg;base64,", "");
    const request = {
      userID: jwt(token).UserId,
      city: cityRef.current.value,
      address: addressRef.current.value,
      distanceToCenter: +distanceRef.current.value,
      apartmentDescription: descriptionRef.current.value,
      bedsNumber: +bedRef.current.value,
      apartmentPicture: image64,
      location: {
        lng,
        lat,
      },
    };

    console.log(request)

    // sendRequest("https://localhost:7043/api/Apartment/AddApartment", {
    //   method: "POST",
    //   body: JSON.stringify(request),
    // });
  };

  return (
    <form className={apartmentClasses} onSubmit={handleSubmission}>
      <div className={classes.apartment_attributes}>
        <div className={classes.inputs}>
          <Input type="text" placeholder="City" ref={cityRef} required={true}/>
        </div>
        <div className={classes.inputs}>
          <Input type="text" placeholder="Address" ref={addressRef} />
        </div>
        <div className={classes.inputs}>
          <Input
            type="number"
            placeholder="Distance to center"
            ref={distanceRef}
            required={true}
          />
        </div>
        <div className={classes.inputs}>
          <Input type="number" placeholder="Number of beds" ref={bedRef} required={true}/>
        </div>
        <div className={classes.inputs} id={classes.description}>
          <textarea placeholder="Description" ref={descriptionRef} required={true}></textarea>
        </div>
        <input type="file" onChange={handleFileChange} required={true}/>
      </div>
      <div className={classes.google_map_wrapper}>
        <Map onPositionChange={handlePositionChange} lat={lat} lng={lng}/>
      </div>
      <div className={classes.submit_btn}>
        <Button type="submit" title="Add Apartment" />
      </div>
    </form>
  );
}



export default AddApartment;
