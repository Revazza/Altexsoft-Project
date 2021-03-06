import React, { useState, useRef, useEffect } from "react";
import classes from "./Booking.module.css";
import jwt from "jwt-decode";
import Request from "./Request";
import { HotelMap, getCookie, Error, useHttp } from "./imports";
function Booking() {
  const userID = jwt(getCookie("token")).UserId;
  const { isLoading, error, sendRequest } = useHttp();
  const [currentRequest, setCurrentRequest] = useState();
  const [bookings, setBookings] = useState();
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselClass, setCarouselClass] = useState(``);
  useEffect(() => {
    const fetchData = async () => {
      const response = await sendRequest(
        `https://localhost:7043/api/Booking/BookingProfile/${userID}`
      );
      setBookings(response.data);
      setCurrentRequest(response.data[0]);
    };
    fetchData();
  }, []);


  const handleRequestDelete = (bookingId) => {
    const filteredBookings = bookings.filter((booking, index) => {
      if (booking.bookingId === bookingId) {
        if(bookings.length === 1)
          setCurrentRequest(bookings[0])
        else
          setCurrentRequest(bookings[index - 1]);
      }
      return booking.bookingId !== bookingId;
    });
    setBookings(filteredBookings);
  };

  const handleChangeRequest = (newInfo) => {
    setCurrentRequest(newInfo);
  };

  const handleCarouselNextBtn = () => {
    if (currentIndex + 1 !== bookings.length) {
      setCarouselClass(
        `translateX(${-carouselRef.current.clientWidth * (currentIndex + 1)}px)`
      );
      setCurrentIndex((prevState) => ++prevState);
      setCurrentRequest(bookings[currentIndex + 1]);
    }
  };
  const handleCarouselPrevBtn = () => {
    if (currentIndex !== 0) {
      setCarouselClass(
        `translateX(${-carouselRef.current.clientWidth * (currentIndex - 1)}px)`
      );
      setCurrentIndex((prevState) => --prevState);
      setCurrentRequest(bookings[currentIndex - 1]);
    }
  };

  const hasError = !isLoading && error;
  const canDisplayBookings = !error && bookings?.length !== 0;
  return (
    <section className={classes.wrapper}>
      <h2>My Bookings</h2>
      {hasError && <Error className={classes.error} />}
      {bookings?.length === 0 && (
        <div className={classes.no_bookings_found}>
          <div className={classes.user_msg}>
            <label>No Bookings Found</label>
            <img src="./assets/sad.png" />
          </div>
        </div>
      )}
      {canDisplayBookings && (
        <div className={classes.request_wrapper}>
          <div className={classes.requests}>
            <div className={classes.carousel}>
              <div
                className={classes.carousel_items}
                ref={carouselRef}
                style={{ transform: carouselClass }}
              >
                {bookings?.map((request, index) => {
                  return (
                    <Request
                      key={request.bookingId}
                      request={request}
                      onRequestClick={handleChangeRequest}
                      onDeleteRequest={handleRequestDelete}
                      className={
                        request.bookingId === currentRequest?.bookingId &&
                        classes.active
                      }
                      id={index === 0 ? classes.firstChild : ""}
                    />
                  );
                })}
              </div>
            </div>
            <div
              className={classes.carousel_btn}
              id={classes.prevBtn}
              onClick={handleCarouselPrevBtn}
            >
              <img src="/assets/arrow.png" alt="Previous" />
            </div>
            <div
              className={classes.carousel_btn}
              onClick={handleCarouselNextBtn}
            >
              <img src="/assets/arrow.png" alt="Next" />
            </div>
          </div>
          <div className={classes.map}>
            <HotelMap apartment={currentRequest} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Booking;
