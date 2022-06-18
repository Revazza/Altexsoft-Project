import React, { useState } from "react";
import classes from "./Apartment.module.css";
import Card from '../../../UI/Card';
function Apartment(props) {
  const [showApartment, setShowApartment] = useState(false);

  const toggleAppartment = () => {
    setShowApartment((prevState) => !prevState);
  };

  return (
    <Card className={classes.wrapper}>
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
        {showApartment && props.children}
      </div>
    </Card>
  );
}

export default Apartment;
