import React, { useState } from "react";
import classes from "./ProfileLayout.module.css";
import Card from "../../UI/Card";

import {
  Apartment,
  ChangeProfile,
  ProfileInformation,
  ApartmentLayout,
  AddApartment,
} from "./imports";

function ProfileLayout() {
  return (
    <Card className={classes.wrapper}>
      <section className={classes.update_info_section}>
        <h2>Profile</h2>
        <ProfileInformation />
        <ChangeProfile />
      </section>
      <section className={classes.add_apartment}>
        <Apartment label="Add Apartment">
          <AddApartment />
        </Apartment>
      </section>
      <section className={classes.apartment_layout}>
        <Apartment label="Show Apartment">
          <ApartmentLayout />
        </Apartment>
      </section>
    </Card>
  );
}

const MapPin = () => {
  return <img src="./assets/pin.png" alt="pin" />;
};

export default ProfileLayout;
