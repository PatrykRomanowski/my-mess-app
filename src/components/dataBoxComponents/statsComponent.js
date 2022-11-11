import React, { useEffect, useState } from "react";

import Bar from "../../layout/Bar";

import { useSelector } from "react-redux";

import classes from "./statsComponent.module.css";

const StatsComponent = () => {
  const [itemsForStatsOfPlaces, setItemsforStatsOfPlaces] = useState([{}]);
  const [itemsForStatsOfBoxes, setItemsforStatsOfBoxes] = useState([{}]);

  const [counterAllItems, setCounterAllItems] = useState(0);
  // let counterAllItems = 0;
  const myBoxes = useSelector((state) => state.itemsData.boxes);

  console.log(myBoxes.length);

  useEffect(() => {
    let newArrayForPlace = [];
    let newArreyForBox = [];
    let AllItemCounter = 0;

    for (let i = 0; i < myBoxes.length; i++) {
      // searching box places

      let newCounterForBoxPlace = 0;
      let newCounterForBoxName = 0;

      const itemNameIndex = newArrayForPlace.findIndex(
        (item) => item.boxPlace == myBoxes[i].boxPlace
      );

      const boxNameIndex = newArreyForBox.findIndex(
        (item) => item.boxName == myBoxes[i].boxName
      );

      if (boxNameIndex == -1) {
        for (const key in myBoxes[i].items) {
          newCounterForBoxName++;
        }
        newArreyForBox.push({
          boxName: myBoxes[i].boxName,
          counter: newCounterForBoxName,
        });
      } else {
        for (const key in myBoxes[i].items) {
          newCounterForBoxName++;
        }
        const newValueCounter =
          newCounterForBoxName + newArreyForBox[boxNameIndex].counter;
        newArreyForBox[boxNameIndex] = {
          boxName: newArreyForBox[boxNameIndex].boxName,
          counter: newValueCounter,
        };
      }

      if (itemNameIndex == -1) {
        for (const key in myBoxes[i].items) {
          newCounterForBoxPlace++;
        }
        newArrayForPlace.push({
          boxPlace: myBoxes[i].boxPlace,
          counter: newCounterForBoxPlace,
        });
        AllItemCounter = AllItemCounter + newCounterForBoxPlace;
      } else {
        for (const key in myBoxes[i].items) {
          newCounterForBoxPlace++;
        }
        const newValueCounter =
          newCounterForBoxPlace + newArrayForPlace[itemNameIndex].counter;
        newArrayForPlace[itemNameIndex] = {
          boxPlace: newArrayForPlace[itemNameIndex].boxPlace,
          counter: newValueCounter,
        };
        AllItemCounter = AllItemCounter + newCounterForBoxPlace;
      }

      console.log(itemNameIndex);

      setItemsforStatsOfPlaces(newArrayForPlace);
      setItemsforStatsOfBoxes(newArreyForBox);
      setCounterAllItems(AllItemCounter);
    }
  }, []);

  console.log(itemsForStatsOfPlaces);
  console.log(itemsForStatsOfBoxes);

  const statsForPlaces = itemsForStatsOfPlaces.map((item) => (
    <Bar
      statsName={item.boxPlace}
      counter={item.counter}
      allItemsCounter={counterAllItems}
    />
  ));

  const statsForBoxName = itemsForStatsOfBoxes.map((item) => (
    <Bar
      statsName={item.boxName}
      counter={item.counter}
      allItemsCounter={counterAllItems}
    />
  ));

  return (
    <>
      <div className={classes.StatsComponentContainer}>
        <h2>Value for Places:</h2>
        <div className={classes.containerForPlacesStats}>{statsForPlaces}</div>
        <h2>Value for Items:</h2>
        <div className={classes.containerForPlacesStats}>{statsForBoxName}</div>
      </div>
    </>
  );
};

export default StatsComponent;
