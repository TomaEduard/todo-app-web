import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTodosComponent extends Component {

    constructor(props){     // accept props
        console.log('constructor')
        super(props)        // pass props to super class
        this.state = {
            todos : [],
            message : null
        }
        // this.deleteTodoClicked = this.deleteTodoClicked.bind(this)   
        // this.updateTodoClicked = this.updateTodoClicked.bind(this)   
        // this.addTodoClicked = this.addTodoClicked.bind(this)
        // this.refreshTodos = this.refreshTodos.bind(this)
    }

    // componentWillUnmount = () => {
    //     console.log('componentWillUnmount')
    // }
    
    // shouldComponentUpdate = (nextProps, nextState) => {
    //     console.log('shouldComponentUpdate')
    //     console.log(nextProps)
    //     console.log(nextState)
    //     return true
    // }

    componentDidMount = () => {
        console.log('componentDidMount')
        this.refreshTodos();
        console.log(this.state)
    }

    refreshTodos = () => {
        try{
            let username = AuthenticationService.getLoggedInUserName()
            TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({todos : response.data})
                }
            ) 
        } catch (e) {
            console.log(e.response) // undefined
        }
        
    }

    deleteTodoClicked = (id) => {
        let username = AuthenticationService.getLoggedInUserName()
        console.log('#1 ',id + " " + username);
        TodoDataService.deleteTodo(username, id)
        .then (
            response => {
                this.setState({message : `Delete of todo ${id} Successful`})
                this.refreshTodos()
            }
         )
        
    }

    addTodoClicked = () => {
        this.props.history.push(`/todos/-1`)
    }

    updateTodoClicked = (id) => {
        console.log('update ' + id)
        this.props.history.push(`/todos/${id}`)
        // /todos/${id}
        // let username = AuthenticationService.getLoggedInUserName()
        // //console.log(id + " " + username);
        // TodoDataService.deleteTodo(username, id)
        //  .then (
        //      response => {
        //         this.setState({message : `Delete of todo ${id} Successful`})
        //         this.refreshTodos()
        //      }
        //  )
        
    }

    render() {
        console.log('render')
        return (
            <div>
                 <h1>List Todos</h1>
                 {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                 <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>IsCompleted?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map (
                                e =>
                                    <tr key={e.id}>
                                        <td>{e.description}</td>
                                        <td>{moment(e.targetDate).format('YYYY-MM-DD')}</td>
                                        <td>{e.done.toString()}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(e.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(e.id)}>Delete</button></td>
                                    </tr>
                            )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                 </div>
            </div>
        )
    }
}

export default ListTodosComponent