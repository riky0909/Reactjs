import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor called");
        this.state={counter:0}
    }
    btnclick=()=>{
        // console.log("btn called");
        this.setState({counter:this.state.counter+1})
    }

    // componentWillMount() {
    //     console.log("componentWillMount");
    // }

    componentDidMount() {
        setTimeout(() => {
            console.log("componentDidMount");
        }, 4000);
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps");
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        console.log("nextProps",nextProps);
        console.log("nextState",nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate");
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        console.log("prevProps",prevProps);
        console.log("prevState",prevState);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");
        return (
            <>
            <h4>{this.state.counter}</h4>
            <button onClick={this.btnclick}>Click Me</button>
            </>
        );
    }
}
export default LifeCycle;