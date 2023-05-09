import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={classes.footer}>
      <div className={classes.p}>Copyright ⓒ {year}</div>
    </div>
  );
};

export default Footer;
