import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {

    constructor(){
        super();
        this.state ={
            value : ""
        }
    }
    
    clickHandler = (data) =>{
        console.log(data);
        this.setState({
            value: data
        })
    }

    render() {
        return (
            <div>
                Parent: {this.state.value}
                <Child title="子标题" onMyEvent={this.clickHandler} />
            </div>
        )
    }
}
