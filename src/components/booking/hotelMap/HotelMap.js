import React from "react";
import classes from "./HotelMap.module.css";
import GoogleMapReact from "google-map-react";

const HotelMap = (props) => {

  return (
    <div className={classes.wrapper}>
      <GoogleMapReact
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={16}
      >
        <MapPin lat={59.95} lng={30.33} />
      </GoogleMapReact>
    </div>
  );
};

const MapPin = (props) => {
  return <img src="./assets/pin.png" alt="pin" />;
};

export default HotelMap;
