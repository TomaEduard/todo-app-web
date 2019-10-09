import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorComponent from '../todo/pages/ErrorComponent';
import './TodoApp.css';

// react toastify
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class TodoApp extends React.Component {
    render() {
        return (

            <div className="TodoApp">
                <Router>
                    <React.Fragment>
                        <Switch>
                            <Route exact path="/" component={LoginComponent}/>
                            <Route exact path="/login" component={LoginComponent}/>
                            <Route exact path="/welcome" component={WelcomeComponent}/>
                            <Route component={ErrorComponent} />

                        </Switch>
         
                    </React.Fragment>

                </Router>

                {/* <LoginComponent/>
                <WelcomeComponent/> */}

            </div>
        )
    }
}

class WelcomeComponent extends React.Component {
    render() {
        return <div>Welcome to Todo App.</div>
    }
}

class LoginComponent extends React.Component {

    constructor(props) { // accept props
      super(props)       // pass props to super class
      this.state = {
          username: 'defaultValue',
          password: '',

          hasLoginFailed: false,
          showSuccesMessage: false,

      }
    }
  
    handleChange = (event) => {
        
        
        console.log("#1 event: ",event);
        console.log("#2 event.target.value: ",event.target.value);
        this.setState({
            // username: event.target.value,
            [event.target.name]: event.target.value,

        })
        console.log("#3 ",`${[event.target.name]}`," : ",event.target.value);
        console.log(this.state);
    }

    // handleUsernameChange = (event) => {
    //     console.log("event: ",event);
    //     console.log("event.target.value: ",event.target.value);
    //     this.setState({
    //         username: event.target.value,
    //         [event.target.name]: event.target.value,

    //     })
    //     console.log("this.state.username: ",this.state.username);
        
    // }

    // handlePasswordChange = (event) => {
    //     console.log("#1 event: ",event);
    //     console.log("#2 event.target.value: ",event.target.value);

    //     this.setState({
    //         password: event.target.value,
        
    //     })
    //     console.log("#3 this.state.password: ",this.state.password);
        
    // }

    loginClicked = () => {
        console.log(this.state);

        if(this.state.username === 'defaultValue' && this.state.password === 'dummy') {
            this.props.history.push("/welcome")

            // this.setState({
            //     showSuccesMessage: true,
            //     hasLoginFailed: false,
            // })

            console.log("🦄 Login Successful!");
            toast("🦄 Login Successful !", {autoClose:2200,type: toast.TYPE.SUCCESS, position:toast.POSITION.BOTTOM_CENTER})
              
        } else {

            this.setState({
                showSuccesMessage: false,
                hasLoginFailed: true,
            })

            console.log("Failed");
            
        }
    }

    render () {
      return (
  
        <React.Fragment>
            
        <div>
            {/* if this.state.hasLoginFailed is true, show <div> ... </div> */}
            {/* need to close after x number of sec. */}
            {/*             
            {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
            {this.state.showSuccesMessage && <div>Login Successful !</div>} 
            */}

            User Name:<input type="text" 
            name="username" 
            value={this.state.username}
            onChange={this.handleChange}
            />

            Password:<input type="password" 
            name="password" 
            value={this.state.password}
            onChange={this.handleChange}
            />

            <button onClick={this.loginClicked}>Login</button>
            </div>
        </React.Fragment>
      )
    }

}

// ShowInvalidCredentials = (props) => {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     } return null
// }

export default TodoApp;