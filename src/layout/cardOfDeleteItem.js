import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./cardOfdeleteItem.module.css";

import deleteIcon from "../assets/icons/delete.png";

import firebaseURL from "../consts/firebase";

import { dataItemsActions } from "../store/items-data-context";

const CardOfDeleteItem = (props) => {
  const userId = useSelector((state) => state.dataMess.userId);
  const myBoxes = useSelector((state) => state.itemsData.boxes);

  const dispatch = useDispatch();

  const [items, setItems] = useState([{}]);
  const boxId = props.boxId;

  useEffect(() => {
    const myItemsArray = [];

    for (const key in props.items) {
      myItemsArray.push({ name: props.items[key].nameItem, id: key });
    }
    setItems(myItemsArray);
    console.log(myItemsArray);
    // console.log(myItems);
  }, [myBoxes]);

  const deleteItemHandler = async (click, itemId) => {
    const deleteURL =
      firebaseURL +
      "myUsers/" +
      userId +
      "/boxes/" +
      boxId +
      "/items/" +
      itemId +
      ".json";

    const deleteBox = await fetch(deleteURL, { method: "DELETE" });
    // dispatch(dataItemsActions.deleteItem({ boxId, itemId }));
    props.deleteItemHandler({ boxId, itemId });
  };

  const itemsList = items.map((item) => {
    console.log(item.name);
    return (
      <div className={classes.itemToBeRemovedCard}>
        <div className={classes.itemNameForDelete}>{item.name}</div>
        <button
          onClick={(click) => deleteItemHandler(click, item.id)}
          className={classes.deleteItemButton}
        >
          usuń
          <img className={classes.deleteIcon} src={deleteIcon}></img>
        </button>
      </div>
    );
  });

  return <div className={classes.itemsToBeRomovedContainer}>{itemsList}</div>;
};

export default CardOfDeleteItem;
