import React from 'react';
import './card.css';
import { useNotes } from '../contexts/notes.context';

export default function Card() {
    
    const { notes, setNotes } = useNotes();

    function handleNotesDelete(e, noteId){
        if(e){
            let notescopy = [...notes];
            const filtereddata = notescopy.filter((data) => data.id !== noteId );
            setNotes(filtereddata);
        }
    }

    return (
       <div className='card-div'>
         {notes.map((note, index) => (
        <div class="card  col-xl-4 col-sm-6 col-md-5 " >
            <div class="card-title"  key={`note=${index}`}> 
                <div class="title">
                    <h5>{note.title}</h5>
                </div>
                <div class="card-btn">
                    <button  onClick={(e) => handleNotesDelete(e, note.id)} ><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text">{note.content}</p>
                <p class="notes-days">Go somewhere</p>
            </div>
        </div>
            ))}
       </div>
    )
}
