import React, { Component } from 'react';

class LogoutComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {  }
    }
    render() { 
      return ( 
        <>
        <h1>You are out</h1>
      <div className="container">
        Thanks for using!
      </div>
      </>);
    }
  }
  export default LogoutComponent