import React, { useState, useEffect } from "react";

import classes from "./cardOfdeleteItem.module.css";

const CardOfDeleteItem = (props) => {
  const [items, setItems] = useState([{}]);

  useEffect(() => {
    const myItemsArray = [{}];

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
      <div>
        <div>{item.name}</div>
      </div>
    );
  });

  return <div>{itemsList}</div>;
};

export default CardOfDeleteItem;
