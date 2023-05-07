import React from "react";
import classes from "./Note.module.css";

const Note = (props) => {
  const clickHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <div className={classes.note}>
      <p>{props.content.content}</p>
      <button onClick={clickHandler}>DELETE</button>
    </div>
  );
};

export default Note;
