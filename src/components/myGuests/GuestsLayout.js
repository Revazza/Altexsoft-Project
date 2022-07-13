import React, { useCallback, useEffect, useRef, useState } from "react";
import classes from "./GuestsLayout.module.css";
import jwt from "jwt-decode";
import {
  getCookie,
  Error,
  Loading,
  Item,
  Pagination,
  useHttp,
} from "./imports";


function GuestsLayout() {
  const userID = jwt(getCookie("token")).UserId;
  const [guests, setGuests] = useState();
  const { isLoading, error, sendRequest } = useHttp();
  const [someChanges, setSomeChanges] = useState(0);
  useEffect(() => {
    const fetchNewData = async () => {
      const response = await sendRequest(
        `https://localhost:7043/api/Booking/GuestProfile/${userID}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        }
      );
      setGuests(response.data);
    };
    fetchNewData();
  }, [someChanges,sendRequest,userID]);

  const handleSomeChange = () => {
    setSomeChanges((prevState) => ++prevState);
  };

  const guestsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const topPosition = useRef();
  const handlePageChange = useCallback((newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  },[]);
  const indexOfLastGuest = guestsPerPage * currentPage;
  const indexOfFirstGuest = indexOfLastGuest - guestsPerPage;
  const slicedArr = guests?.slice(indexOfFirstGuest, indexOfLastGuest);

  const hasError = !isLoading && error;
  return (
    <section className={classes.wrapper}>
      <h2>Guests</h2>
      {hasError && <Error className={classes.error} />}
      {isLoading && <Loading />}
      {guests?.length === 0 && (
        <div className={classes.no_request}>
          <div className={classes.user_msg}>
            <label>Inbox is empty</label>
            <img src="./assets/empty-box.png" alt='Empty Box'/>
          </div>
        </div>
      )}
      <div ref={topPosition}></div>
      {!hasError && (
        <React.Fragment>
          <div className={classes.guest_container}>
            {slicedArr?.map((guest) => (
              <Item
                key={guest.bookingId}
                guest={guest}
                onChangeStatus={handleSomeChange}
              />
            ))}
          </div>
          <Pagination
            onPageClick={handlePageChange}
            currentPage={currentPage}
            totalPageNumber={guests?.length}
            itemsPerPage={guestsPerPage}
          />
        </React.Fragment>
      )}
    </section>
  );
}

export default GuestsLayout;
