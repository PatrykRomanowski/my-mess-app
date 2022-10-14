import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import Card from "../../layout/Card";

import classes from "./myBoxesComponent.module.css";

const MyBoxesComponent = () => {
  const numberOfBoxes = useSelector((state) => state.itemsData.boxCounter);
  const myBoxes = useSelector((state) => state.itemsData.boxes);

  const MyBoxes = myBoxes.map((item) => <Card name={item.boxName} />);

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
