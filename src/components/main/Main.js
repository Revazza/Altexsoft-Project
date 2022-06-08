import React from 'react';
import classes from './Main.module.css';
import PopularHotels from './popularHotels/PopularHotels';
import Search from './search/Search';

function Main() {
  return (
    <main className={classes.main_wrapper}>
      <section className={classes.search_section}>
        <Search />
      </section>
      <section className={classes.hotels_section}>
        <PopularHotels />
      </section>  
    </main>
  )
}

export default Main;