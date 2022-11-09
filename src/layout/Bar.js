import React from "react";

import classes from "./Bar.module.css";

const Bar = (props) => {
  console.log(props.counter);
  console.log(props.allItemsCounter);
  const width = props.counter;

  const widthBar = `${(width / props.allItemsCounter) * 100}%`;
  console.log(widthBar);

  return (
    <div className={classes.statusBarContainer}>
      <div className={classes.barName}>{props.place}: </div>
      <div className={classes.barContainer}>
        <div
          className={classes.barValue}
          style={{
            color: "red",
            backgroundColor: "black",
            width: `${widthBar}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Bar;
