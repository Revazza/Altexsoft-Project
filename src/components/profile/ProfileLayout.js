import React from "react";

import classes from "./ProfileLayout.module.css";
import ChangeProfile from "./profileSections/ChangeProfile";
import ProfileInformation from "./profileSections/ProfileInformation";

function ProfileLayout() {
  return (
    <div className={classes.wrapper}>
      <section >
        <h2>Profile</h2>
        <ProfileInformation />
        <ChangeProfile />
      </section>
    </div>
  );
}

export default ProfileLayout;
