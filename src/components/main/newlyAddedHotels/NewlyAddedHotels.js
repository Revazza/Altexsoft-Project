import React from "react";
import classes from "./NewlyAddedHotels.module.css";
import { Item, useFetch, Loading, Error } from "./imports";
function PopularHotels() {
  const { isLoading, error, data } = useFetch(
    "https://localhost:7043/api/Apartment?n=8"
  );
  

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
              <Item key={hotel.apartmentId} hotel={hotel} />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default PopularHotels;
