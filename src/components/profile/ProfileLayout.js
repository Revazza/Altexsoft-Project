import React, { useEffect, useState } from "react";
import classes from "./ProfileLayout.module.css";
import Card from "../../UI/Card";

import {
  Apartment,
  ChangeProfile,
  ProfileInformation,
  ApartmentLayout,
  AddApartment,
  useFetch,
  getCookie,
  Loading,
  Error
} from "./imports";
import jwt from "jwt-decode";

function ProfileLayout(props) {
  const token = getCookie("token");
  const { isLoading, error, data } = useFetch(
    `https://localhost:7043/api/User/GetUserProfile/${jwt(token).UserId}`
  );

  //this will be handy after window width will be less than 920px
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings((prevState) => !prevState);
  };

  const hasErrors = !isLoading && error;

  return (
    <React.Fragment>
      {hasErrors && <Error className={classes.error_wrapper} />}
      {isLoading && (
        <div className={classes.loading_wrapper}>
          <Loading />
        </div>
      )}
      {!hasErrors && (
        <Card className={classes.wrapper}>
          <section className={classes.update_info_section}>
            <h2>Profile</h2>
            <ProfileInformation
              data={data}
              onSettingsClick={handleSettingsClick}
            />
            <ChangeProfile showSettings={showSettings} />
          </section>
          {data?.apartmentId === null && (
            <section className={classes.add_apartment}>
              <Apartment label="Add Apartment">
                <AddApartment />
              </Apartment>
            </section>
          )}

          {data?.apartmentId !== null && (
            <section className={classes.apartment_layout}>
              <Apartment label="Show Apartment">
                <ApartmentLayout apartmentID={data?.apartmentId} />
              </Apartment>
            </section>
          )}
        </Card>
      )}
    </React.Fragment>
  );
}

export default ProfileLayout;
