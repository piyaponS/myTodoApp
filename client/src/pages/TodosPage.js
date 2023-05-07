import React, { useEffect } from "react";
import HeaderLogout from "../components/HeaderLogout";
import Footer from "./../components/Footer";
import Note from "../components/Note";
import Message from "../components/Message";
import { useSelector, useDispatch } from "react-redux";
import { postTodo } from "./../features/todos/todoSlice";

function TodosPage() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    console.log(todos); // Log the updated todos whenever it changes
  }, [todos]);

  const addMessage = (message) => {
    console.log(message);
    dispatch(postTodo(message));
  };

  const deleteMessage = () => {};
  return (
    <div>
      <HeaderLogout />
      <Message onAdd={addMessage} />

      {todos.map((todo, index) => {
        return (
          <Note
            key={index}
            id={index}
            content={todo}
            onDelete={deleteMessage}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default TodosPage;
