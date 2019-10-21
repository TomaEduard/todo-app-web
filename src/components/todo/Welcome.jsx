import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js';
import { log } from 'handlebars';
import { isObject } from 'util';

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            welcomeMessage: ''
        })
    }

    retrieveWelcomeMessage = () => {
        HelloWorldService.executeHelloWorldPathVariable(this.props.match.params.name)
        .then(response => this.handleSuccesfulResponse(response))
        .catch(error => this.handleError(error))
    }

    handleSuccesfulResponse(response) {
        console.log(response);
        this.setState ({
            welcomeMessage: response.data.message,
        })
    }

    handleError(error) {
        console.log(error.response);
        let errorMessage = '';
        if(error.message) {
            errorMessage += error.message
        }

        if(error.response && error.response.data) {
            errorMessage += error.response.data.message
        }

        this.setState ({
            welcomeMessage: errorMessage,
        })
    }

    render() {
        return(
            <React.Fragment>
                <h1 className="font-weight-bold">Welcome!</h1>

                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todos 
                    <Link to="/todos" className="here"> here</Link>.                
                </div>

                <div className="container">
                    Click here to get a customized welcome message.
                    <button className="btn btn-success"
                        onClick={this.retrieveWelcomeMessage}>Get Welcome message.
                     </button>
                </div>

                <div className="container">
                    {this.state.welcomeMessage}
                </div>

            </React.Fragment>
        )

    }
}

export default Welcome;