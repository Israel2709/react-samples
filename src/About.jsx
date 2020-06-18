import React, { Component } from 'react';

export default class About extends Component {
    constructor(){
        super();
        this.state = {
            dispose:false
        }
        this.productClickHandler = this.productClickHandler.bind(this)
    }

    productClickHandler(event){
        event.stopPropagation()
        this.setState({ dispose : !this.state.dispose})
    }

    

    render(){
        return(
            <div className="border border-primary p-3" onClick={this.productClickHandler}>
                <span className="mr-3">{this.props.name}</span>
                {
                   !this.state.dispose ? <span>ok</span> : <span data-user-key={this.props.userKey} onClick={this.props.trashClickHandler}>trash</span>
                }
                
            </div>
        )
    }
}