class AuthentiactionService{
    registerLoginSucess(userName, passWord){
        console.log("Login sucesss")
        sessionStorage.setItem('ValidUser', userName);

    }
    logOut(){
        sessionStorage.removeItem('ValidUser')
    }
    isUserLogin(){
        let user = sessionStorage.getItem('ValidUser')
        if(user === null)return false;
        return true;
    }
}
export default new AuthentiactionService();