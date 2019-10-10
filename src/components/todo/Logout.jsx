import React from 'react';

// react toastify
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class Logout extends React.Component {
    render () {
      return (
  
        <React.Fragment>
            <div></div>
            <h1>You are logged out.</h1>
            <div className="container">
                Thank Your for Using Our Application
            </div>
        </React.Fragment>
      )
    }

}


export default Logout;