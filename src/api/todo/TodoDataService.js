import axios from 'axios';

class TodoDataService {

    retrieveAllTodos(name) {
        console.log("TodoDataService - retrieveAllTodos");
        return axios.get(`http://localhost:8443/users/${name}/todos`)
    }


}

export default new TodoDataService();