import React from "react";

import classes from "./startComponent.module.css";

const StartComponent = (props) => {
  const startHandler = () => {
    props.startAppHandler();
  };
  return (
    <>
      <p>Start</p>
      <button className={classes.getStartButton} onClick={startHandler}>
        Get started
      </button>
    </>
  );
};

export default StartComponent;
