import React, { Component } from 'react'

export default class FormDemo extends Component {

    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

    handlerSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.value);
    }

    onChangeHandler = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div>
                表单
                <form onSubmit={this.handlerSubmit}>
                    <input value={this.state.value} onChange={this.onChangeHandler} />
                    <input type="submit" value="提交"></input>
                </form>
            </div>
        )
    }
}
