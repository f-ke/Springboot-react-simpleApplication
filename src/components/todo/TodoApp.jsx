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
import TodoComponent from'./TodoComponent'
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
                <AutenticateRoute path= "/todo/:id" component={TodoComponent}/>
                {/* todo/:id must front of todo */}
                <AutenticateRoute path= "/todo" component={TodoList}/>
                
    
                <Route  component={ErrorComponent}/>
            </Switch>
               <FooterComponent/> 
            </>
            </Router>
            
        </div> );
    }
}







 
export default TodoApp;