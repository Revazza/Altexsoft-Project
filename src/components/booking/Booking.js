import React, { useState, useRef } from "react";
import classes from "./Booking.module.css";
import HotelMap from "./hotelMap/HotelMap";
import Request from "./Request";

function Booking() {
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselClass, setCarouselClass] = useState(``);
  const handleCarouselNextBtn = () => {
    // if(currentIndex + 1 !== requestArr.length)
    //   setCarouselClass(`translateX(-carouselRef.current.clientWidth * (currentIndex+1))`);
    setCarouselClass(
      `translateX(${-carouselRef.current.clientWidth * (currentIndex + 1)}px)`
    );

    setCurrentIndex((prevState) => ++prevState);
  };
  const handleCarouselPrevBtn = () => {
    if (currentIndex !== 0) {
      setCarouselClass(
        `translateX(${-carouselRef.current.clientWidth * (currentIndex - 1)}px)`
      );
      setCurrentIndex((prevState) => --prevState);
    }
  };

  return (
    <section className={classes.wrapper}>
      <h2>My Bookings</h2>
      <div className={classes.request_wrapper}>
        <div className={classes.requests}>
          <div
            className={classes.carousel}
            ref={carouselRef}
            style={{ transform: carouselClass }}
          >
            <Request />
            <Request />
            <Request />
            <Request />
          </div>
          <div className={classes.carousel_btn} id={classes.prevBtn} onClick={handleCarouselPrevBtn}>
            <img src="/assets/arrow.png" alt="Previous" />
          </div>
          <div className={classes.carousel_btn} onClick={handleCarouselNextBtn}>
            <img src="/assets/arrow.png" alt="Next" />
          </div>
        </div>
        <div className={classes.map}>
          <HotelMap />
        </div>
      </div>
    </section>
  );
}

export default Booking;
