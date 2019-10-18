import axios from 'axios';

class TodoDataService {

    retrieveAllTodos(name) {
        console.log("TodoDataService - retrieveAllTodos");
        return axios.get(`http://localhost:8443/users/${name}/todos`)
    }

    retrieveTodo(name, id) {
        return axios.get(`http://localhost:8443/users/${name}/todos/${id}`)
    }

    deleteTodo(name, id) {
        return axios.delete(`http://localhost:8443/users/${name}/todos/${id}`)
    }    

}

export default new TodoDataService();