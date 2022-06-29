import React, { useEffect } from "react";
import classes from "./Main.module.css";
import PopularHotels from "./popularHotels/PopularHotels";
import Search from "./search/Search";
import { Route } from "react-router-dom";
import Result from "./result/Result";

function Main() {
  return (
    <main className={classes.main_wrapper}>
      <Search />
      <Route exact path="/">
        <PopularHotels />
      </Route>
      <Route path="/result/:hotel">
        <Result />
      </Route>
    </main>
  );
}

export default Main;
