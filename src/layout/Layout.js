import { useState } from "react";
import Header from "../components/header";
import StartComponent from "../components/startComponent";

const Layout = (props) => {
  const [getStart, setGetStart] = useState(false);

  const startAppHandler = () => {
    console.log("click!!!!");

    setGetStart(!getStart);
  };

  return (
    <>
      {!getStart && <StartComponent startAppHandler={startAppHandler} />}
      {getStart && <Header />}
      {getStart && <main>{props.children}</main>}
    </>
  );
};

export default Layout;
