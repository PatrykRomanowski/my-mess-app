import React from "react";

import classes from "./Bar.module.css";

const Bar = (props) => {
  console.log(props.counter);
  console.log(props.place);
  console.log(props.allItemsCounter);

  return (
    <div className={classes.barContainer}>
      <div
        className={classes.barValue}
        style={{
          color: "red",
          backgroundColor: "black",
          width: "90%",
        }}
      ></div>
    </div>
  );
};

export default Bar;
