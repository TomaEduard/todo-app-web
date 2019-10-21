import axios from 'axios'
import AuthenticationService from '../../components/todo/AuthenticationService';

class HelloWorldService {
    
    executeHelloWorldService() {
        //console.log('executed service')
        AuthenticationService.setupAxiosInterceptors2();

        return axios.get('http://localhost:8443/hello-world');        
    }

    executeHelloWorldBeanService() {
        //console.log('executed service')
        AuthenticationService.setupAxiosInterceptors2();

        return axios.get('http://localhost:8443/hello-world-bean');        
    }
    
    executeHelloWorldPathVariable(name) {
        //console.log('executed service')
        // let username = 'in28minutes'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

        AuthenticationService.setupAxiosInterceptors2();
        return axios.get(`http://localhost:8443/hello-world/path-variable/${name}`
        // , 
        //     {
        //         headers : {
        //             authorization: basicAuthHeader
        //         }
        //     }
        );        
    }

}

export default new HelloWorldService()