import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AuthenticationService {

    refreshPage() { 
        window.location.reload(); 
        toast("🦄 Login Successful !", {autoClose:3000,type: toast.TYPE.SUCCESS, position:toast.POSITION.BOTTOM_RIGHT})
    }

    registerSuccesfulLogin(username, password) {
        console.log("AuthenticationService - registerSuccesfullogin(username, password): ",username,password);
        
        sessionStorage.setItem('authenticatedUser', username);
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

}

export default new AuthenticationService();