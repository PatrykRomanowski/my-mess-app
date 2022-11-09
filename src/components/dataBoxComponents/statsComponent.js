import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import classes from "./statsComponent.module.css";

const StatsComponent = () => {
  const [itemCounter, setItemCounter] = useState([{}]);
  let counterAllItems = 0;
  const myBoxes = useSelector((state) => state.itemsData.boxes);

  console.log(myBoxes.length);

  useEffect(() => {
    let newArrayForPlace = [{ boxPlace: "biuro", counter: 0 }];

    for (let i = 0; i < myBoxes.length; i++) {
      const itemNameIndex = newArrayForPlace.findIndex(
        (item) => item.boxPlace == myBoxes[i].boxPlace
      );
      let newCounter = 0;
      if (itemNameIndex == -1) {
        for (const key in myBoxes[i].items) {
          newCounter++;
        }
        newArrayForPlace.push({
          boxPlace: myBoxes[i].boxPlace,
          counter: newCounter,
        });
      } else {
        for (const key in myBoxes[i].items) {
          newCounter++;
        }
        const newValueCounter =
          newCounter + newArrayForPlace[itemNameIndex].counter;
        newArrayForPlace[itemNameIndex] = {
          boxPlace: newArrayForPlace[itemNameIndex].boxPlace,
          counter: newValueCounter,
        };
      }

      console.log(itemNameIndex);
      counterAllItems = counterAllItems + newCounter;
      console.log(counterAllItems);
      console.log(newArrayForPlace);
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
