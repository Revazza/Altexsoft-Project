import React, { useEffect, useState } from "react";
import classes from "./HotelMap.module.css";
import GoogleMapReact from "google-map-react";
import useHttp from '../../../hooks/useHttp';

const HotelMap = (props) => {

  const {sendRequest} = useHttp();
  const [lat,setLat] = useState();
  const [lng,setLng] = useState();

  useEffect(()=>{
    const fetchApartmentData = async (apartmentId) =>{
      const response = await sendRequest(`https://localhost:7043/api/Apartment/${apartmentId}`);
      const coordinates = response.data.apartmentCoordinates;
      const splittedCoordinates = coordinates.split(" ");
      setLat(+splittedCoordinates[0]);
      setLng(+splittedCoordinates[1]);
    }
    if(props.apartment)
    {
      fetchApartmentData(props.apartment.apartmentId);
    }
  },[props.apartment]);


  return (
    <div className={classes.wrapper}>
      <GoogleMapReact center={{ lat, lng }} defaultZoom={16}>
        <MapPin lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
};

const MapPin = (props) => {
  return <img src="./assets/pin.png" alt="pin" />;
};

export default HotelMap;
