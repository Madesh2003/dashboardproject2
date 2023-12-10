import React from 'react';
import './card.css';
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from '../Redux/Reducers/tasks.reducer';


export default function Card() {
    const { notes } = useSelector((state) => state.tasksReducer);
    const dispatcher = useDispatch();


    function handleNotesDelete(noteId) {
        let filtereddata = notes.filter((ele) => ele.id !== noteId);
        dispatcher(deleteTodo(filtereddata))
    }

    return (
        <div className='card-div container'>
            {notes.map((data, index) => (
                <div className='row'>
                    <div class="card col-12" >
                        <div class="card-title" key={index}>
                            <div class="title">
                                <h5>{data.title}</h5>
                            </div>
                            <div class="card-btn">
                                <button onClick={() => handleNotesDelete(data.id)} ><i class="fa-regular fa-trash-can"></i></button>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">{data.content}</p>
                            <p class="notes-days">Go somewhere</p>
                        </div>
                        <div class="w-100"></div>
                    </div>
                </div>
            ))}

        </div>
    )
}
