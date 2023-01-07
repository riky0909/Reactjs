
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class API extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state={
            userdata:'',
            data:'loading...',
            status:'pending'
        }
    }
    componentDidMount() {
console.log("componentDidMount");
setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then(response=>{
        console.log(response);
        this.setState({userdata:response,status:'complited'})
    }).catch(error=>{
        console.log(error);
    })
}, 3000);
    }

    // btnclick=()=>{
        // this.setState({data:'refresh'})
    // }
    render() {
        console.log("render");
        return (
            <>
            {this.state.status!='complited'?'loading':'will ne print'}
            {/* {this.state.data} */}
            {/* <button onClick={this.btnclick}>click me</button> */}
            <h1>ternary operator ma (?)-jo condition true hoy to,and (:) no use (?) a condition true hoy to tene print karva mate(amal karva mate).</h1>
            </>
        );
    }
}
export default API;