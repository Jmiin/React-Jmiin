import React from 'react';

export default class SetStateDemo extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    inscrement = () => {
        let count = this.state.count;
        this.setState({
            count: count + 1
        },
            //同步获取state中的count
            () => {
                console.log("同步"+this.state.count);
            }
        );
        //异步获取state中的count
        console.log("异步",this.state.count);
    }

    render() {
        return (
            <div>
                setState 同步还是异步
                <p>{this.state.count}</p>
                <button onClick={this.inscrement}>修改</button>

            </div>
        )
    }
}