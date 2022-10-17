import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import NewItemInputComponent from "../components/dataBoxComponents/newItemInputComponent";

import classes from "./card.module.css";

import deleteButton from "../assets/icons/close.png";
import slideIcon from "../assets/icons/sliderIcon2.png";
import checkIcon from "../assets/icons/check.png";

import firebaseURL from "../consts/firebase";
import { dataItemsActions } from "../store/items-data-context";

const Card = (props) => {
  const boxId = props.id;

  const [showInputtoogle, setShowInputToogle] = useState(false);

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.dataMess.userId);
  const boxCounter = useSelector((state) => state.itemsData.boxCounter);

  let transformClass = "";
  if (showInputtoogle) {
    transformClass = classes.inputOpen;
  } else {
    transformClass = classes.inputClose;
  }

  const showInputHandler = () => {
    setShowInputToogle(!showInputtoogle);
  };

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
      <div className={classes.addItemBody}>
        <div className={classes.newItemInputContainer}>
          {/* {showInputtoogle && <NewItemInputComponent show={showInputtoogle} />} */}
          {/* <div className={classes.xxx}> */}
          <div
            className={`${classes.newItemInput}
    ${transformClass}`}
          >
            <NewItemInputComponent show={showInputtoogle} />
            <img className={classes.checkIcon} src={checkIcon}></img>
          </div>

          {/* </div> */}
          <div className={classes.addItemButton} onClick={showInputHandler}>
            {showInputtoogle ? (
              <img className={classes.sliderIcon} src={slideIcon}></img>
            ) : (
              "add item"
            )}
          </div>
        </div>
      </div>

      <div className={classes.footer}>{props.place}</div>
    </div>
  );
};

export default Card;
