import React, { Component } from 'react';

export default class About extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            this.props.users.map( user => <h1>{user}</h1>)
        )
    }
}