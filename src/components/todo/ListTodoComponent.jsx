import React from 'react';
import './TodoApp.css';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js';

// react toastify
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { log } from 'handlebars';
toast.configure();

class ListTodoComponent extends React.Component {

    constructor(props) { // accept props
      super(props)       // pass props to super class
      this.state = {
        todos: [
            // {id: 1, desciption: 'Lern React', done: false, targetDate: new Date()},
            // {id: 2, desciption: 'Becom an Expert at React', done: false, targetDate: new Date()},
            // {id: 3, desciption: 'Visit India', done: false, targetDate: new Date()},
        ]
            
      }
    }
  
    componentDidMount() {
        let username = AuthenticationService.getLoggInUserName();
        TodoDataService.retrieveAllTodos(username)
            .then (response => {
                console.log(response);
                this.setState({
                    todos: response.data
                })
                
            })
    }

    render () {
  
        
        return (
  
        <React.Fragment>
            
            <div className="container">
                <div className="display-4 font-weight-bold">List Todos</div>
                
                <table className="table table-striped">
                    <thead>
                        <tr className="display-5">
                            <th>Id</th>
                            <th>Desciption</th>
                            <th>Completet</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                        this.state.todos.map((e) => 
                            <tr key={e.id} className="display-5">  
                                <td>{e.id}</td>
                                <td>{e.desciption}</td>
                                <td>{e.done.toString()}</td>
                                <td>{e.targetDate.toString()}</td>
                            </tr>
                        )
                        }
                    </tbody>

                </table>

            </div>
        </React.Fragment>
      )
    }
}

export default ListTodoComponent;