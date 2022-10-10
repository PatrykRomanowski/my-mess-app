import { useState } from "react";
import Header from "../components/header";
import StartComponent from "../components/startComponent";
import UserProfile from "../components/userProfile";

import { useDispatch, useSelector } from "react-redux";

import { authAction } from "../store/auth-context";

const Layout = (props) => {
  const [getStart, setGetStart] = useState(false);
  const isAuth = useSelector((state) => state.auth.auth);

  const dispatch = useDispatch();

  const startAppHandler = () => {
    console.log("click!!!!");
    dispatch(authAction.checkLogin(localStorage.getItem("token")));

    setGetStart(!getStart);
  };

  return (
    <>
      {!getStart && <StartComponent startAppHandler={startAppHandler} />}
      {getStart && <Header />}
      {isAuth && <UserProfile />}

      {getStart && <main>{props.children}</main>}
    </>
  );
};

export default Layout;
