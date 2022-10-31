import React from "react";

import classes from "./deleteItemComponent.module.css";

import { useSelector, useDispatch } from "react-redux";

import CardOfDeleteItem from "../../layout/cardOfDeleteItem";
import deleteIcon from "../../assets/icons/delete.png";

import Card from "../../layout/Card";

const DeleteItem = () => {
  const myBoxes = useSelector((state) => state.itemsData.boxes);

  console.log(myBoxes);

  const showItemsForDelete = myBoxes.map((item) => (
    <div className={classes.itemContainer}>
      <div>{item.boxName}</div>
      <CardOfDeleteItem items={item.items} />
      <div className={classes.itemForDelete}>
        <button className={classes.deleteItemButton}>
          usuń
          <img className={classes.deleteIcon} src={deleteIcon}></img>
        </button>
      </div>
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
