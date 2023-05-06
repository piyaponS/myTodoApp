import React, { useState } from "react";
import classes from "./Message.module.css";
function Message(props) {
  const [message, setMessage] = useState({
    content: "",
  });
  const onSubmit = (event) => {
    event.preventDefault();
    props.onAdd(message);
    setMessage({
      content: "",
    });
  };
  const changeHandler = (event) => {
    setMessage((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div>
      <form className={classes.form} onSubmit={onSubmit}>
        <textarea
          name="content"
          placeholder="Content..."
          row="3"
          value={message.content}
          onChange={changeHandler}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default Message;
