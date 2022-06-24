import React from "react";
import classes from "./ApartmentLayout.module.css";
import HotelAttributes from "./HotelAttributes";
import { GoogleMapReact,Button } from "../../imports";
const ApartmentLayout = (props) => {
  // console.log(props.apartmentID);
  const apartmentClasses = props.hideApartment
    ? `${classes.wrapper} ${classes.hideApartment}`
    : `${classes.wrapper}`;

  return (
    <div className={apartmentClasses}>
      <div className={classes.info_wrapper}>
        <div className={classes.img_wrapper}>
          <img src="./assets/Rectangle.png" alt="Your Hotel" />
        </div>
        <section className={classes.hotel_information}>
          <div className={classes.attributes_wrapper}>
            <HotelAttributes
              attribute="City"
              atrInfo="Tbilisi"
              id={classes.firstAttribute}
            />
            <HotelAttributes
              attribute="Address"
              atrInfo="Some Address like this"
            />
            <HotelAttributes attribute="Center In" atrInfo="300m" />
            <HotelAttributes attribute="Beds" atrInfo="4-5" />
            <HotelAttributes
              attribute="Description"
              atrInfo="Some long string and bla bla bla this hotel is great more string more greatness lorem lorem lorem lorem lorem"
            />
          </div>
        </section>
      </div>
      <div className={classes.map_wrapper}>
        <GoogleMapReact
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={16}
        >
          <MapPin lat={59.95} lng={30.33} />
        </GoogleMapReact>
      </div>
      <div className={classes.delete_btn}>
        <Button type='button' title='Delete Apartment' />
      </div>
    </div>
  );
};

const MapPin = (props) => {
  return <img src="./assets/pin.png" alt="pin" />;
};

export default ApartmentLayout;
