import React from "react";

import classes from "./startComponent.module.css";

const StartComponent = (props) => {
  const startHandler = () => {
    props.startAppHandler();
  };
  return (
    <>
      <div className={classes.container}>
        <p className={classes.startText}>Your order is here...</p>
        <button className={classes.getStartButton} onClick={startHandler}>
          Get started
        </button>
      </div>
    </>
  );
};

export default StartComponent;
