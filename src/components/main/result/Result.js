import React, { useEffect, useState } from "react";
import classes from "./Result.module.css";
import Item from "../popularHotels/Item";
import Pagination from "../../../UI/pagination/Pagination";
import { useLocation } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";

function Result() {
  const location = useLocation();
  const { sendRequest } = useHttp();
  const [apartments,setApartments] = useState();
  console.log("Apartments: ",apartments);
  useEffect(() => {
    const fetchData = async (state) => {
      const requestBody = {
        address: state.search,
        bedNumber: state.bed,
        startDate: state.date.startDate,
        endDate: state.date.endDate,
        city: state.city,
      };
      const response = await sendRequest(`https://localhost:7043/api/search`, {
        method: "POST",
        body: JSON.stringify(requestBody),
      });
      if(!response.errorMsg)
      {
        setApartments(response.data)
      }  
      // console.log("Response: ", response);
      // console.log(state);
    };

    fetchData(location.state.state);
  }, [location.state.state]);

  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 8;
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const slicedArr = apartments?.slice(indexOfFirstHotel, indexOfLastHotel);

  const setPage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className={classes.result_section}>
      <h2>Result</h2>
      <div className={classes.container}>
        {slicedArr?.map((apartment) =>{
          return <Item key={apartment.apartmentId} hotel = {apartment}/>
        })}
      </div>
      <Pagination
        hotelsPerPage={hotelsPerPage}
        totalPageNumber={apartments?.length}
        onPageClick={setPage}
        currentPage={currentPage}
      />
    </section>
  );
}

export default Result;
