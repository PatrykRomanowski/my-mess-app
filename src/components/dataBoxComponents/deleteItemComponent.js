import React, { useEffect } from "react";

import classes from "./deleteItemComponent.module.css";

import { useSelector, useDispatch } from "react-redux";

import { dataItemsActions } from "../../store/items-data-context";

import CardOfDeleteItem from "../../layout/cardOfDeleteItem";

import firebaseURL from "../../consts/firebase";

const DeleteItem = () => {
  const myBoxes = useSelector((state) => state.itemsData.boxes);
  const userId = useSelector((state) => state.dataMess.userId);

  const dispatch = useDispatch();

  const deleteItemHandler = async (props) => {
    console.log("działa na klik");
    console.log(props.itemId);
    console.log(props.boxId);
    console.log(myBoxes);

    const URL =
      firebaseURL +
      "myUsers/" +
      userId +
      "/boxes/" +
      props.boxId +
      "/items.json";

    const refreshData = await fetch(URL);
    const responseData = await refreshData.json();

    console.log(responseData);
    dispatch(
      dataItemsActions.deleteItem({
        newData: responseData,
        boxId: props.boxId,
      })
    );
  };

  console.log(myBoxes);

  const showItemsForDelete = myBoxes.map((item) => (
    <div className={classes.itemContainer}>
      <div className={classes.boxName}>{item.boxName}</div>
      <CardOfDeleteItem
        items={item.items}
        boxId={item.id}
        deleteItemHandler={deleteItemHandler}
      />
    </div>
  ));

  return (
    <div>
      {showItemsForDelete}

      <p>Delete page</p>
    </div>
  );
};

export default DeleteItem;
