import axios from 'axios';
import AuthenticationService from '../../components/todo/AuthenticationService';

class TodoDataService {

    retrieveAllTodos(name) {
        console.log("TodoDataService - retrieveAllTodos");
        AuthenticationService.setupAxiosInterceptors2();
        return axios.get(`http://localhost:8443/users/${name}/todos`)
    }

    retrieveTodo(name, id) {
        return axios.get(`http://localhost:8443/users/${name}/todos/${id}`)
    }

    deleteTodo(name, id) {
        return axios.delete(`http://localhost:8443/users/${name}/todos/${id}`)
    }    

    updateTodo(name, id, todo) {
        return axios.put(`http://localhost:8443/users/${name}/todos/${id}`, todo)
    }  

    createTodo(name, todo) {
        return axios.post(`http://localhost:8443/users/${name}/todos/`, todo)

    }  
}

export default new TodoDataService();