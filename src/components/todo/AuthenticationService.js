class AuthenticationService {

    refreshPage() { 
        window.location.reload(); 
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