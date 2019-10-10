import React from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ErrorComponent from '../todo/pages/ErrorComponent';
import ListTodoComponent from '../todo/ListTodoComponent';
import Logout from '../todo/Logout.jsx';
import Welcome from './Welcome.jsx';
import Header from './pages/Header.jsx';
import Footer from './pages/Footer.jsx';
import Login from './Login.jsx';

import AuthenticatedRoute from './AuthentiocatedRoute.jsx';

// css
import './TodoApp.css';

class TodoApp extends React.Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>

                    <React.Fragment>
                        <Header/>

                        <Switch>
                            <Route exact path="/" component={Login}/>
                            <Route exact path="/login" component={Login}/>
                            <AuthenticatedRoute path="/welcome/:name" component={Welcome}/>
                            {/* <Route exact path="/welcome/" component={Welcome}/> */}
                            <AuthenticatedRoute path="/todos" component={ListTodoComponent}/>
                            <AuthenticatedRoute path="/logout" component={Logout}/>

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

// ShowInvalidCredentials = (props) => {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     } return null
// }

export default TodoApp;