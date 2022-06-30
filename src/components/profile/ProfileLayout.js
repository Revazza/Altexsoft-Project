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
  Error,
  useHttp
} from "./imports";
import jwt from "jwt-decode";

function ProfileLayout(props) {
  const token = getCookie("token");
  const { isLoading, error, data } = useFetch(
    `https://localhost:7043/api/User/GetUserProfile/${jwt(token).UserId}`
  );
  const {sendRequest} = useHttp();
  
  const [userData,setUserData] = useState();
  const [updateTriggered,setUpdateTriggered] = useState(0);
  //this will be handy after window width will be less than 920px
  const [showSettings, setShowSettings] = useState(false);

  useEffect(()=>{
    if(data)
      setUserData(data);
  },[data]);
  
  useEffect(() =>{
    const updateUserData = async () =>{
      const response = await sendRequest(`https://localhost:7043/api/User/GetUserProfile/${jwt(token).UserId}`);
      if(!response.errorMsg)
        setUserData(response.data);
    }
    updateUserData();
  },[updateTriggered]);

  const handleForceUpdate = () =>{
    setUpdateTriggered((prevState) => ++prevState);
  }

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
        <div className={classes.wrapper}>
          <section className={classes.update_info_section}>
            <h2>Profile</h2>
            <ProfileInformation
              data={userData}
              onSettingsClick={handleSettingsClick}
            />
            <ChangeProfile showSettings={showSettings} onUpdate = {handleForceUpdate}/>
          </section>
          {userData?.apartmentId === null && (
            <section className={classes.add_apartment}>
              <Apartment label="Add Apartment">
                <AddApartment onUpdate={handleForceUpdate}/>
              </Apartment>
            </section>
          )}

          {userData?.apartmentId !== null && (
            <section className={classes.apartment_layout}>
              <Apartment label="Show Apartment">
                <ApartmentLayout apartmentID={userData?.apartmentId} onUpdate = {handleForceUpdate}/>
              </Apartment>
            </section>
          )}
        </div>
      )}
    </React.Fragment>
  );
}

export default ProfileLayout;
