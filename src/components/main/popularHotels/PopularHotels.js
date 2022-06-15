import React, { useEffect, useState } from "react";
import Item from "./Item";
import classes from "./PopularHotels.module.css";

const dummy_hotels = [
  {
    id: 0,
    title: "Sunny Hotel",
    bed: 2,
    distanceToCenter: 200,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    isAvailable: true,
  },
  {
    id: 1,
    title: "Mercury Hotel",
    bed: 3,
    distanceToCenter: 350,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
    isAvailable: false,
  },
  {
    id: 2,
    title: "Venus Hotel",
    bed: 5,
    distanceToCenter: 1250,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Earth Hotel",
    bed: 1,
    distanceToCenter: 350,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
    isAvailable: false,
  },
  {
    id: 4,
    title: "Mars Hotel",
    bed: 1,
    distanceToCenter: 2300,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typeset a galley of type and scrambled it to make a type specimen book",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Jupiter Hotel",
    bed: 4,
    distanceToCenter: 7594,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting a galley of type and scrambled it to make a type specimen book",
    isAvailable: false,
  },
  {
    id: 6,
    title: "Saturn Hotel",
    bed: 3,
    distanceToCenter: 120,
    description:
      "dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    isAvailable: true,
  },
  {
    id: 7,
    title: "Uranus Hotel",
    bed: 5,
    distanceToCenter: 470,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text ever since the 1500s, when an unknown printer ",
    isAvailable: false,
  },
  {
    id: 8,
    title: "Neptune Hotel",
    bed: 5,
    distanceToCenter: 720,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry's standard dummy text ever since the 1500s",
    isAvailable: true,
  },
];

function PopularHotels() {
  const [hotels, setHotel] = useState(dummy_hotels);

  useEffect(() => {
    let unavailableHotels = [];
    let availableHotels = hotels.filter((hotel) => {
      if (hotel.isAvailable) return hotel;
      else unavailableHotels.push(hotel);
      return;
    });

    const sortedHotels = [...availableHotels, ...unavailableHotels];
    setHotel(sortedHotels);
  }, []);

  return (
    <section className={classes.section_wrapper}>
      <h2>Popular Hotels</h2>
      <div className={classes.wrapper}>
        {hotels.map((hotel) => {
          return (
            <Item
              key={hotel.id}
              hotel={hotel}
            />
          );
        })}
      </div>
    </section>
  );
}

export default PopularHotels;
