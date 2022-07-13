import React, { useCallback, useEffect, useState } from "react";
import classes from "./ProfileLayout.module.css";
import {
  Apartment,
  ChangeProfile,
  ProfileInformation,
  ApartmentLayout,
  AddApartment,
  useFetch,
  getCookie,
  Loading,
  Error,
} from "./imports";
import jwt from "jwt-decode";

function ProfileLayout(props) {
  const token = getCookie("token");
  const { isLoading, error, data } = useFetch(
    `https://localhost:7043/api/User/GetUserProfile/${jwt(token).UserId}`
  );

  const [username,setUsername] = useState();
  const [email,setEmail] = useState();
  const [apartmentID,setApartmentID] = useState();

  //this will be handy after window width will be less than 920px
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (data)
    {
      setUsername(data.userName);
      setEmail(data.email);
      setApartmentID(data.apartmentId);
    }
  }, [data]);

  const setUserNewData = (newData) =>{
    if(newData.changed === 'Email')
    {
      setEmail(newData.value);
    }
    else if(newData.changed === 'UserName')
    {
      setUsername(newData.value);
    }
    else{
      console.log(newData);
      setApartmentID(newData.value);
    }
  }

  const handleSettingsClick = useCallback(() => {
    setShowSettings((prevState) => !prevState);
  }, []);

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
        <div className={classes.wrapper}>
          <section className={classes.update_info_section}>
            <h2>Profile</h2>
            <ProfileInformation
              username={username}
              email={email}
              userPicture ={data?.userPicture}
              onSettingsClick={handleSettingsClick}
            />
            <ChangeProfile
              showSettings={showSettings}
              onUserDataUpdate={setUserNewData}
            />
          </section>
          {apartmentID === null && (
            <section className={classes.add_apartment}>
              <Apartment label="Add Apartment">
                <AddApartment onHotelAdd={setUserNewData}/>
              </Apartment>
            </section>
          )}

          {apartmentID !== null && (
            <section className={classes.apartment_layout}>
              <Apartment label="Show Apartment">
                <ApartmentLayout
                  apartmentID={apartmentID}
                  onHotelDelete={setUserNewData}
                />
              </Apartment>
            </section>
          )}
        </div>
      )}
    </React.Fragment>
  );
}

export default ProfileLayout;
