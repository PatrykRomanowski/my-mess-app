import React from "react";
import { Link } from "react-router-dom";

import classes from "./header.module.css";

import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/auth-context";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authAction.login());
  };

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
          <button onClick={loginHandler}> Login </button>
        </Link>
      </div>
    </>
  );
};

export default Header;
