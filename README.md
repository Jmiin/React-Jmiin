## 创建/启动项目

npx create-react-app you-app-name
cd you-app-name
npm start

## 环境介绍
node_modules:导入的模块


## React基础知识
### JSX语法介绍

JSX语法：JavaScript + XML语法（HTML）
解读jsx语法：遇到<>按照HTML语法解析，遇到{}按照JS解析

### 元素渲染

元素是构成 React 应用的最小砖块。
React 元素是不可变对象。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。

### 组件

组件的后缀可以是js，也可以是jsx

### props属性
组件的复用性很重要

### 事件处理
1. this问题
2. 向事件处理程序传递参数

### state

### React 生命周期函数
函数列表：
    componentWillMount: 在组件渲染之前执行（React 17弃用）
    componentDidMount: 在组件渲染之后执行
    shouldComponentUpdate: 返回true和false, true代表允许改变, false代表不允许改变
    componentWillUpdate: 数据在改变之前执行（state,props）
    componentDidUpdate: 数据修改完成（state,props）
    componentWillRevieceProps: props发送改变执行
    componentWillUnmount: 组件卸载前执行
父子组件之间的相互调用

### setState更新是同步还是异步

1.setState会引起视图的重绘
2.在可控的情况下是异步，在非可控的情况下是同步

### 条件渲染
在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容。
React 中的条件渲染和 JavaScript 中的一样，使用 JavaScript 运算符 if 或者条件运算符去创建元素来表现当前的状态，然后让 React 根据它们来更新 UI。
[js条件运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

```js
//三目运算符
var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```
### 列表 & key

我们使用 map() 函数处理 ，配上key使用

### 表单

1.受控组件
2.非受控组件

> 有时使用受控组件会很麻烦，因为你需要为数据变化的每种方式都编写事件处理函数，并通过一个 React 组件传递所有的输入 state。当你将之前的代码库转换为 React 或将 React 应用程序与非 React 库集成时，这可能会令人厌烦。在这些情况下，你可能希望使用非受控组件, 这是实现输入表单的另一种方式。因为非受控组件将真实数据储存在 DOM 节点中，所以在使用非受控组件时，有时候反而更容易同时集成 React 和非 React 代码。如果你不介意代码美观性，并且希望快速编写代码，使用非受控组件往往可以减少你的代码量。否则，你应该使用受控组件。

#### Refs & DOM

> Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。

下面是几个适合使用 refs 的情况：

* 管理焦点，文本选择或媒体播放。
* 触发强制动画。
* 集成第三方 DOM 库。

### 状态提升

在 React 中，将多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，便可实现共享 state。这就是所谓的“状态提升”。

### 组合 & 继承
this.props.children

### 使用 PropTypes 进行类型检查
```js
    import PropTypes from 'prop-types';

    class Greeting extends React.Component {
    render() {
        return (
        <h1>Hello, {this.props.name}</h1>
        );
    }
    }

    Greeting.propTypes = {
    name: PropTypes.string
    };
```
PropTypes 提供一系列验证器，可用于确保组件接收到的数据类型是有效的。在本例中, 我们使用了 PropTypes.string。当传入的 prop 值类型不正确时，JavaScript 控制台将会显示警告。出于性能方面的考虑，propTypes 仅在开发模式下进行检查。

#### 限制单个元素

通过 PropTypes.element 来确保传递给组件的 children 中只包含一个元素。
```jsx
MyComponent.propTypes = {
  children: PropTypes.element.isRequired
};
```

#### 默认 Prop 值
```jsx
// 指定 props 的默认值：
Greeting.defaultProps = {
  name: 'Stranger'
};

// 渲染出 "Hello, Stranger"：
ReactDOM.render(
  <Greeting />,
  document.getElementById('example')
);
```
用途：提示程序的健壮性，主要用于声明字段类型（规范）

### fetch 网络请求

[参考](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

### react 跨域解决方案

[参考](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md)

### React Router

[reactrouter](https://reactrouter.com/web/guides/quick-start)

1.安装

> cnpm install react-router-dom --save

安装完成后会在package.json中

2.路由的作用：
    单页面应用(SPA)，路由跳转：切换显示视图

 
###