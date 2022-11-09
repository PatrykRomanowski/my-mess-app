import React from "react";

import classes from "./Bar.module.css";

const Bar = () => {
  return (
    <div className={classes.barContainer}>
      <div
        className={classes.barValue}
        style={{
          color: "red",
          width: "90%",
          height: "100%",
          backgroundColor: "black",
        }}
      ></div>
    </div>
  );
};

export default Bar;
