import React from "react";

import TextField from "@mui/material/TextField";

import classes from "./newItemInputComponent.module.css";

const NewItemInputComponent = (props) => {
  // let transformClass = "";
  // if (props.show) {
  //   transformClass = classes.inputOpen;
  // } else {
  //   transformClass = classes.inputClose;
  // }

  console.log("xd");

  const textFieldStyle = { margin: 0.5, width: "95%", fontFamily: "arial" };

  return (
    <div
    //   className={`${classes.newItemInput}
    // ${transformClass}`}
    >
      <TextField
        id="outlined-basic"
        label={"nowy"}
        variant="outlined"
        size="small"
        sx={textFieldStyle}
        // inputRef={props.refName}
      ></TextField>
    </div>
  );
};

export default NewItemInputComponent;
