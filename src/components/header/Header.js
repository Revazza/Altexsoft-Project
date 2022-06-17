import React, { useState } from "react";
import classes from "./Header.module.css";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authSliceActions } from "../../store/authSlice";

function Header() {
  const [showDropDown, setShowDropDown] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const toggleDropDown = () => {
    setShowDropDown((prevState) => !prevState);
  };
  const handleSignOut = () =>{
    dispatch(authSliceActions.logout());
  }

  return (
    <header className={classes.wrapper}>
      <div className={classes.content_wrapper}>
        <div className={classes.logo}>
          <h1>
            Travel<span style={{ color: "#18A0FB" }}>M</span>ore
          </h1>
        </div>
        {isLoggedIn && (
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
                      <Link to="/my-guests">My Guests</Link>
                    </li>
                    <li>
                      <Link to="/myHotels">My Hotels</Link>
                    </li>
                    <li onClick={handleSignOut}>
                      <Link to="/auth/login">Sign Out</Link>
                    </li>
                  </ul>
                </div>
              )}
              <div className={classes.profile_img}>
                <img src="./assets/user.png" alt="Profile" />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
