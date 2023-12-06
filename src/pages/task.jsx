import React from 'react';
import Task from '../components/task';
import Addtask from '../components/addtask';

export default function Tasksection() {
  return (
    <div className='notes-container'>
        <Addtask />
        <div className="mytask">
            <p><i className='bx bx-list-check'></i>My Tasks</p>
            <div className="listoftasks">
              <Task />
            </div>
          </div>
    </div>
  )
}
