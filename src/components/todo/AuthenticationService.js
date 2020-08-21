import axios from "axios";

class AuthentiactionService{
   
    executeBasicAuth(username,password){
        return axios.get('http://localhost:8080/basicauth',{
            headers:{
                authorization:this.createBasicAuth(username, password)
            }
        })

    }
    createBasicAuth(username, password){
         let basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);
        return basicAuthHeaderString

    }
    registerLoginSucess(username, password){
        //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);
        console.log("Login sucesss")
        sessionStorage.setItem('ValidUser', username);
        this.setInterceptRequest(this.createBasicAuth(username, password))

    }
    logOut(){
        sessionStorage.removeItem('ValidUser')
    }
    
    isUserLogin(){
        let user = sessionStorage.getItem('ValidUser')
        if(user === null)return false;
       
        return true;
    }
    getUserLogin(){
        let user = sessionStorage.getItem('ValidUser')
        if(user === null)return "";
        return user;
    }
    setInterceptRequest(basicAuthHeaderString){
        // let username = 'username'
        // let password = 'password'
        //basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);
        axios.interceptors.request.use(
            (config)=>{
                config.headers.authorization =  basicAuthHeaderString
                return config
            }
        )

    }
}
export default new AuthentiactionService();