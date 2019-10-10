import React from 'react'
import { Link } from 'react-router-dom';
// import './Header.css';
import '../TodoApp.css';
import AuthenticationService from '../AuthenticationService';

export default function Header() {

  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  // console.log(isUserLoggedIn);
  
  return (

    <header>
      <nav className="navbar navbar-expand-md bg-dark">
        {/* <div><a className="navbar-brand text-white">to do list</a></div> */}

        <div className="navbar-brand icon-header pl-5">
          <Link to="/">
            <img className="rmdb-logo"
              src="./todolistlogo-3.png"
              alt="xxxxxxxxxx"
            />
          </Link>
        </div>


        <ul className="navbar-nav">
          {isUserLoggedIn && <li className="nav-link display-5"><Link to="/welcome">Home</Link></li>}
          {isUserLoggedIn && <li className="nav-link display-5 px-5"><Link to="/todos">Todos</Link></li>}
        </ul>

        <ul className="navbar-nav navbar-collapse justify-content-end">
          <li className="nav-link display-5 px-5"><Link to="/login">Login</Link></li>
          {isUserLoggedIn &&<li className="nav-link display-5 pr-5"><Link to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
        </ul>
        

      </nav>
    </header>

  )
}




