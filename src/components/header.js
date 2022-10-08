import React from "react";
import { Link } from "react-router-dom";

import classes from "./header.module.css";

import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/auth-context";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.auth);
  const userName = useSelector((state) => state.dataMess.userName);
  const userId = useSelector((state) => state.dataMess.userId);

  const dispatch = useDispatch();

  console.log(userName);

  const loginHandler = () => {
    // dispatch(authAction.login());
  };

  const logoutHandler = () => {
    dispatch(authAction.logout());
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <p className={classes.paragraph}>My mess App</p>
        <p>{userId}</p>
        <p className={classes.userWalcome}>Hi, </p>
        {isAuth && (
          <Link to="/myProfile">
            <button>My Profile</button>
          </Link>
        )}
        {!isAuth ? (
          <Link to="/loginPage">
            <button onClick={loginHandler}> Login </button>
          </Link>
        ) : (
          <button onClick={logoutHandler}>Logout</button>
        )}
      </div>
    </>
  );
};

export default Header;
