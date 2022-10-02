import React from "react";

import classes from "./header.module.css";

const Header = () => {
  return (
    <>
      <div className={classes.headerContainer}>
        <p className={classes.paragraph}>My mess App</p>
        <button> My Profile </button>
        <button> Login </button>
      </div>
    </>
  );
};

export default Header;
