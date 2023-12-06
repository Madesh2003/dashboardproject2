import React from 'react';
import Addnote from '../components/addnote';
import Card from '../components/card';

export default function Notes() {
  return (
    <div className='notes-container'>
        <Addnote />
        <div className="note-section">
            <p className="mynotes"><i className='bx bx-notepad'></i>My Notes</p>
            <p className="recently-viewed">Recently Viewed</p>
          </div>
          <div className="listofcards">
            <Card />
          </div>
    </div>
  )
}