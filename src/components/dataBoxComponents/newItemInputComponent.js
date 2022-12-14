import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { dataItemsActions } from "../../store/items-data-context";

import TextField from "@mui/material/TextField";

import classes from "./newItemInputComponent.module.css";

import checkIcon from "../../assets/icons/check.png";

const NewItemInputComponent = (props) => {
  const myBoxes = useSelector((state) => state.itemsData.boxes);

  const itemInput = useRef();
  const dispatch = useDispatch();

  let transformClass = "";
  if (props.show) {
    transformClass = classes.inputOpen;
  } else {
    transformClass = classes.inputClose;
  }

  const textFieldStyle = { margin: 0.5, width: "85%", fontFamily: "arial" };

  const addItemHandler = async (event) => {
    event.preventDefault();
    const enteredItem = itemInput.current.value;
    // console.log(enteredItem);

    const sendNewBox = await fetch(props.url, {
      method: "POST",
      body: JSON.stringify({
        nameItem: enteredItem,
      }),
    }).then(async () => {
      const refreshData = await fetch(props.url);
      const responseData = await refreshData.json();

      console.log(responseData);

      // console.log(myBoxes);
      dispatch(
        dataItemsActions.addItem({ newData: responseData, boxId: props.boxId })
      );
      // console.log(myBoxes);
      props.refreshData();
    });

    itemInput.current.value = "";
  };

  return (
    <form
      onSubmit={addItemHandler}
      className={`${classes.newItemInput}
    ${transformClass}`}
    >
      <TextField
        id="outlined-basic"
        label={"nowy"}
        variant="outlined"
        size="small"
        sx={textFieldStyle}
        inputRef={itemInput}
      ></TextField>
      <img className={classes.checkIcon} src={checkIcon}></img>
    </form>
  );
};

export default NewItemInputComponent;
