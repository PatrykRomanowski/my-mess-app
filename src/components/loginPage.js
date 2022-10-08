import React, { useRef, useState } from "react";

import classes from "./loginPage.module.css";
import dataBaseURL from "../consts/firebase";

import TextField from "@mui/material/TextField";

const LoginPage = () => {
  const [signInRegisterToogle, setSignInRegisterToogle] = useState(false);

  const nameInput = useRef();
  const loginInput = useRef();
  const passwordInput = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const enteredPassword = passwordInput.current.value;
    const enteredLogin = loginInput.current.value;

    let url;
    let authenticationError;

    if (!signInRegisterToogle) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAF2zIdKypRaJyccX9fG53_JSiq9RxlUZc";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAF2zIdKypRaJyccX9fG53_JSiq9RxlUZc";
    }
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredLogin,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          authenticationError = "authentication failed";
          throw new Error(authenticationError);
        }
      })
      .then((date) => {
        console.log("login success");
        console.log(date);
        if (signInRegisterToogle) {
          const enetredName = nameInput.current.value;

          const postURL = dataBaseURL + "myUsers/" + date.localId + ".json";
          const response = fetch(postURL, {
            method: "PUT",
            body: JSON.stringify({ name: enetredName, library: "myBoxes" }),
          });
        }
      })
      .catch((err) => alert(err.message));
  };

  const signInHandler = () => {
    console.log("działa na klik");
    setSignInRegisterToogle(true);
  };

  const registerHandler = () => {
    setSignInRegisterToogle(false);
  };

  const textFieldStyle = { margin: 1, width: "40%", fontFamily: "arial" };

  const InputElement = (props) => {
    return (
      <TextField
        id="outlined-basic"
        label={props.name}
        variant="outlined"
        size="normal"
        sx={textFieldStyle}
        inputRef={props.refName}
      ></TextField>
    );
  };

  return (
    <form className={classes.formContainer} onSubmit={onSubmitHandler}>
      {signInRegisterToogle && <p className={classes.signInBaner}>register</p>}

      {signInRegisterToogle && (
        <InputElement name="your name" refName={nameInput} />
      )}
      <TextField
        id="outlined-basic"
        label="login"
        variant="outlined"
        size="normal"
        sx={textFieldStyle}
        inputRef={loginInput}
      />
      <InputElement name="password" refName={passwordInput} />
      <button className={classes.formButton} onSubmit={onSubmitHandler}>
        {signInRegisterToogle ? "register" : "sign in"}
      </button>
      {!signInRegisterToogle ? (
        <div className={classes.signInContainer}>
          <p className={classes.signInInfo}>you do not have an account?</p>
          <p onClick={signInHandler} className={classes.signIn}>
            register
          </p>
        </div>
      ) : (
        <div className={classes.signInContainer}>
          <p className={classes.signInInfo}>do you have an account?</p>
          <p onClick={registerHandler} className={classes.signIn}>
            login
          </p>
        </div>
      )}
    </form>
  );
};

export default LoginPage;
