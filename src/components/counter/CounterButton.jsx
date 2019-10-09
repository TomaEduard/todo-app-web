import React, {Component} from 'react';
import './CounterButton.css';


class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter : 0,
        }
    }

    render() {
        return (
        
            <div className="counter">
              
                <CounterButton by= {1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by= {5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by= {10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by= {100} incrementMethod={this.increment} decrementMethod={this.decrement}/>

                <span className="count">
                    {this.state.counter}
                </span>

                <div>
                    <button className="reset" onClick={this.reset}>Reset</button>
                </div>

            </div>
        );
    }

    // function increment () {
    increment = (by) => {
        console.log("increment from parent - by: ", by)

        this.setState( (prevState) => {
            return {counter: prevState.counter + by}
        });

        // this.setState({
        //     counter: this.state.counter + by,
        // });
    }

    decrement = (by) => {
        console.log("decrement from parent - by: ", by)

        this.setState( (prevState) => {
            return {counter: prevState.counter - by}
        });

        // this.setState({
        //     counter: this.state.counter + by,
        // });
    }

    reset = () => {
        this.setState({
            counter: 0
        })
    }
}

class CounterButton extends Component {

    // Define the initial state in a constructor
    constructor() {
        super();
        // this.state = {
        //     counter : 0,
        // }
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
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

    // function increment () {
    increment = () => {
        console.log("increment from child!");

        // this.setState({
        //     counter: this.state.counter + this.props.by,
        // });
        this.props.incrementMethod(this.props.by);
    }

    decrement = () => {
        console.log("increment from child!");

        // this.setState({
        //     counter: this.state.counter - this.props.by,
        // });
        this.props.decrementMethod(this.props.by);
    }

}

CounterButton.defaultProps = {
    by : 1,
}
  
export default Counter;