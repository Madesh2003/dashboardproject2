import React from 'react';
import './task.css';
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from '../Redux/Reducers/tasks.reducer';


export default function Task() {
  const { tasks } = useSelector((state) => state.tasksReducer);
  const dispatcher = useDispatch()

  function handleTasksDelete(taskID) {
    let filtereddata = tasks.filter((ele) => ele.id !== taskID);
    dispatcher(deleteTask(filtereddata))
  }


  return (
    <div>
      {tasks.map((data, index) => (
        <div className="task-status ">
          <div className="task-list">
            <input className="list-checkbox-1" type="checkbox" />
            <div className="contant">
              <p className="task-name" key={index}>{data.title}</p>
              <p className="days-task">{data.content}</p>
            </div>
          </div>
          <button onClick={() => handleTasksDelete(data.id)}><i class="fa-regular fa-trash-can"></i></button>
        </div>
      ))}
    </div>
  )
}
