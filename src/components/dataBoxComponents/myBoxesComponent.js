import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import classes from "./myBoxesComponent.module.css";

const MyBoxesComponent = () => {
  const numberOfBoxes = useSelector((state) => state.itemsData.boxCounter);
  const myBoxes = useSelector((state) => state.itemsData.boxes);

  const MyBoxes = myBoxes.map((item) => (
    <div className={classes.boxes}>{item.boxName}</div>
  ));

  // const gameList = myConsole.map((item) => (
  //   <ConsoleItem
  //     key={item.id}
  //     consoleID={item.id}
  //     console={item}
  //     moreInfoHandler={moreInfoHandler}
  //     hiddenMoreInfo={hiddenMoreInfo}
  //     deleteConsole={deleteConsole}
  //   />
  // ));

  return <div className={classes.boxesContainer}>{MyBoxes}</div>;
};

export default MyBoxesComponent;
