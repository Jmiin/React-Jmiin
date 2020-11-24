import React, { Component } from 'react'

export default class Child1 extends Component {

    constructor(){
        super();
        this.input1 = React.createRef();
        this.state = {
            b: 1,
            input1: 1
         }
     }
 
     componentDidMount(){
         this.setState({
             b: this.props.money,
             input1: this.props.money
         })
     }

    changeHandler = (event) =>{
        this.setState({
            input1: event.target.value
        })
    }

    render() {
        return (
            <div>
                <p>{this.props.money}</p>
                <input type="text" value ={ this.state.input1 } onChange = {this.changeHandler }/>
            </div>
        )
    }
}
