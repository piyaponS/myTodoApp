import React, { useState } from "react";
import HeaderLogout from "../components/HeaderLogout";
import Footer from "./../components/Footer";
import Note from "../components/Note";
import Message from "../components/Message";

function TodosPage() {
  const [notes, setNotes] = useState([]);
  const addMessage = (id) => {
    setNotes((prev) => {
      return [...prev, id];
    });
  };
  const deleteMessage = (id) => {
    setNotes((prev) => {
      return prev.filter((_, index) => index !== id);
    });
  };
  return (
    <div>
      <HeaderLogout />
      <Message onAdd={addMessage} />

      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          content={note.content}
          onDelete={deleteMessage}
        />
      ))}

      <Footer />
    </div>
  );
}

export default TodosPage;
