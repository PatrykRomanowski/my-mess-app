import React, { useEffect, useState } from "react";

import Bar from "../../layout/Bar";

import { useSelector } from "react-redux";

import classes from "./statsComponent.module.css";

const StatsComponent = () => {
  const [itemsForStatsOfPlaces, setItemsforStatsOfPlaces] = useState([{}]);
  const [counterAllItems, setCounterAllItems] = useState(0);
  // let counterAllItems = 0;
  const myBoxes = useSelector((state) => state.itemsData.boxes);

  console.log(myBoxes.length);

  useEffect(() => {
    let newArrayForPlace = [{ boxPlace: "biuro", counter: 0 }];
    let newCounter = 0;

    for (let i = 0; i < myBoxes.length; i++) {
      const itemNameIndex = newArrayForPlace.findIndex(
        (item) => item.boxPlace == myBoxes[i].boxPlace
      );
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
      const newAllCounter = counterAllItems + newCounter;
      setCounterAllItems(newAllCounter);
      setItemsforStatsOfPlaces(newArrayForPlace);
      console.log(itemsForStatsOfPlaces);
    }
  }, []);

  const statsForPlaces = itemsForStatsOfPlaces.map((item) => (
    <Bar
      place={item.boxPlace}
      counter={item.counter}
      allItemsCounter={counterAllItems}
    />
  ));

  return (
    <>
      <div className={classes.StatsComponentContainer}>
        <h2>Value for Places:</h2>
        <div className={classes.containerForPlacesStats}>{statsForPlaces}</div>
      </div>
    </>
  );
};

export default StatsComponent;
