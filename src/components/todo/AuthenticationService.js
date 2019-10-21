import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

class AuthenticationService {

    refreshPage() {
        window.location.reload(); 
        toast("🦄 Login Successful !", {autoClose:3000,type: toast.TYPE.SUCCESS, position:toast.POSITION.BOTTOM_RIGHT})
    }

    executeBasicAuthenticationService(username, password) {
        return axios.get('http://localhost:8443/basicauth', {
            headers: {
                authorization: this.createBasicAuthToken(username, password)
            }
        } )
    }

    // registerSuccesfulLogin(username, password) {
    //     let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

    //     // console.log("AuthenticationService - registerSuccesfullogin(username, password): ",username,password);

    //     sessionStorage.setItem('authenticatedUser', username)
    //     console.log('registerSuccesfulLogin - ', basicAuthHeader);
    //     this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    //     this.setupAxiosInterceptors(basicAuthHeader);
    // }

    createBasicAuthToken(username, password) {
        return 'Basic ' +  window.btoa(username + ":" + password)
    }
    
    registerSuccesfulLogin(username, password){
        //let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
        sessionStorage.setItem('authenticatedUser', username)
        let basicAuthHeader = this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
        console.log('registerSuccesfulLogin - ', basicAuthHeader);
    }

    logout() {
        console.log("AuthenticationService - logout");
        sessionStorage.removeItem('authenticatedUser');
        window.location.reload(); 
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) {
            return false
        } else return true;
    }

    getLoggInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) {
            return ''
        } else return user;
    }

    // hard coded
    setupAxiosInterceptors2() {
        let username = 'defaultValue'
        let password = '1asd'
        
        let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }

    setupAxiosInterceptors(basicAuthHeader) {

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService();