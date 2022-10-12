import React, { useRef } from "react";

import firebaseURL from "../../consts/firebase";

import TextField from "@mui/material/TextField";

import classes from "./addBoxComponent.module.css";

const AddBoxComponent = () => {
  const boxNameInput = useRef();

  const textFieldStyle = { margin: 1, width: "40%", fontFamily: "arial" };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredBoxName = boxNameInput.current.value;
    console.log(enteredBoxName);
    boxNameInput.current.value = "";
  };

  return (
    <div className={classes.addBoxContainer}>
      <form onSubmit={onSubmitHandler}>
        <TextField
          id="outlined-basic"
          label="box name"
          variant="outlined"
          size="normal"
          sx={textFieldStyle}
          inputRef={boxNameInput}
        ></TextField>
        <button className={classes.formButton}>add box</button>
      </form>
    </div>
  );
};

export default AddBoxComponent;
