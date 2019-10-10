import React from 'react';
import './TodoApp.css';

// react toastify
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class ListTodoComponent extends React.Component {

    constructor(props) { // accept props
      super(props)       // pass props to super class
      this.state = {
        todos: [
            {id: 1, desciption: 'Lern React', done: false, targetDate: new Date()},
            {id: 2, desciption: 'Becom an Expert at React', done: false, targetDate: new Date()},
            {id: 3, desciption: 'Visit India', done: false, targetDate: new Date()},

        ]
            
      }
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
                        this.state.todos.map(e => 
                            <tr className="display-5">
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