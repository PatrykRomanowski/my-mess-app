import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import classes from "./statsComponent.module.css";

const StatsComponent = () => {
  const [itemCounter, setItemCounter] = useState([{ boxPlace: "biuro" }]);
  let counterAllItems = 0;
  const myBoxes = useSelector((state) => state.itemsData.boxes);

  console.log(myBoxes.length);

  useEffect(() => {
    for (let i = 0; i < myBoxes.length; i++) {
      const itemNameIndex = itemCounter.findIndex(
        (item) => item.boxPlace == myBoxes[i].boxPlace
      );
      let newCounter = 0;
      if (itemNameIndex == -1) {
        for (const key in myBoxes[i].items) {
          newCounter++;
        }
      } else {
        for (const key in myBoxes[i].items) {
          newCounter++;
        }
      }
      console.log(itemNameIndex);
      counterAllItems = counterAllItems + newCounter;
      console.log(counterAllItems);
    }
  }, []);

  myBoxes.forEach((item) => {});
  console.log(myBoxes);
  return (
    <div>
      <div className={classes.StatsComponentContainer}>XD</div>
    </div>
  );
};

export default StatsComponent;
