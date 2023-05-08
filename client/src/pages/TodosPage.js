import React, { useEffect } from "react";
import classes from "./TodosPage.module.css";
import HeaderLogout from "../components/HeaderLogout";
import Footer from "./../components/Footer";
import Note from "../components/Note";
import Message from "../components/Message";
import { useSelector, useDispatch } from "react-redux";
import {
  postTodo,
  getTodos,
  deleteTodo,
  reset,
} from "./../features/todos/todoSlice";
import LoadingPage from "./LoadingPage";

function TodosPage() {
  const dispatch = useDispatch();
  const { todos, success, error, loading, message } = useSelector(
    (state) => state.todo
  );

  useEffect(() => {
    if (error) {
      console.error(error);
    }

    dispatch(getTodos());
  }, [dispatch, success, error, message]);

  const addMessage = (message) => {
    dispatch(postTodo(message));
    dispatch(reset());
  };

  const deleteMessage = (id) => {
    dispatch(deleteTodo(id));
    dispatch(reset());
  };
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <HeaderLogout />
      <Message onAdd={addMessage} />
      {todos.length > 0 ? (
        <div>
          {todos.map((todo, index) => {
            return (
              <Note
                key={index}
                id={todo._id}
                content={todo}
                onDelete={deleteMessage}
              />
            );
          })}
        </div>
      ) : (
        <h3 className={classes.h3}>You have not written any contents</h3>
      )}

      <Footer />
    </div>
  );
}

export default TodosPage;
