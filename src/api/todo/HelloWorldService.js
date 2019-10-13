import axios from 'axios';

class HelloWorldService {

    executeHelloWorldService() {
        console.log("HelloWorldService - executeHelloWorldService");
        return axios.get('http://localhost:8443/hello-world')
    }

    executeHelloWorldBeanService() {
        console.log("HelloWorldService - executeHelloWorldService");
        return axios.get('http://localhost:8443/hello-world-bean')
    }

    executeHelloWorldPathVariable(name) {
        console.log("HelloWorldService - executeHelloWorldService");
        return axios.get(`http://localhost:8443/hello-world/path-variable/${name}`)
    }
}


export default new HelloWorldService();