import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthentiactionService from './AuthenticationService.js'
class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName: '',
            passWord:'password',
            LoginSucess:false,
            LogtinFailed:false 
          }
    }
    checkLogin=()=>{
        // if(this.state.userName==='username' && this.state.passWord==='password'){
        //     AuthentiactionService.registerLoginSucess(this.state.userName, this.state.passWord)
        //     this.props.history.push(`/welcome/${this.state.userName}`)
        //     this.setState(
        //         {
        //             LoginSucess:true,
        //             LogtinFailed:false
        //         }
        //         )
        // }else{
        //     this.setState(
        //         {
        //             LoginSucess:false,
        //             LogtinFailed:true
        //         }
        //         )

        // }
         AuthentiactionService.executeBasicAuth(this.state.userName,this.state.passWord)
         .then(
          ()=> { AuthentiactionService.registerLoginSucess(this.state.userName, this.state.passWord)
            this.props.history.push(`/welcome/${this.state.userName}`)}
         ).catch(
             ()=>{
                this.setState(
                    {
                        LoginSucess:false,
                        LogtinFailed:true
                    }
                )
             }
         )
    }
    render() { 
        return ( <>
        <h1>Login</h1>
        <div className="container">
            {this.state.LoginSucess&&<div>sucess</div>}
            {this.state.LogtinFailed&&<div className="alert alert-warning">Failed</div>}
            UserName:<input type="text" name = "userName" value = {this.state.userName} onChange={this.handleChange}/>
            PassWord:<input type="password" name = "passWord" value = {this.state.passWord} onChange = {this.handleChange}/>
            <button onClick={this.checkLogin} className="btn btn-primary" style={{marginLeft:20}}>Login</button>
            
        </div> 
        </>);
    }
    // handleUserName=(event)=>{
    //     console.log(event.target.value);
    //     this.setState({
    //         userName:event.target.value
    //     })
    // }
    // handlePassWord=(event)=>{
    //     console.log(event.target.value);
    //     this.setState({
    //         passWord:event.target.value
    //     })
    // }
    //A WAY TO HANDLE ALL CHANGE 
    handleChange=(event)=>{
        console.log(event.target.name);
        this.setState({
            [event.target.name]:event.target.value
        })
    }
}
export default LoginComponent