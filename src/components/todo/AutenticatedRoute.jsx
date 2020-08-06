import React, { Component } from 'react';
import {Redirect, Route} from 'react-router-dom'
import AuthentiactionService from './AuthenticationService.js'
class AutenticateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
       if(AuthentiactionService.isUserLogin()){
          return <Route {...this.props}></Route>
       }else{
          return <Redirect path="/login"></Redirect>
       }
    }
}
 
export default AutenticateRoute;