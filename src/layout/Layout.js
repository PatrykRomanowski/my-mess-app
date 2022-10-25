import { useState } from "react";
import Header from "../components/header";
import StartComponent from "../components/startComponent";
import UserProfile from "../components/userProfile";

import { useDispatch, useSelector } from "react-redux";

import { authAction } from "../store/auth-context";

import classes from "./layout.module.css";

const Layout = (props) => {
  const [getStart, setGetStart] = useState(false);
  const isAuth = useSelector((state) => state.auth.auth);

  const dispatch = useDispatch();

  const startAppHandler = () => {
    // dispatch(authAction.checkLogin(localStorage.getItem("token")));

    setGetStart(!getStart);
  };

  return (
    <>
      {!getStart && <StartComponent startAppHandler={startAppHandler} />}
      {getStart && <Header />}
      <div className={classes.dataContainer}>
        {isAuth && <UserProfile />}
        {getStart && <main className={classes.main}>{props.children}</main>}
      </div>
    </>
  );
};

export default Layout;
