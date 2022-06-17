import React, { useEffect, useState } from "react";
import classes from "./Result.module.css";
import Item from "../popularHotels/Item";
import Pagination from "../../../UI/pagination/Pagination";

const hotel = {
  title: "my hotel",
  distanceToCenter: "300",
  description:
    "asdsadsasadsasasadsasadsadasdsadsasadsasasadsasadsadsaadsadasadsadasdasasdsadsasadsasasadsasadsadsaadsadasadsadasdasasdsadsasadsasasadsasadsadsaadsadasadsadasdasas",
  bed: "3",
  isAvailable: true,
  id: 2,
};

const arr = [
  <Item key={1} hotel={hotel} />,
  <Item key={2} hotel={hotel} />,
  <Item key={3} hotel={hotel} />,
  <Item key={4} hotel={hotel} />,
  <Item key={5} hotel={hotel} />,
  <Item key={6} hotel={hotel} />,
  <Item key={7} hotel={hotel} />,
  <Item key={8} hotel={hotel} />,
  <Item key={9} hotel={hotel} />,

];

function Result() {

  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 8;
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const slicedArr = arr.slice(indexOfFirstHotel, indexOfLastHotel);

  const setPage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className={classes.result_section}>
      <h2>Result</h2>
      <div className={classes.container}>{slicedArr.map((hotel) => hotel)}</div>
      <Pagination
        hotelsPerPage={hotelsPerPage}
        totalPageNumber={arr.length}
        onPageClick={setPage}
        currentPage={currentPage}
      />
    </section>
  );
}

export default Result;
