import React, { useEffect, useState } from "react";
import classes from './SearchBar.module.css'
import Input from '../../../../UI/input/Input';

const dummy_hotels = [
  {
    id:0,
    title:'Sunrise',
  },
  {
    id:1,
    title:'Sungo',
  },
  {
    id:2,
    title:'Sunnigo',
  },
  {
    id:3,
    title:'Sunnleft',
  },
]

function SearchBar() {

  const [suggestedHotels,setSuggestedHotels] 
  = useState([]);
  
  const [input,setInput] = useState('');

  useEffect( () =>{
    let suggestedHotelsArr = dummy_hotels.filter((hotel) => hotel.title.toLowerCase().includes(input.toLocaleLowerCase()));

    setSuggestedHotels(suggestedHotelsArr);
    
  },[input]);

  const inputChangeHandler = (event) =>{
    setInput(event.target.value);
  }

  return (
    <div className={classes.search_bar}>
      <Input
        type="search"
        placeholder="Search hotels"
        className={classes.search_input}
        onChange={inputChangeHandler}
      />
      <div className={classes.suggestions}>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
