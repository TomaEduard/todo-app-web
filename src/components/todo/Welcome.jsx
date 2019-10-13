import React from 'react';
import { BrowserRouter as Link} from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js';
import { log } from 'handlebars';

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            welcomeMessage: ''
        })
    }

    retrieveWelcomeMessage = () => {
        // console.log('retreive clicked');
        // HelloWorldService.executeHelloWorldService()
            // .then(response => this.handleSuccesfulResponse(response)
        // )

        // console.log('retreive clicked');
        HelloWorldService.executeHelloWorldBeanService()
        .then(response => this.handleSuccesfulResponse(response)
        )

        HelloWorldService.executeHelloWorldPathVariable(this.props.match.params.name)
        .then(response => this.handleSuccesfulResponse(response)
        )

    }

    handleSuccesfulResponse(response) {
        console.log(response);
        
        this.setState ({
            welcomeMessage: response.data.message,

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