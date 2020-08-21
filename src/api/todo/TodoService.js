import axios from 'axios'
class TodoService{
    getTodoList(name){
        return axios.get(`http://localhost:8080/users/${name}/todos`)
    }
    delteTodo(name, id){
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }
    retriveTodo(name, id){
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`)
    }
   
    updateTodo(name, id, todo){
        let username='username'
        let password = 'password'
        let basicAuthHeaderString = 'Basic ' + window.btoa(username + ":" + password);
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo)
    }
}
export default new TodoService()