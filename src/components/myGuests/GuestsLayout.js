import React, { useState } from "react";
import classes from "./GuestsLayout.module.css";
import Item from "./Item";
import Pagination from "../../UI/pagination/Pagination";

const dummy_arr = [
  <Item />,
  <Item />,
  <Item />,
  <Item />,
  <Item />,
  <Item />,
  <Item />,
  <Item />,
  <Item />,
  <Item />,
  <Item />,
  <Item />,
];

function GuestsLayout() {
  const hotelsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const indexOfLastGuest = hotelsPerPage * currentPage;
  const indexOfFirstGuest = indexOfLastGuest - hotelsPerPage;
  const slicedArr = dummy_arr.slice(indexOfFirstGuest, indexOfLastGuest);
  return (
    <section className={classes.wrapper}>
      <h2>Guests</h2>
      <div className={classes.guest_container}>
        {slicedArr.map((item) => item)}
      </div>
      <Pagination
        onPageClick={handlePageChange}
        currentPage={currentPage}
        totalPageNumber={dummy_arr.length}
        hotelsPerPage={hotelsPerPage}
      />
    </section>
  );
}

export default GuestsLayout;
