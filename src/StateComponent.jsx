import React from 'react'

export default class StateComponent extends React.Component {
    /**
     * 组件只能的状态：state
     * 以前我们操作页面的元素的变化，都是修改DOM，操作DOM
     * 但是有了React优秀的框架，我们不在推荐操作DOM，页面元素的改变使用State进行处理
     */

    constructor(props) {
        super(props);
        //定义状态
        this.state = {
            count: 10
        }

    }

    increment = () => {
        console.log(this);
        let count = this.state.count;
        this.setState({
            count:  count+= 1
        })
    }
    decrement = () => {
        let count = this.state.count;
        this.setState({
            count: count -= 1
        })
    }

    render() {


        return (
            <div>
                <h3>组件的State</h3>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>增加</button>
                <button onClick={this.decrement}>减少</button>
            </div>
        )
    }
}