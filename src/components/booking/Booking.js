import React, { useState, useRef, useEffect } from "react";
import classes from "./Booking.module.css";
import HotelMap from "./hotelMap/HotelMap";
import Request from "./Request";
import jwt from "jwt-decode";
import { getCookie } from "../../helperFunctions/HelperFunctions";
import useFetch from "../../hooks/useFetch";
function Booking() {
  const userID = jwt(getCookie("token")).UserId;
  const { data } = useFetch(
    `https://localhost:7043/api/Booking/BookingProfile/${userID}`
  );
  const [currentRequest, setCurrentRequest] = useState();
  useEffect(() => {
    if (data) {
      setCurrentRequest(data[0]);
    }
  }, [data]);

  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselClass, setCarouselClass] = useState(``);
  
  const handleCarouselNextBtn = () => {
    if (currentIndex + 1 !== data.length)
    {
      setCarouselClass(
        `translateX(${-carouselRef.current.clientWidth * (currentIndex + 1)}px)`
      );
      setCurrentIndex((prevState) => ++prevState);
    }

  };
  const handleCarouselPrevBtn = () => {
    if (currentIndex !== 0) {
      setCarouselClass(
        `translateX(${-carouselRef.current.clientWidth * (currentIndex - 1)}px)`
      );
      setCurrentIndex((prevState) => --prevState);
    }
  };

  const handleChangeRequest = (newInfo) => {
    setCurrentRequest(newInfo);
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
            {data?.map((request) => {
              return (
                <Request
                  key={request.bookingId}
                  request={request}
                  onRequestClick={handleChangeRequest}
                />
              );
            })}
          </div>
          <div
            className={classes.carousel_btn}
            id={classes.prevBtn}
            onClick={handleCarouselPrevBtn}
          >
            <img src="/assets/arrow.png" alt="Previous" />
          </div>
          <div className={classes.carousel_btn} onClick={handleCarouselNextBtn}>
            <img src="/assets/arrow.png" alt="Next" />
          </div>
        </div>
        <div className={classes.map}>
          <HotelMap apartment={currentRequest} />
        </div>
      </div>
    </section>
  );
}

export default Booking;
