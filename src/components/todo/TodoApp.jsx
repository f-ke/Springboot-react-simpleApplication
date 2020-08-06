import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthentiactionService from './AuthenticationService.js'
import HeaderComponent from './HeaderComponent'
import AutenticateRoute from './AutenticatedRoute.jsx'
//import TodoList from './TodoList'
import LogoutComponent from './LogOutComponent'
import LoginComponent from './LoginComponent'
import Welcome from './Welcome'
import FooterComponent from './Footer'
import ErrorComponent from './ErrorComponent'
import TodoList from './TodoList'
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Router>
           
            <>
            <HeaderComponent/>
            <Switch>
                <Route path= "/" exact component={LoginComponent}/>
                <Route path= "/login" component={LoginComponent}/>
                <Route path= "/logout" component={LogoutComponent}/>
                <AutenticateRoute path= "/welcome/:userName" component={Welcome}/>
                <AutenticateRoute path= "/todo" component={TodoList}/>
    
                <Route  component={ErrorComponent}/>
            </Switch>
               <FooterComponent/> 
            </>
            </Router>
            
        </div> );
    }
}


// class TodoList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             todos:[
//                 {id:"1", description:"Do excersise for 20 minutes", done:false, date:new Date()},
//                 {id:"2", description:"Learn React for 30 minutes",done:false, date:new Date()},
//                 {id:"3", description:"Learn Springboot for 30 minutes",done:false, date:new Date()},
//             ]
//          }
//     }
//     render() { 
//     return ( <div className="container"> 

//            <h1>Todo List</h1>
//            <table className = "table">
//                <thead>
//                    <tr>
//                    <th>id</th>
//                    <th>description</th>
//                    <th>isComplete?</th>
//                    <th>time</th>
//                    </tr>
//                </thead>
//                <tbody>
//                    {
                 
//                    this.state.todos.map(
//                        todo=>
//                        <tr>
//                        <td>{todo.id}</td>
//                        <td>{todo.description}</td>
//                        <td>{todo.done.toString()}</td>
//                        <td>{todo.date.toString()}</td>
//                        </tr>
                      
//                     )
                   
//                    }
                     
//                </tbody>
//            </table>

//     </div> );
//     }
// }

 

 




 
export default TodoApp;