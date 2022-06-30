import React, { useState } from "react";
import { DropDownList, Button, DateInput, Card, SearchBar } from "./imports";

import classes from "./Search.module.css";
import { useHistory } from "react-router-dom";

const dummy_cities = [
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
  {
    id: 4,
    value: 4,
  },
  {
    id: 5,
    value: 5,
  },
  {
    id: 6,
    value: 6,
  },
];

function Search() {
  const [searchAttributes, setSearchAttributes] = useState(null);
  const history = useHistory();
  const handleSubmission = (event) => {
    event.preventDefault();
    if (searchAttributes !== null) {
      history.push(`/result/${searchAttributes.address}`, {
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
      <Card className={classes.attributes}>
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
            items={dummy_cities}
            onChangeValue={handleSearchValuesChange}
          />
        </div>
        <div className={classes.search_btn}>
          <Button type="text" title="Search" onClick={handleSubmission} />
        </div>
      </Card>
    </form>
  );
}

export default Search;
