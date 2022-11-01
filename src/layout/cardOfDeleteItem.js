import React, { useState, useEffect } from "react";

import classes from "./cardOfdeleteItem.module.css";

import deleteIcon from "../assets/icons/delete.png";

const CardOfDeleteItem = (props) => {
  const [items, setItems] = useState([{}]);

  useEffect(() => {
    const myItemsArray = [];

    for (const key in props.items) {
      myItemsArray.push({ name: props.items[key].nameItem, id: key });
    }
    setItems(myItemsArray);
    console.log(myItemsArray);
    // console.log(myItems);
  }, []);

  console.log(items);

  const itemsList = items.map((item) => {
    console.log(item.name);
    return (
      <div className={classes.itemToBeRemovedCard}>
        <div className={classes.itemNameForDelete}>{item.name}</div>
        <button className={classes.deleteItemButton}>
          usuń
          <img className={classes.deleteIcon} src={deleteIcon}></img>
        </button>
      </div>
    );
  });

  return <div className={classes.itemsToBeRomovedContainer}>{itemsList}</div>;
};

export default CardOfDeleteItem;
