import axios from 'axios'
class HelloService  {
    
    getWelcomeMessage(){
        console.log("begin welcome")
        return axios.get("http://localhost:8080/hello")
    }
    getWelcomeName(name){
      

        console.log(name);
        return axios.get(`http://localhost:8080/hello/${name}`
        
        )
    }
}
 
export default new HelloService() ;