import React, { Component } from 'react'
import TodoService from '../../api/todo/TodoService.js'
import AuthentiactionService from './AuthenticationService.js'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos:[
                // {id:"1", description:"Do excersise for 20 minutes", done:false, date:new Date()},
                // {id:"2", description:"Learn React for 30 minutes",done:false, date:new Date()},
                // {id:"3", description:"Learn Springboot for 30 minutes",done:false, date:new Date()},
            ],
            message:null
         }
    }
    componentDidMount(){
        this.refreshTodos();
        
    }
    refreshTodos=()=>{
        let user = AuthentiactionService.getUserLogin();
        TodoService.getTodoList(user)
        .then(response => {
            this.setState({todos:response.data})
            console.log(response.data)
    })
        .catch(error => this.HandleError(error))


    }
    shouldComponentUpdate(preState, nextState){
        console.log("upstate");
        console.log(preState);
        console.log(nextState);
        return true;
    }
    HandleError=(error)=>{
        console.log(error.data)
    }
    DeleteTodoByClick=(id)=>{
        let username = AuthentiactionService.getUserLogin();
        TodoService.delteTodo(username, id)
        .then(response=>{
            this.refreshTodos()
            this.setState({message:`delete todo ${id}`})
        })
        .catch(error=>this.HandleError(error))
        
    }
    UpdateTodoByClick=(id)=>{
       
        this.props.history.push(`/todo/${id}`)
    }
    addTodoByClick=(id)=>{
       
        this.props.history.push(`/todo/${-1}`)
    }
    render() { 
    return ( <div className="container"> 

           <h1>Todo List</h1>
        {this.state.message&&<div className="alert alert-success">{this.state.message}</div>}
           <table className = "table">
               <thead>
                   <tr>
                   <th>id</th>
                   <th>description</th>
                   <th>isComplete?</th>
                   <th>time</th>
                   <th>delete</th>
                   </tr>
               </thead>
               <tbody>
                   {
                 
                   this.state.todos.map(
                       todo=>
                       <tr>
                       <td>{todo.id}</td>
                       <td>{todo.action}</td>
                       <td>{todo.done.toString()}</td>
                       <td>{todo.targetDate.toString()}</td> 
                       <td><button className="btn btn-warning"onClick={()=>this.DeleteTodoByClick(todo.id)}>delete?</button></td>
                       <td><button className="btn btn-success"onClick={()=>this.UpdateTodoByClick(todo.id)}>update?</button></td>
                       </tr>
                      
                    )
                   
                   }
                     
               </tbody>
           </table>
           <button className="btn btn-success" onClick={this.addTodoByClick}>add</button>

    </div> );
    }
}
export default TodoList