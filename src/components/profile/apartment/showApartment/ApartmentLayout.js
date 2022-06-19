import React from "react";
import classes from "./ApartmentLayout.module.css";
import HotelAttributes from "./HotelAttributes";

const ApartmentLayout = (props) => {

  const apartmentClasses = props.hideApartment
    ? `${classes.wrapper} ${classes.hideApartment}`
    : `${classes.wrapper}`;

  return (
    <div className={apartmentClasses}>
      <div className={classes.img_wrapper}>
        <img src="./assets/Rectangle.png" alt="Your Hotel" />
      </div>
      <section className={classes.hotel_information}>
        <h4>Your Hotel Name</h4>
        <div className={classes.attributes_wrapper}>
          <HotelAttributes attribute="City" atrInfo="Tbilisi" />
          <HotelAttributes
            attribute="Address"
            atrInfo="Some Address like this"
          />
          <HotelAttributes attribute="Center In" atrInfo="300m" />
          <HotelAttributes attribute="Beds" atrInfo="4-5" />
          <HotelAttributes
            attribute="Ameneties"
            atrInfo="Wifi,Gym,Pool,Something and more"
          />
          <HotelAttributes
            attribute="Description"
            atrInfo="Some long string and bla bla bla this hotel is great more string more greatness lorem lorem lorem lorem lorem"
          />
        </div>
      </section>
    </div>
  );
};

export default ApartmentLayout;
