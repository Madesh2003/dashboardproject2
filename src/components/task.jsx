import React from 'react';
import './task.css';
import { useNotes } from '../contexts/notes.context';
export default function Task() {
  const { tasks, setTasks } = useNotes();

  function handleTaskDelete(e, tasksId) {
    if (e) {
      let taskscopy = [...tasks];
      const filteredTask = taskscopy.filter((data) => data.id !== tasksId);
      setTasks(filteredTask);
    }
  }

  return (
    <div>
      {tasks.map((task, index) => (
        <div className="task-status ">
          <div className="task-list" key={`task=${index}`} >
            <input className="list-checkbox-1" type="checkbox" />
            <div className="contant">
              <p className="task-name">{task.title}</p>
              <p className="days-task">{task.content}</p>
            </div>
          </div>
          <button onClick={(e) => handleTaskDelete(e, task.id)} ><i class="fa-regular fa-trash-can"></i></button>
        </div>
      ))}

    </div>
  )
}
