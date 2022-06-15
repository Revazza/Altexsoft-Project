import React from "react";
import Apartment from "./apartment/Apartment";

import classes from "./ProfileLayout.module.css";
import ChangeProfile from "./profileSections/ChangeProfile";
import ProfileInformation from "./profileSections/ProfileInformation";

function ProfileLayout() {
  return (
    <div className={classes.wrapper}>
      <section className={classes.update_info_section}>
        <h2>Profile</h2>
        <ProfileInformation />
        <ChangeProfile />
      </section>
      <section className={classes.add_apartment}>
        <Apartment />
      </section>
    </div>
  );
}

export default ProfileLayout;
