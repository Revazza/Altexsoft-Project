import React from 'react';
import classes from './Search.module.css';
import SearchBar from './searchBar/SearchBar';

function Search() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.attributes}>
        <SearchBar />
      </div>
    </div>
  )
}

export default Search;