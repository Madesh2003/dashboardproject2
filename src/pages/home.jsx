import React from 'react';
import Card from '../components/card';
import Task from '../components/task';
import './home.css';


export default function Home() {
  return (
    <div>
      <div className="notes-container">
        <h3>Welcome John</h3>
        <div className="note-section">
          <p className="mynotes"><i className='bx bx-notepad'></i>My Notes</p>
          <p className="recently-viewed">Recently Viewed</p>
        </div>
        <div className="listofcards">
          <Card />
        </div>
        <div className="mytask">
          <p><i className='bx bx-list-check'></i>My Tasks</p>
          <div className="listoftasks">
            <Task />
          </div>
        </div>
      </div>
    </div>
  )
}
