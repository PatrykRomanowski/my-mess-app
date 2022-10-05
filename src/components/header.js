import React from "react";
import { Link } from "react-router-dom";

import classes from "./header.module.css";

import { useSelector } from "react-redux";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.auth);

  return (
    <>
      <div className={classes.headerContainer}>
        <p className={classes.paragraph}>My mess App</p>
        {isAuth && (
          <Link to="/myProfile">
            <button>My Profile</button>
          </Link>
        )}
        <Link to="/loginPage">
          <button> Login </button>
        </Link>
      </div>
    </>
  );
};

export default Header;
