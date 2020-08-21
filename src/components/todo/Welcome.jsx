import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import HelloService from '../../api/todo/HelloService.js'

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            WelcomeMsg:""
         }
    }
RetriveWelcomeMessage=()=>{
    // HelloService.getWelcomeMessage()
    // .then(response=>this.setState({WelcomeMsg:response.data}))
    HelloService.getWelcomeName(this.props.match.params.userName)
    .then(response => this.setState({WelcomeMsg:response.data}))
    .catch(error=>this.HandleError(error))
    
    
}
HandleError=(error)=>{
    console.log(error.response);
    let errorMsg = '';
    if(error.message){
        errorMsg += error.message
    }
    if(error.response&&error.response.data.message){
        errorMsg += error.response.data.message
    }
    this.setState({WelcomeMsg:errorMsg})
}
    render() { 
    return ( <>
    <h1>Welcome!</h1>
    <div className="container">Welcome {this.props.match.params.userName}'s website,todos to see <Link to="/todo">here</Link></div> 
    <div className="container">
        <button className="btn btn-success" onClick = {this.RetriveWelcomeMessage}>Click here to get welcome message</button>
    <div>{this.state.WelcomeMsg} </div>
        </div> 
    </>);
    
    }
}
export default Welcome