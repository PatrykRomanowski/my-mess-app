import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import Card from "../../layout/Card";

import classes from "./myBoxesComponent.module.css";

const MyBoxesComponent = () => {
  const numberOfBoxes = useSelector((state) => state.itemsData.boxCounter);
  const myBoxes = useSelector((state) => state.itemsData.boxes);
  console.log(myBoxes);

  const MyBoxes = myBoxes.map((item) => (
    <Card
      id={item.id}
      place={item.boxPlace}
      name={item.boxName}
      itemsOfBox={item.items}
    />
  ));

  return <div className={classes.boxesContainer}>{MyBoxes}</div>;
};

export default MyBoxesComponent;
