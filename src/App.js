import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import FisrtComp from './components/FistComp'
import SecondComp from './components/SecondComp'
//import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Counter /> */}
       <TodoApp/>
       </div>
    );
  }
}
class Learnexpample extends Component {
  render() {
    return (
      <div className="App">
        <FisrtComp />
        <SecondComp />
      </div>
    );
  }
}



 



export default App;


