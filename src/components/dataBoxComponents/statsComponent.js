import React, { useState } from "react";

import { useSelector } from "react-redux";

import classes from "./statsComponent.module.css";

const StatsComponent = () => {
  const [itemCounter, setItemCounter] = useState([{ boxPlace: "biuro" }]);
  let counter = 0;
  const myBoxes = useSelector((state) => state.itemsData.boxes);

  console.log(myBoxes.length);

  for (let i = 0; i < myBoxes.length; i++) {
    const itemNameIndex = itemCounter.findIndex(
      (item) => item.boxPlace == myBoxes[i].boxPlace
    );
    console.log(itemNameIndex);

    // if (itemNameIndex == NULL) {
    //   console.log("nie ma takiego miejsca");
    // } else {
    //   console.log("jest");
    // }
  }

  myBoxes.forEach((item) => {});
  console.log(myBoxes);
  return (
    <div>
      <div className={classes.StatsComponentContainer}>XD</div>
    </div>
  );
};

export default StatsComponent;
