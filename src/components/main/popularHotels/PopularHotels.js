import React, { useEffect, useState } from "react";
import Item from "./Item";
import classes from "./PopularHotels.module.css";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../UI/loading/Loading";
import Error from "../../../UI/error/Error";
function PopularHotels() {
  const { isLoading, error, data } = useFetch(
    "https://localhost:7043/api/Apartment?n=10"
  );



  const hasErrors = !isLoading && error;
  return (
    <section className={classes.section_wrapper}>
      <h2>Newly Added Hotels</h2>
      {hasErrors && <Error className={classes.error}/>}
      {isLoading && <Loading />}
      {!hasErrors && (
        <div className={classes.wrapper}>
          {data?.map((hotel) => {
            return <Item key={hotel.apartmentId} hotel={hotel} />;
          })}
        </div>
      )}
    </section>
  );
}

export default PopularHotels;
