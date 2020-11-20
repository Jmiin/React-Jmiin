import React from 'react';

//用类的形式创建组件
export class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

export default Welcome;