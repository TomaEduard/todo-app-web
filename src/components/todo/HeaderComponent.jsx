import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './TodoApp.css';
import AuthenticationService from './AuthenticationService.js';

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    console.log('Header - render() isUserLoggedIn - ', isUserLoggedIn);

    return (

      <header>


        <nav className="navbar navbar-expand-md bg-dark p-0 m-0">
          <div><a href="/" className="navbar-brand text-white">todo.<span>List</span></a></div>
          {/* <div className="navbar-brand icon-header pl-5">
            <Link to="/">
              <img className="rmdb-logo"
                src="../../../src/todolistlogo-3.png"
                alt="xxxxxxxxxx"
              />
            </Link>
          </div> */}
  
          <ul className="navbar-nav">
            {isUserLoggedIn && <li className="nav-link display-5 ml-5"><Link to="/welcome/in28minutes">Home</Link></li>}
            {isUserLoggedIn && <li className="nav-link display-5 px-5"><Link to="/todos">Todos</Link></li>}
          </ul>
  
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isUserLoggedIn && <li className="nav-link display-5 px-5"><Link to="/login">Login</Link></li>}
            {isUserLoggedIn &&<li className="nav-link display-5 pr-5"><Link to="/logout" 
            onClick={AuthenticationService.logout}>Logout</Link></li>}
          </ul>
          
        </nav>
      </header>
  
    )
  }
  
}

export default HeaderComponent