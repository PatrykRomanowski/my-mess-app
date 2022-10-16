import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./card.module.css";

import deleteButton from "../assets/icons/close.png";

import firebaseURL from "../consts/firebase";
import { dataItemsActions } from "../store/items-data-context";

const Card = (props) => {
  const boxId = props.id;

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.dataMess.userId);
  const boxCounter = useSelector((state) => state.itemsData.boxCounter);

  const deleteBoxHandler = async () => {
    const putURL = firebaseURL + "myUsers/" + userId + "/boxCounter.json";
    const deleteURL =
      firebaseURL + "myUsers/" + userId + "/boxes/" + boxId + ".json";
    console.log(deleteURL);

    dispatch(dataItemsActions.deleteBox({ id: boxId }));

    const deleteBox = await fetch(deleteURL, { method: "DELETE" }).then(
      async () => {
        const sendNewCounter = await fetch(putURL, {
          method: "PUT",
          body: JSON.stringify({
            boxCounter: boxCounter - 1,
          }),
        });
      }
    );
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
      <div className={classes.footer}>{props.place}</div>
    </div>
  );
};

export default Card;
