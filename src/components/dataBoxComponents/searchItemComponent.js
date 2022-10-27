import React, { useEffect, useState, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import classes from "./searchItemComponent.module.css";

const SearchItem = () => {
  const [myItems, setMyItems] = useState([]);
  const [enteredValue, setEnteredValue] = useState("");
  const [sortedArray, setSortedArray] = useState([]);
  const selectMyItems = useSelector((state) => state.itemsData.boxes);

  const itemList = sortedArray.map((item) => (
    <div className={classes.foundItem}>
      <div className={classes.nameOfFoundItem}>
        <p>{item.itemName}</p>
      </div>
      <div className={classes.placeOfFoundItem}></div>
      <div className={classes.boxNameOfFoundItem}></div>
    </div>
  ));

  const searchItemHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  useEffect(() => {
    const newArray = [];
    for (const key in selectMyItems) {
      console.log(selectMyItems[key].items);
      for (const item in selectMyItems[key].items) {
        // console.log(selectMyItems[key].items[item].nameItem);
        const newItem = {
          itemName: selectMyItems[key].items[item].nameItem,
          itemPlace: selectMyItems[key].boxPlace,
          itemBoxName: selectMyItems[key].boxName,
        };
        newArray.push(newItem);
      }
    }
    setMyItems(newArray);

    console.log(selectMyItems);
  }, []);

  useEffect(() => {
    console.log(enteredValue);
    const newArray = [];

    myItems.forEach((element) => {
      if (element.itemName.includes(enteredValue)) {
        const newSearchItem = {
          itemName: element.itemName,
          itemPlace: element.itemPlace,
          itemBoxName: element.itemBoxName,
        };
        newArray.push(newSearchItem);
      }

      setSortedArray(newArray);
      console.log(sortedArray);
    });

    // const sortedItems = myItems.filter((item) => item.includes("12"));

    // console.log(sortedItems);
  }, [enteredValue]);

  console.log(myItems);

  return (
    <div className={classes.searchItemContainer}>
      <div>Search item page</div>
      <div>
        Search your item
        <input onChange={searchItemHandler}></input>
      </div>
      <div className={classes.containerWithFoundItem}>{itemList}</div>
    </div>
  );
};

export default SearchItem;
