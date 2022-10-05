import React, { useRef } from "react";

import classes from "./loginPage.module.css";

import TextField from "@mui/material/TextField";

const InputElement = (props) => {
  return (
    <TextField
      id="outlined-basic"
      label={props.name}
      variant="outlined"
      size="small"
      sx={{
        margin: 1,
        width: 250,
        fontFamily: "arial",
      }}
      inputRef={props.refName}
    ></TextField>
  );
};

const LoginPage = () => {
  const nameInput = useRef();

  const onSubmitHandler = () => {
    const enteredName = nameInput.current.value;
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <InputElement name="xd" refName={nameInput} />
      <p>This is login page</p>
    </form>
  );
};

export default LoginPage;
