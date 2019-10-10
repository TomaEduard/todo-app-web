import React from 'react'
import { Link } from 'react-router-dom';
// import './Header.css';
import '../TodoApp.css';
import Logout from '../Logout';


export default function Header() {
  return (

    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        {/* <div><a className="navbar-brand">ToDoList Icon</a></div> */}

          
        <div className="navbar-brand icon-header pl-5">
          <Link to="/">
            <img className="rmdb-logo"
              src="./todolistlogo-3.png"
              alt="todolist-logo"
            />
          </Link>
        </div>


        <ul className="navbar-nav">
          <li className="nav-link display-5"><Link to="/welcome">Home</Link></li>
          <li className="nav-link display-5 px-5"><Link to="/todos">Todos</Link></li>
        </ul>

        <ul className="navbar-nav navbar-collapse justify-content-end">
          <li className="nav-link display-5 px-5"><Link to="/login">Login</Link></li>
          <li className="nav-link display-5 pr-5"><Link to="/logout">Logout</Link></li>
        </ul>
        

      </nav>
    </header>

  )
}




