import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import classes from "./searchItemComponent.module.css";

const SearchItem = () => {
  const [myItems, setMyItems] = useState([]);
  const selectMyItems = useSelector((state) => state.itemsData.boxes);

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
  }, []);

  console.log(myItems);

  const itemList = myItems.map((item) => (
    <div className={classes.foundItem}>
      <div className={classes.nameOfFoundItem}>
        <p>{item.itemName}</p>
      </div>
      <div className={classes.placeOfFoundItem}></div>
      <div className={classes.boxNameOfFoundItem}></div>
    </div>
  ));

  console.log(selectMyItems);

  return (
    <div className={classes.searchItemContainer}>
      <div>Search item page</div>
      <div>
        Search your item
        <input></input>
      </div>
      <div className={classes.containerWithFoundItem}>{itemList}</div>
    </div>
  );
};

export default SearchItem;
