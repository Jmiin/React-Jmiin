import React, { Component } from 'react'

export default class Child2 extends Component {

    constructor(){
        super();
         
        this.state = {
           b: 1,
           input2: 1
        }
    }

    componentDidMount(){
        this.setState({
            b: this.props.money*7,
            input2: this.props.money*7
        })
    }

    changeHandler = (event) =>{
        this.setState({
            input2: event.target.value
        })
    }

    render() {
        return (
            <div>
                 <p>{this.props.money*7}</p>
                <input type="text" value={this.state.input2} onChange={this.changeHandler} />
                </div>
        )
    }
}
