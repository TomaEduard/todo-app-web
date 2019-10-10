import React from 'react';
import { BrowserRouter as Route, Link} from 'react-router-dom';

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

export default Welcome;