import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./header.module.css";

import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/auth-context";
import { userDataMessAction } from "../store/mess-data-context";

import firebaseURL from "../consts/firebase";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.auth);
  const userName = useSelector((state) => state.dataMess.userName);
  const userId = useSelector((state) => state.dataMess.userId);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userId !== null) {
      const userURL = firebaseURL + "myUsers/" + userId + ".json";

      const fetchName = async () => {
        const response = await fetch(userURL);
        const responseData = await response.json();
        dispatch(userDataMessAction.addUserName({ name: responseData.name }));
        console.log(responseData);
      };
      fetchName();
    }
  }, [userId]);

  console.log(userName);

  const loginHandler = () => {
    // dispatch(authAction.login());
  };

  const logoutHandler = () => {
    dispatch(authAction.logout());
    dispatch(userDataMessAction.logoutHandler());
  };

  return (
    <>
      <div className={classes.headerContainer}>
        <p className={classes.paragraph}>My mess App</p>
        {userName !== null && (
          <div className={classes.welcomeName}>
            <p className={classes.userWalcome}>Hi, </p>
            <p className={classes.userName}>{userName}</p>
          </div>
        )}

        {isAuth && (
          <Link to="/userProfile">
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
