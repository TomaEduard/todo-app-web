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
        todos: [],
        message: null,
      }
    }
  
    componentDidMount() {
        let username = AuthenticationService.getLoggInUserName();
        this.refreshTodos();
    }

    refreshTodos() { 
        let username = AuthenticationService.getLoggInUserName();
        TodoDataService.retrieveAllTodos(username)
            .then (response => {
                console.log(response);
                this.setState({
                    todos: response.data
                })
                
            })
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggInUserName();
        console.log("deleteTodoClicked - ",username, " + ", id);
        
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState ({
                        message: `Delete todo #${id} Succesfully!`
                    });
                    this.refreshTodos();
                }
            )
    }

    render () {
        
        return (
  
        <React.Fragment>
            
            <div className="container">
                <div className="display-4 font-weight-bold">List Todos</div>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}

                <table className="table table-striped">
                    <thead>
                        <tr className="display-5">
                            {/* <th>Id</th> */}
                            <th>Desciption</th>
                            <th>Completet</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                        this.state.todos.map((e) => 
                            <tr key={e.id} className="display-5">  
                                {/* <td>{e.id}</td> */}
                                <td>{e.description}</td>
                                <td>{e.done.toString()}</td>
                                <td>{e.targetDate.toString()}</td>
                                <td>
                                    <button className="btn btn-warning" 
                                    onClick={() => this.deleteTodoClicked(e.id)}
                                    >Delete</button>
                                </td>
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