import React, {Component} from 'react';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
import { S_IFREG } from 'constants';

class UpdateTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYY-MM-DD'),
        }

    }


    componentDidMount = () => {

        if(this.state.id === -1) {
            return
        }

        let username = AuthenticationService.getLoggInUserName();

        TodoDataService.retrieveTodo(username, this.state.id)
            .then(response => this.setState ({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD'),

            }))
    }

    validate = (values) => {
        let errors = {}
        
        if(!values.description) {
            errors.description = 'Enter a Description'
        } else if(values.description.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }

        if(!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid Target Date'
        }

        return errors;
    }

    onSubmit = (values) => {
        let username = AuthenticationService.getLoggInUserName();

        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate,
        }

        if(this.state.id === -1) {
            TodoDataService.createTodo(username, todo)
            .then(() => this.props.history.push('/todos'))
            console.log('createTodo - ', values);

        } else {
            TodoDataService.updateTodo(username, this.state.id, todo)
            .then(() => this.props.history.push('/todos'));
            console.log('updateTodo - ', values);
        }


    }

    loginClicked = () => {
        console.log("zxzxc");
    }
    

    render() {

        let {description, targetDate} = this.state;
        // let description = this.state.description;
        // let targetDate = this.state.targetDate;
        
        return(
            <React.Fragment>
                <h1>Todo</h1>
                <div className="container">
                    
                    <Formik
                        initialValues={{description, targetDate}}
                        onSubmit={this.onSubmit}

                        // until click save, validation does not happened
                        // real time
                        validateOnChange={false}
                        // only when field is not on target
                        validateOnBlur={false}
                        validate={this.validate}
                        // update form if state is updated(ComponentDidMount)
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage 
                                        name="description"
                                        component="div"
                                        className="alert alert-warning"
                                    />

                                    <ErrorMessage 
                                        name="targetDate"
                                        component="div"
                                        className="alert alert-warning"
                                    />

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    
                                    <button className="btn btn-success button-update"
                                        type="submit"
                                        // onClick={this.loginClicked}
                                    >Save</button>
                                </Form>

                            )
                        }
                    </Formik>
                </div>

            </React.Fragment>

        )
    }
}

export default UpdateTodo;