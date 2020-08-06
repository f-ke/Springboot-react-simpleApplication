import React, { Component } from 'react';
import propeTypes from 'prop-types'
import './Counter.css';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    render() { 
        return (<div>
            <CounterButton incrementMethod = {this.increment} decrementMethod = {this.decrement} by = {3}/>
            <CounterButton incrementMethod = {this.increment} decrementMethod = {this.decrement}  by = {4}/>
            <CounterButton incrementMethod = {this.increment} decrementMethod = {this.decrement} by = {5}/>
            <span className="count">{this.state.counter}</span>
              
        </div>  );
    }
    increment(by){
        this.setState(
            (preState)=>{
                return {
            counter:preState.counter+by
        }
        })
        

    }
    decrement(by){
        this.setState(
            (preState)=>{
                return {
            counter:preState.counter-by
        }
        })
        

    }
}
 

class CounterButton extends Component {
    constructor(props) {
        super(props);
        this.state = { counter:0}
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() { 
        return ( 
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
        {/* <span className="count">{this.state.counter}</span> */}
            </div>
         );
    }
    increment(){
        this.props.incrementMethod(this.props.by)
        // this.setState({
        //     counter:this.state.counter+this.props.by
        // })
    }
    decrement(){
        this.props.decrementMethod(this.props.by)
        // this.setState({
        //     counter:this.state.counter-this.props.by
        // })
    }
}
CounterButton.defaultProps= {
    by:1
  
}
CounterButton.propTypes={
by:propeTypes.number.isRequired

}
 
export default Counter;