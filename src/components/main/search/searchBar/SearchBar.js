import React, { useEffect, useState } from "react";
import classes from "./SearchBar.module.css";
import { Input } from "../imports";
import { Link } from "react-router-dom";

const dummy_hotels = [
  {
    id: 0,
    title: "Sunrise",
  },
  {
    id: 1,
    title: "Sungo",
  },
  {
    id: 2,
    title: "Sunnigo",
  },
  {
    id: 3,
    title: "Sunnleft",
  },
];

function SearchBar(props) {
  const [suggestedHotels, setSuggestedHotels] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    let suggestedHotelsArr = dummy_hotels.filter((hotel) =>
      hotel.title.toLowerCase().includes(searchInput.toLocaleLowerCase())
    );
    setSuggestedHotels(suggestedHotelsArr);
  }, [searchInput]);

  const inputChangeHandler = (event) => {
    setSearchInput(event.target.value);
    props.onChangeValue({
      search: event.target.value,
    });
  };

  return (
    <div className={classes.search_bar}>
      <Input
        type="text"
        placeholder="Search hotels"
        value={searchInput}
        className={classes.search_input}
        onChange={inputChangeHandler}
      />
      <div className={classes.suggestions}>
        {searchInput.length !== 0 && (
          <ul>
            {suggestedHotels.length === 0 && (
              <p className={classes.nothing_found}>Nothing found</p>
            )}
            {suggestedHotels.map((hotel) => {
              const linkTo = `/result/${hotel.title}`;
              return (
                <li
                  key={hotel.id}
                  id={hotel.id}
                  onClick={() => setSearchInput("")}
                >
                  <Link to={linkTo}>{hotel.title}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
