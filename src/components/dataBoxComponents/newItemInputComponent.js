import React, { useRef } from "react";

import TextField from "@mui/material/TextField";

import classes from "./newItemInputComponent.module.css";

import checkIcon from "../../assets/icons/check.png";

const NewItemInputComponent = (props) => {
  const refItem = useRef();

  let transformClass = "";
  if (props.show) {
    transformClass = classes.inputOpen;
  } else {
    transformClass = classes.inputClose;
  }

  const textFieldStyle = { margin: 0.5, width: "85%", fontFamily: "arial" };

  const addItemHandler = async (event) => {
    event.preventDefault();
    const enteredItem = refItem.current.value;
    console.log(enteredItem);

    const sendNewBox = await fetch(props.url, {
      method: "POST",
      body: JSON.stringify({
        nameItem: enteredItem,
      }),
    });

    refItem.current.value = "";
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
        inputRef={refItem}
      ></TextField>
      <img className={classes.checkIcon} src={checkIcon}></img>
    </form>
  );
};

export default NewItemInputComponent;
