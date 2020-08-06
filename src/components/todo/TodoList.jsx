import React, { Component } from 'react'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos:[
                {id:"1", description:"Do excersise for 20 minutes", done:false, date:new Date()},
                {id:"2", description:"Learn React for 30 minutes",done:false, date:new Date()},
                {id:"3", description:"Learn Springboot for 30 minutes",done:false, date:new Date()},
            ]
         }
    }
    render() { 
    return ( <div className="container"> 

           <h1>Todo List</h1>
           <table className = "table">
               <thead>
                   <tr>
                   <th>id</th>
                   <th>description</th>
                   <th>isComplete?</th>
                   <th>time</th>
                   </tr>
               </thead>
               <tbody>
                   {
                 
                   this.state.todos.map(
                       todo=>
                       <tr>
                       <td>{todo.id}</td>
                       <td>{todo.description}</td>
                       <td>{todo.done.toString()}</td>
                       <td>{todo.date.toString()}</td>
                       </tr>
                      
                    )
                   
                   }
                     
               </tbody>
           </table>

    </div> );
    }
}
export default TodoList