import React, { createContext, useState, useContext } from 'react';

const Notescontext = createContext({
  notes: "",
  setNotes: () => { },
  tasks: "",
  setTasks: () => { },
});

export const useNotes = () => useContext(Notescontext);

export default function Notecontext({ children }) {
  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);

  const props = {
    notes,
    setNotes,
    tasks,
    setTasks,
  };

  return <Notescontext.Provider value={props} >
    {children}
  </Notescontext.Provider>
}
