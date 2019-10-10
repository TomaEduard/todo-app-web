import React from 'react';
import AuthenticationService from './AuthenticationService';

// react toastify
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends React.Component {

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
            // this.setState({
            //     showSuccesMessage: true,
            //     hasLoginFailed: false,
            // })
            
            AuthenticationService.registerSuccesfulLogin(this.state.username, this.state.password);

            this.props.history.push(`/welcome/${this.state.username}`)

            // AuthenticationService.refreshPage();

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

export default Login;