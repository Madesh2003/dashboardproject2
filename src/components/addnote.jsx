import React, { useRef } from "react";
import './addnote.css';
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Reducers/tasks.reducer";

export default function Addnote() {
  const titleRef = useRef(null);
  const noteRef = useRef(null);
  const dispatcher = useDispatch();

  function handleaddnote() {
    dispatcher(addTodo({
      title: titleRef.current.value,
      content: noteRef.current.value
    }));
    titleRef.current.value = "";
    noteRef.current.value = "";
  }

  return (
    <div className="add-notes-container">
      <div className="add-notes">
        <p>Add a Note</p>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="title-takenote">
        <input ref={titleRef} className="title mb-4 mt-2" type="text" placeholder="Title" /><br />
        <textarea ref={noteRef} className="takenote" placeholder="Take a note..." name="w3review" rows="4" cols="50"></textarea>
        <div className="addtask-btn">
          <button onClick={handleaddnote}>Add</button>
        </div>
      </div>
    </div>
  )
}
