import React, { useEffect, useState, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import classes from "./searchItemComponent.module.css";

import TextField from "@mui/material/TextField";

const SearchItem = () => {
  const [myItems, setMyItems] = useState([]);
  const [enteredValue, setEnteredValue] = useState("");
  const [sortedArray, setSortedArray] = useState([]);
  const selectMyItems = useSelector((state) => state.itemsData.boxes);

  const loginInput = useRef();

  const itemList = sortedArray.map((item) => (
    <div className={classes.foundItem}>
      <div className={classes.nameOfFoundItem}>
        <p className={classes.descriptionItem}>name item:</p>
        <p>{item.itemName}</p>
      </div>
      <div className={classes.placeOfFoundItem}>
        <p className={classes.descriptionItem}>place:</p>
        <p>{item.itemPlace}</p>
      </div>
      <div className={classes.boxNameOfFoundItem}>
        <p className={classes.descriptionItem}>box name:</p>
        <p>{item.itemBoxName}</p>
      </div>
    </div>
  ));

  const searchItemHandler = (event) => {
    // setEnteredValue(event.target.value);
    const enteredSearchItem = loginInput.current.value;
    setEnteredValue(enteredSearchItem);
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
  const textFieldStyle = {
    margin: 1,
    width: "80%",
    fontFamily: "arial",
    marginTop: "3rem",
  };

  return (
    <div className={classes.searchItemContainer}>
      <form onChange={searchItemHandler}>
        <TextField
          id="outlined-basic"
          label={"Search your item"}
          variant="outlined"
          size="normal"
          sx={textFieldStyle}
          inputRef={loginInput}
        ></TextField>
        {/* <input onChange={searchItemHandler}></input> */}
      </form>
      <div className={classes.containerWithFoundItem}>{itemList}</div>
    </div>
  );
};

export default SearchItem;
