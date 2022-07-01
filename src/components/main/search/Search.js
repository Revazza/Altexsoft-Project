import React, { useState } from "react";
import { DropDownList, Button, DateInput, Card, SearchBar,dummy_bed,dummy_cities } from "./imports";
import classes from "./Search.module.css";
import { useHistory } from "react-router-dom";


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
