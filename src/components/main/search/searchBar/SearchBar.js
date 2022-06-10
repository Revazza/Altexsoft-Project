import React, { useEffect, useState } from "react";
import classes from "./SearchBar.module.css";
import Input from "../../../../UI/input/Input";

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
      ...props.searchState,
      search:event.target.value
    })
  };

 

  return (
    <div className={classes.search_bar}>
      <Input
        type="text"
        placeholder="Search hotels"
        className={classes.search_input}
        onChange={inputChangeHandler}
      />
      <div className={classes.suggestions}>
        {(searchInput.length !== 0) && (
          <ul>
            {suggestedHotels.length === 0 && <p className={classes.nothing_found}>Nothing found</p>}
            {suggestedHotels.map((hotel) => {
              return <li key={hotel.id} id={hotel.id}>{hotel.title}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
