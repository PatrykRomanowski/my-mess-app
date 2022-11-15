import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch, ReactReduxContext } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group/";

import classes from "./cardOfdeleteItem.module.css";

import deleteIcon from "../assets/icons/delete.png";

import firebaseURL from "../consts/firebase";

import { dataItemsActions } from "../store/items-data-context";

const CardOfDeleteItem = (props) => {
  const userId = useSelector((state) => state.dataMess.userId);
  const myBoxes = useSelector((state) => state.itemsData.boxes);

  const nodeRef = useRef(null);

  const dispatch = useDispatch();

  const [items, setItems] = useState([{}]);
  const boxId = props.boxId;

  useEffect(() => {
    const myItemsArray = [];

    for (const key in props.items) {
      myItemsArray.push({
        name: props.items[key].nameItem,
        id: key,
      });
    }
    setItems(myItemsArray);
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
    return (
      <CSSTransition
        // in={item.id}
        timeout={300}
        mountOnEnter
        unmountOnExit
        // nodeRef={nodeRef}
        classNames={{
          enter: classes.myEnter,
          enterActive: classes.myActiveEnter,
          enterDone: classes.myDoneEnter,
          exit: classes.myExit,
          exitActive: classes.myActiveExit,
          exitDone: classes.myDoneExit,
        }}
      >
        <div ref={nodeRef} className={classes.itemToBeRemovedCard}>
          <div className={classes.itemNameForDelete}>{item.name}</div>
          <button
            onClick={(click) => deleteItemHandler(click, item.id)}
            className={classes.deleteItemButton}
          >
            usuń
            <img className={classes.deleteIcon} src={deleteIcon}></img>
          </button>
        </div>
      </CSSTransition>
    );
  });

  return (
    <div className={classes.itemsToBeRomovedContainer}>
      <TransitionGroup
        component="div"
        className={classes.itemsToBeRomovedContainer}
      >
        {itemsList}
      </TransitionGroup>
    </div>
  );
};

export default CardOfDeleteItem;
