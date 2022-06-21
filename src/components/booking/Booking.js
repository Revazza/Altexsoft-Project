import React from 'react';
import classes from './Booking.module.css';
import HotelMap from './hotelMap/HotelMap';
import Request from './Request';

function Booking() {
  return (
    <section className={classes.wrapper}>
      <h2>My Bookings</h2>
      <div className={classes.request_wrapper}>
        <div className={classes.requests}>
          <Request />
          <Request />
          <Request />
          <Request />
        </div>
        <div className={classes.map}>
          <HotelMap />
        </div>
      </div>
    </section>
  )
}

export default Booking;
