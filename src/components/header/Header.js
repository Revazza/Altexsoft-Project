import React, { useState } from "react";
import classes from "./Header.module.css";

import { Link } from "react-router-dom";

function Header() {
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDropDown = () => {
    setShowDropDown((prevState) => !prevState);
  };

  return (
    <header className={classes.wrapper}>
      <div className={classes.content_wrapper}>
        <div className={classes.logo}>
          <h1>
            Travel<span style={{ color: "#18A0FB" }}>M</span>ore
          </h1>
        </div>
        <nav className={classes.nav_wrapper}>
          <div className={classes.profile} onClick={toggleDropDown}>
            <div className={classes.hamburger_wrapper}>
              <img src="./assets/hamburger_menu.png" alt="More" />
            </div>
            {showDropDown && (
              <div className={classes.dropdown_list}>
                <ul className={classes.list_wrapper}>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/guests">My Guests</Link>
                  </li>
                  <li>
                    <Link to="/myHotels">My Hotels</Link>
                  </li>
                  <li>
                    <Link to="/auth">Sign Out</Link>
                  </li>
                </ul>
              </div>
            )}
            <div className={classes.profile_img}>
              <img src="./assets/user.png" alt="Profile" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
