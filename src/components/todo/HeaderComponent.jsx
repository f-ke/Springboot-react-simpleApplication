import React, { Component } from 'react';
import { withRouter } from 'react-router';
import AuthentiactionService from './AuthenticationService.js'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const userLogin = AuthentiactionService.isUserLogin();
        console.log(userLogin)
        return (
            <header>
                <nav className ="navbar navbar-expand-md bg-dark navbar-dark ">
                    
                  <a className = "navbar-brand"href="">keke</a>
                   
                    <ul className = "navbar-nav">
                      { userLogin&&<li className="nav-link"><Link to="/welcome/keke"className="nav-link">Home</Link></li>}
                       {userLogin &&<li  className="nav-link"><Link to="/todo"className="nav-link">Todo</Link></li>}
                    </ul>
                    <ul class = "navbar-nav navbar-collapse justify-content-end">
                       { !userLogin &&<li  className="nav-link"><Link to="/login"className="nav-link">login</Link></li>}
                       {userLogin&&<li  className="nav-link"><Link to="/logout"className="nav-link" onClick={AuthentiactionService.logOut}>logout</Link></li>}
                    </ul>

                 </nav> 
            </header>
         );
    }
}
export default withRouter(HeaderComponent);