import React, { useRef, useState } from "react";
import classes from "./GuestsLayout.module.css";
import Item from "./Item";
import Pagination from "../../UI/pagination/Pagination";
import useFetch from "../../hooks/useFetch";

const dummy_arr = [
  <Item key={1} />,
  <Item key={2} />,
  <Item key={3} />,
  <Item key={4} />,
  <Item key={5} />,
  <Item key={6} />,
  <Item key={7} />,
  <Item key={8} />,
  <Item key={9} />,
  <Item key={10} />,
  <Item key={11} />,
  <Item key={12} />,
];

function GuestsLayout() {
  const { error, isLoading, data } = useFetch("");
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
  const slicedArr = dummy_arr.slice(indexOfFirstGuest, indexOfLastGuest);
  return (
    <section className={classes.wrapper}>
      <h2>Guests</h2>
      <div ref={topPosition}></div>
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
