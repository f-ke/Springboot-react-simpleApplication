import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthentiactionService from './AuthenticationService.js'
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    return ( <>
    <h1>Welcome!</h1>
    <div className="container">Welcome {this.props.match.params.userName}'s website,todos to see <Link to="/todo">here</Link></div> 
    </>);
    
    }
}
export default Welcome