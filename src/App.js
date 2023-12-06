//import { Routes, Route, Link } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Notes from './pages/notes';
import Home from './pages/home';
import Tasksection from './pages/task';
import userimg from './assets/userimg.jpeg';

function App() {
  return (
    <div classNameName="App">
      <div className="app-container">
        <div className="sidebar">
          <div className="user-login">
            <img src={userimg} alt="" />
            <div className="user-login-details">
              <p className="user-name">John</p>
              <p>John623@gmail.com</p>
            </div>
          </div>
          <ul className="sidebar-content">
            <li><Link className="active sidebar-section p-xxl-0 m-xxl-0 " to={"/pages/home"} ><i className='bx bxs-home'></i>Home</Link></li>
            <li><Link className='sidebar-section p-sm-0 m-sm-0' to={"/"}  ><i className='bx bx-search'></i>Search</Link></li>
            <li><Link className='sidebar-section p-sm-0 m-sm-0' to={'/pages/notes'}><i className='bx bx-notepad' ></i>Notes</Link></li>
            <li><Link className='sidebar-section p-sm-0 m-sm-0' to={"/pages/task"}><i class='bx bx-list-check'></i>Tasks</Link></li>
            <li><Link className='sidebar-section p-sm-0 m-sm-0' to={"archive"} ><i className='bx bx-archive-in'></i>Archive</Link></li>
            <li><Link className='sidebar-section p-sm-0 m-sm-0' to={"bin"} ><i className="fa-regular fa-trash-can" ></i>Bin</Link></li>
          </ul>
        </div>
        <Routes>
            <Route path='/pages/home' Component={Home} />
            <Route path='/pages/notes' Component={Notes} />
            <Route path='/pages/task' Component={Tasksection} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
