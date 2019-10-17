import React from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ErrorComponent from '../todo/pages/ErrorComponent.jsx';
import ListTodoComponent from '../todo/ListTodoComponent.jsx';
import Logout from '../todo/Logout.jsx';
import Welcome from './Welcome.jsx';
import Header from './pages/Header.jsx';
import Footer from './pages/Footer.jsx';
import Login from './Login.jsx';
import AuthenticationService from './AuthenticationService.js';
import UpdateTodo from './UpdateTodo.jsx';

import AuthenticatedRoute from './AuthentiocatedRoute.jsx';

// css
import './TodoApp.css';

class TodoApp extends React.Component {
    constructor(props) { 
        super(props)       
        this.state = {
          isAuthentificated: false,
  
        }
    }

    setIsAuthentificated = (value) => {
        this.setState ({
            isAuthentificated: value,
        })
        // if (value) {
        //     toast("🦄 Login Successful !", {autoClose:3000,type: toast.TYPE.SUCCESS, position:toast.POSITION.BOTTOM_RIGHT})
        // } else {
        //     null;
        // }
    }

    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log("TodoApp - isUserLoggedIn - ", isUserLoggedIn);
        return (
            <div className="TodoApp">
                <Router>
                    <Header
                        // isAuthentificated = {this.state.isAuthentificated}
                        // setIsAuthentificated = {this.setIsAuthentificated} 
                    />

                    <Switch>
                        <Route exact path="/" component={Login}
                        // isAuthentificated = {this.state.isAuthentificated}
                        // setIsAuthentificated = {this.setIsAuthentificated} 
                        />
                        <Route exact path="/login" component={Login}/>
                        <AuthenticatedRoute path="/welcome/:name" component={Welcome}/>
                        <AuthenticatedRoute path="/todos/:id" component={UpdateTodo}/>
                        <AuthenticatedRoute path="/todos" component={ListTodoComponent}/>
                        <AuthenticatedRoute path="/logout" component={Logout}/>

                        <Route component={ErrorComponent} />
                    </Switch>

                    <Footer/>
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

// ShowInvalidCredentials = (props) => {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     } return null
// }

export default TodoApp;