import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import NewItemInputComponent from "../components/dataBoxComponents/newItemInputComponent";

import classes from "./card.module.css";

import deleteButton from "../assets/icons/close.png";
import slideIcon from "../assets/icons/sliderIcon2.png";
import checkIcon from "../assets/icons/check.png";

import firebaseURL from "../consts/firebase";
import { dataItemsActions } from "../store/items-data-context";

const Card = (props) => {
  console.log(props.itemsOfBox);
  const boxId = props.id;

  const [showInputtoogle, setShowInputToogle] = useState(false);
  const [myItems, setMyItems] = useState([]);
  //   const myItemsArray = [];

  console.log(myItems);

  useEffect(() => {
    const myItemsArray = [];

    for (const key in props.itemsOfBox) {
      myItemsArray.push(props.itemsOfBox[key].nameItem);
      console.log(key);
      console.log(props.itemsOfBox[key].nameItem);
    }
    setMyItems(myItemsArray);
    console.log(myItems);
  }, []);

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.dataMess.userId);
  const boxCounter = useSelector((state) => state.itemsData.boxCounter);

  const sendItemURL =
    firebaseURL + "myUsers/" + userId + "/boxes/" + boxId + "/items.json";

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

  const boxItem = myItems.map((item) => {
    console.log(item);
    return <p className={classes.itemName}>{item}</p>;
  });

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
        <div className={classes.itemContainer}>{boxItem}</div>
        <div className={classes.newItemInputContainer}>
          <NewItemInputComponent
            url={sendItemURL}
            show={showInputtoogle}
            boxId={boxId}
          />

          <div className={classes.addItemButton} onClick={showInputHandler}>
            {showInputtoogle ? (
              <img className={classes.sliderIcon} src={slideIcon}></img>
            ) : (
              <div> add item</div>
            )}
          </div>
        </div>
      </div>

      <div className={classes.footer}>{props.place}</div>
    </div>
  );
};

export default Card;
