import React, { useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import firebaseURL from "../../consts/firebase";

import { dataItemsActions } from "../../store/items-data-context";

import TextField from "@mui/material/TextField";
import Card from "../../layout/Card";

import classes from "./addBoxComponent.module.css";

const AddBoxComponent = () => {
  const boxNameInput = useRef();
  const boxPlaceInput = useRef();

  const dispatch = useDispatch();

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
    const enteredBoxPlace = boxPlaceInput.current.value;

    const getDataURL = firebaseURL + "myUsers/" + userId + ".json";
    const putURL = firebaseURL + "myUsers/" + userId + "/boxCounter.json";
    const postURL = firebaseURL + "myUsers/" + userId + "/boxes.json";
    const userURL = firebaseURL + "myUsers/" + userId + ".json";

    const newData = await fetch(getDataURL)
      .then(async (response) => {
        const responseData = await response.json();
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
            place: enteredBoxPlace,
          }),
        });
      })
      .then(async () => {
        const response = await fetch(userURL);
        const responseData = await response.json();

        const responseMyData = [];

        for (const key in responseData.boxes) {
          responseMyData.push({
            id: key,
            boxName: responseData.boxes[key].box,
            boxPlace: responseData.boxes[key].place,
            items: responseData.boxes[key].items,
          });
        }

        console.log(responseData);
        dispatch(
          dataItemsActions.initialState({
            boxes: responseMyData,
            boxesCounter: responseData.boxCounter.boxCounter,
          })
        );
        // };
      });
    boxNameInput.current.value = "";
    boxPlaceInput.current.value = "";
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
        <TextField
          id="outlined-basic"
          label="box place"
          variant="outlined"
          size="normal"
          sx={textFieldStyle}
          inputRef={boxPlaceInput}
        ></TextField>
        <button className={classes.formButton}>add box</button>
      </form>
    </div>
  );
};

export default AddBoxComponent;
