import React, { Component } from 'react'

export default class Child extends Component {

    clickHandle =() =>{
        this.props.onMyEvent("父标题");
    }

    render() {
        return (
            <div>
                Child：{this.props.title}
                <button onClick = {this.clickHandle}>传递数据给Parent</button>
            </div>
        )
    }
}
