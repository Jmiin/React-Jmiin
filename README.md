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