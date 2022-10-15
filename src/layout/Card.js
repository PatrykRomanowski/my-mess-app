import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./card.module.css";

import deleteButton from "../assets/icons/close.png";

import firebaseURL from "../consts/firebase";
import { dataItemsActions } from "../store/items-data-context";

const Card = (props) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.dataMess.userId);
  // const boxCounter = useSelector((state) => state.itemsData.boxCounter);

  const deleteBoxHandler = () => {
    const putURL = firebaseURL + "myUsers/" + userId + "/boxCounter.json";
    const deleteURL = firebaseURL + "myUsers/" + userId + "/boxes.json";
    console.log("XD");

    dispatch(dataItemsActions.deleteBox());
  };

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <p className={classes.boxNameParagraph}> {props.name}</p>

        <img
          onClick={deleteBoxHandler}
          className={classes.deleteButton}
          src={deleteButton}
        ></img>
      </div>
      <div className={classes.footer}>footer</div>
    </div>
  );
};

export default Card;
