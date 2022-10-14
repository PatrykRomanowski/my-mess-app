import { useState } from "react";

import classes from "./card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.header}>{props.name}</div>
      <div className={classes.footer}>footer</div>
    </div>
  );
};

export default Card;
