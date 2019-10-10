import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import ErrorComponent from '../todo/pages/ErrorComponent';
import ListTodoComponent from '../todo/ListTodoComponent';
import Logout from '../todo/Logout';
import './TodoApp.css';

// react toastify
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
toast.configure();

class TodoApp extends React.Component {
    render() {
        return (

            <div className="TodoApp">
                <Router>
                    <React.Fragment>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={LoginComponent}/>
                            <Route exact path="/login" component={LoginComponent}/>
                            <Route path="/welcome/:name" component={Welcome}/>
                            <Route path="/welcome/" component={Welcome}/>
                            <Route exact path="/todos" component={ListTodoComponent}/>
                            <Route exact path="/logout" component={Logout}/>

                            <Route component={ErrorComponent} />

                        </Switch>
                        <Footer/>
                    </React.Fragment>

                </Router>

                {/* <LoginComponent/>
                <WelcomeComponent/> */}

            </div>
        )
    }
}

class Welcome extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h1 className="font-weight-bold">Welcome!</h1>

                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todos 
                    <Link to="/todos" className="here"> here</Link>.                
                
                </div>

            </React.Fragment>
        )

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
            this.props.history.push(`/welcome/${this.state.username}`)

            // this.setState({
            //     showSuccesMessage: true,
            //     hasLoginFailed: false,
            // })

            console.log("🦄 Login Successful!");
            toast("🦄 Login Successful !", {autoClose:3000,type: toast.TYPE.SUCCESS, position:toast.POSITION.BOTTOM_RIGHT})
              
        } else {

            this.setState({
                showSuccesMessage: false,
                hasLoginFailed: true,
            })

            console.log("Failed");
            toast("Invalid Credentials !", {autoClose:3000,type: toast.TYPE.WARNING, position:toast.POSITION.TOP_CENTER})

        }
    }

    render () {
      return (
  
        <React.Fragment>
            
                {/* if this.state.hasLoginFailed is true, show <div> ... </div> */}
                {/* need to close after x number of sec. */}
                    {/* {this.state.hasLoginFailed && <div className="alert alert-warning font-weight-bold">Invalid Credentials!</div>}
                    {this.state.showSuccesMessage && <div>Login Successful !</div>}  */}

                <h1>Login</h1>
                <div className="container">
                    
                    User Name: <input type="text"
                    name="username" 
                    value={this.state.username}
                    onChange={this.handleChange}
                    />

                    Password: <input type="password" 
                    name="password" 
                    value={this.state.password}
                    onChange={this.handleChange}
                    

                    />

                    <button 
                        className="btn btn-success"
                        onClick={this.loginClicked}>Login
                    </button>
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