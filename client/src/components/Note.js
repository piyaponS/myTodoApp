import React from "react";
import classes from "./Note.module.css";
import { AiFillDelete } from "react-icons/ai";

const Note = (props) => {
  const clickHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <div className={classes.note}>
      <p>{props.content.content}</p>
      <button onClick={clickHandler}>
        <AiFillDelete />
      </button>
    </div>
  );
};

export default Note;
