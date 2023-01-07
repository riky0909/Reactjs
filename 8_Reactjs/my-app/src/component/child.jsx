import React, { Component } from 'react';

class child extends Component {
    render() {
        return (
            <>
            <h1>{this.props.title}</h1>
            </>
        );
    }
}

export default child;