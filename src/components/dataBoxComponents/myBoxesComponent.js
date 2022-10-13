import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import classes from "./myBoxesComponent.module.css";

const MyBoxesComponent = () => {
  const numberOfBoxes = useSelector((state) => state.itemsData.numberOfBoxes);

  return (
    <div className={classes.boxesContainer}>
      <div className={classes.boxes}>{numberOfBoxes}</div>
      <div className={classes.boxes}>XD</div>
      <div className={classes.boxes}>XD</div>
      <div className={classes.boxes}>XD</div>
      <div className={classes.boxes}>XD</div>
      <div className={classes.boxes}>XD</div>
      <div className={classes.boxes}>XD</div>
    </div>
  );
};

export default MyBoxesComponent;
