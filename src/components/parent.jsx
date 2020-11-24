import React, { Component } from 'react'
import Child1 from './child1'
import Child2 from './child2'


export default class Parent extends Component {

    constructor() {
        super();
        this.state = {
            money: 3
        }
    }

    changeHandler=(event)=>{
        this.setState({
            money: event.target.value
        })
        console.log(this.state.money);
    }

    render() {
        return (
            <div>
                <p>Parent</p>
                <input type="text" value={this.state.money} onChange={this.changeHandler}/>
                <br/>
               人民币:<Child1 money={this.state.money} />
               美元:<Child2 money={this.state.money} />

            </div>
        )
    }
}
