import React, { useRef } from "react";
import { useNotes } from "../contexts/notes.context";
import './addnote.css';

const INITIAL_TASK_MOCK = {
  id: 0,
  title: "",
  content: "",
};



export default function Addnote() {
  const titleRef = useRef(null);
  const noteRef = useRef(null);
  const { notes, setNotes } = useNotes();
  function handleaddnote(e) {
    if (titleRef.current.value === "" && noteRef.current.value === "") {
      alert("Empty notes will not be accepted")
    } else {
      let notesCopy = [...notes];
      notesCopy.push({
        ...INITIAL_TASK_MOCK,
        id: notes.length + 1,
        title: titleRef.current.value,
        content: noteRef.current.value,
      }
      );
      setNotes(notesCopy);
      titleRef.current.value = "";
      noteRef.current.value = "";
    }
  }

  console.log(notes);
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
          <button onClick={(e) => handleaddnote(e)}>Add</button>
        </div>
      </div>
    </div>
  )
}
