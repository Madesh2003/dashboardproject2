import React, { useRef } from "react";
import './addnote.css';
import { addTask } from "../Redux/Reducers/tasks.reducer";
import { useDispatch } from "react-redux";

export default function Addnote() {
  const titleRef = useRef(null);
  const noteRef = useRef(null);
  const dispatcher = useDispatch();
  function handleaddtask(e) {
    if (titleRef.current.value === "" && noteRef.current.value === "") {
      alert("Empty notes will not be accepted")
    } else {
      dispatcher(addTask({
        title: titleRef.current.value,
        content: noteRef.current.value
      }));
      titleRef.current.value = "";
      noteRef.current.value = "";
    }
  }

  return (
    <div className="add-notes-container">
      <div className="add-task">
        <p>Add a Task</p>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="title-takenote">
        <input ref={titleRef} className="title mb-4 mt-2" type="text" placeholder="Title" /><br />
        <textarea ref={noteRef} className="takenote" placeholder="Take a note..." name="w3review" rows="4" cols="50"></textarea>
        <div className="addtask-btn">
          <button onClick={(e) => handleaddtask(e)}>Add</button>
        </div>
      </div>
    </div>
  )
}
