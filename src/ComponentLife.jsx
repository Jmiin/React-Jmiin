import React from 'react';

export default class ComponentLife extends React.Component {

    /**
     * * Move code with side effects to componentDidMount, and set initial state in the constructor.
     * Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.
     */
    // componentWillMount() {
    //     console.log("componentWillMount");
    // }

    componentDidMount() {
        console.log(this);
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    componentDidCatch() {
        console.log("componentDidCatch");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    constructor() {
        super();
        this.state = {
            s1: 1,
        }
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }

    updateState = () => {
        const s1 = this.state.s1 + 1;
        this.setState({
            s1: s1
        })
    }

    /**
     * 
     * Move data fetching code or side effects to componentDidUpdate.
     * If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
     * Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.
     */
    // componentWillReceiveProps() {
    //     console.log("componentWillReceiveProps");
    // }

    render() {
        return (
            <div>
                生命周期函数
                <h3>{this.state.s1}</h3>
                <h3>{this.props.title}</h3>
                <button onClick={this.updateState}>修改组件</button>
            </div>
        )
    }
}