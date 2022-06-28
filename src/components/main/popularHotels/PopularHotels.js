import React, { useEffect, useState } from "react";
import Item from "./Item";
import classes from "./PopularHotels.module.css";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../UI/loading/Loading";

function PopularHotels() {
  const { isLoading, error, data } = useFetch(
    "https://localhost:7043/api/Apartment?n=10"
  );

  console.log(data);

  useEffect(() => {}, []);

  return (
    <section className={classes.section_wrapper}>
      <h2>Popular Hotels</h2>
      {isLoading && (
        <div className={classes.loading_wrapper}>
          <Loading />
        </div>
      )}
      {!isLoading && <div className={classes.wrapper}>
        {data?.map((hotel) =>{
          return <Item key={hotel.apartmentId} hotel={hotel}/>
        })}
        </div>}
    </section>
  );
}

export default PopularHotels;
