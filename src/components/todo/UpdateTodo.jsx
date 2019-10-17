import React, {Component} from 'react';
import moment from 'moment';
import { FormikProvider, Formik, Form, Field, ErrorMessage } from 'formik';

class UpdateTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: 'Learn Forms',
            targetDate: moment(new Date()).format('YYY-MM-DD'),
        }
    }

    onSubmit = (values) => {
        console.log(values);
    }

    validate = (values) => {
        let errors = {description:''}
        
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

    render() {

        let {description,targetDate} = this.state;

        // let description = this.state.description;
        // let targetDate = this.state.targetDate;
        
        return(
            <React.Fragment>
                <h1>Todo</h1>
                <div className="container">
                    <Formik

                        initialValues={{description,targetDate}}
                        onSubmit={this.onSubmit}

                        // until click save, validation does not happened
                        // real time
                        validateOnChange={false}
                        // only when field is not on target
                        validateOnBlur={false}
                        
                        validate={this.validate}
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
                                    
                                    <button className="btn btn-success button-update" type="submit">Save</button>
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