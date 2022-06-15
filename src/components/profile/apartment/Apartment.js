import React, { useState } from "react";
import AddApartment from "./AddApartment";
import classes from "./Apartment.module.css";

function Apartment() {
  const [showApartment, setShowApartment] = useState(true);

  const toggleAppartment = () => {
    setShowApartment((prevState) => !prevState);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrap_section}>
        <div className={classes.show_apartment} onClick={toggleAppartment}>
          <div className={classes.title}>
            <label>Add Apartment</label>
          </div>
          <div className={classes.arrow}>
            <img
              src="./assets/list_arrow.png"
              alt="Add Apartment"
              style={{ transform: showApartment && "rotate(-90deg)" }}
            />
          </div>
        </div>
        {showApartment && <hr></hr>}
        {showApartment && <AddApartment />}
      </div>
    </div>
  );
}

export default Apartment;
