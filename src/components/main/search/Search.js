import React, { useState } from "react";
import DropDownList from "../../../UI/dropdownList/DropDownList";
import DateInput from "./date/DateInput";
import classes from "./Search.module.css";
import SearchBar from "./searchBar/SearchBar";
import Button from "../../../UI/Button";
import { useHistory } from "react-router-dom";

const dummy_countries = [
  {
    id: 0,
    value: "Tbilisi",
  },
  {
    id: 1,
    value: "Batumi",
  },
  {
    id: 2,
    value: "Svaneti",
  },
  {
    id: 3,
    value: "Racha",
  },
];
const dummy_bed = [
  {
    id: 0,
    value: 0,
  },
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 2,
  },
  {
    id: 3,
    value: 3,
  },
];

function Search() {
  const [searchAttributes, setSearchAttributes] = useState(null);
  const history = useHistory();
  const handleSubmission = (event) => {
    event.preventDefault();
    if (searchAttributes !== null) {
      history.push(`/result/${searchAttributes.search}`, {
        state: searchAttributes,
      });
    }
  };

  const handleSearchValuesChange = (inputObj) => {
    setSearchAttributes((prevState) => {
      return { ...prevState, ...inputObj };
    });
  };

  return (
    <form className={classes.wrapper}>
      <div className={classes.attributes}>
        <SearchBar onChangeValue={handleSearchValuesChange} />
        <DateInput onChangeValue={handleSearchValuesChange} />
        <div className={classes.bed_filter}>
          <DropDownList
            name="Bed"
            alignCenter={true}
            items={dummy_bed}
            onChangeValue={handleSearchValuesChange}
          />
        </div>
        <div className={classes.city_filter}>
          <DropDownList
            name="City"
            items={dummy_countries}
            onChangeValue={handleSearchValuesChange}
          />
        </div>
        <div className={classes.search_btn}>
          <Button type="text" title="Search" onClick={handleSubmission} />
        </div>
      </div>
    </form>
  );
}

export default Search;
