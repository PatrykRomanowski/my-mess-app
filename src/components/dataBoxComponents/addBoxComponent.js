import React, { useRef } from "react";

import { useSelector } from "react-redux";

import firebaseURL from "../../consts/firebase";

import TextField from "@mui/material/TextField";

import classes from "./addBoxComponent.module.css";

const AddBoxComponent = () => {
  const boxNameInput = useRef();
  const userId = useSelector((state) => state.dataMess.userId);

  const textFieldStyle = {
    margin: 1,
    width: "100%",
    fontFamily: "arial",
    ["@media (min-width:1024px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "60%",
    },
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    console.log(userId);

    const enteredBoxName = boxNameInput.current.value;
    console.log(enteredBoxName);

    const getDataURL = firebaseURL + "myUsers/" + userId + ".json";
    const putURL = firebaseURL + "myUsers/" + userId + "/boxCounter.json";
    const postURL = firebaseURL + "myUsers/" + userId + "/boxes.json";
    console.log(postURL);

    const newData = await fetch(getDataURL)
      .then(async (response) => {
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
      })
      .then(async (responseData) => {
        const newBoxesCounter = responseData.boxCounter.boxCounter + 1;

        const sendNewCounter = await fetch(putURL, {
          method: "PUT",
          body: JSON.stringify({
            boxCounter: newBoxesCounter,
          }),
        });

        const sendNewBox = await fetch(postURL, {
          method: "POST",
          body: JSON.stringify({
            box: enteredBoxName,
          }),
        });
      });
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
