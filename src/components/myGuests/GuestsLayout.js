import React, { useEffect, useRef, useState } from "react";
import classes from "./GuestsLayout.module.css";
import jwt from "jwt-decode";
import {
  getCookie,
  useFetch,
  Error,
  Loading,
  Item,
  Pagination,
  useHttp
} from "./imports";

function GuestsLayout() {
  const token = jwt(getCookie("token"));
  const { error, isLoading, data } = useFetch(
    `https://localhost:7043/api/Booking/GuestProfile/${token.UserId}`
  );
  const {sendRequest} = useHttp();
  const [someChanges,setSomeChanges] = useState(0);
  console.log(data);

  useEffect(()=>{
    // const fetchNewData = async () =>{
    //   console.log(token.UserId)
    //   const response = await sendRequest(`https://localhost:7043/api/Booking/GuestProfile/${token.UserId})`,{
    //     method:'GET',
    //     headers:{
    //       Accept:'application/json',
    //       "Content-type":'application/json'
    //     }
    //   });

    //   console.log(response);
    // }
    // fetchNewData();
  },[someChanges]);

  const handleSomeChange = () =>{
    setSomeChanges((prevState) => ++prevState);
  }

  const hotelsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const topPosition = useRef();
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  };
  const indexOfLastGuest = hotelsPerPage * currentPage;
  const indexOfFirstGuest = indexOfLastGuest - hotelsPerPage;
  const slicedArr = data?.slice(indexOfFirstGuest, indexOfLastGuest);

  const hasError = !isLoading && error;
  return (
    <section className={classes.wrapper}>
      <h2>Guests</h2>
      {hasError && <Error className={classes.error} />}
      {isLoading && <Loading />}
      {data?.length === 0 && (
        <div className={classes.no_request}>
          <div className={classes.user_msg}>
            <label>Inbox is empty</label>
            <img src="./assets/empty-box.png" />
          </div>
        </div>
      )}
      <div ref={topPosition}></div>
      {!hasError && (
        <React.Fragment>
          <div className={classes.guest_container}>
            {slicedArr?.map((guest) => (
              <Item key={guest.bookingId} guest={guest} />
            ))}
          </div>
          <Pagination
            onPageClick={handlePageChange}
            currentPage={currentPage}
            totalPageNumber={data?.length}
            hotelsPerPage={hotelsPerPage}
          />
        </React.Fragment>
      )}
    </section>
  );
}

export default GuestsLayout;
