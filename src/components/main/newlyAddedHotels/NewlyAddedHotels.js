import React, { useEffect, useState } from "react";
import classes from "./NewlyAddedHotels.module.css";
import { Item, useFetch, Loading, Error, getCookie } from "./imports";
import jwt from "jwt-decode";
function PopularHotels() {
  const { isLoading, error, data } = useFetch(
    "https://localhost:7043/api/Apartment?n=10"
  );
  const token = getCookie("token");
  const { data: userData } = useFetch(
    `https://localhost:7043/api/User/${
      token ? jwt(token).UserId : ""
    }`
  );
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (userData) {
      setUserInfo(userData);
    }
  }, [userData]);

  const hasErrors = !isLoading && error;
  return (
    <section className={classes.section_wrapper}>
      <h2>Newly Added Hotels</h2>
      {hasErrors && <Error className={classes.error} />}
      {isLoading && <Loading />}
      {!hasErrors && (
        <div className={classes.wrapper}>
          {data?.map((hotel) => {
            return (
              <Item key={hotel.apartmentId} hotel={hotel} userInfo={userInfo} />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default PopularHotels;
