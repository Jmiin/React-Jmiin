import React from 'react';

export default class KeyDemo extends React.Component {

    constructor() {
        super();
        this.state = {
            userinfo: [
                {
                    name: "A",
                    age: 20,
                    sex: "男",
                    jobs: ["java", "php", "js"]
                },
                {
                    name: "B",
                    age: 22,
                    jobs: ["java", "php", "js"],
                    sex: "女"
                },
                {
                    name: "C",
                    age: 21,
                    sex: "女",
                    jobs: ["java", "php", "js"]
                }
            ]
        }
    }

    clickHandler=()=>{
        this.setState({
            userinfo: this.state.userinfo.concat([{
                name:"D",
                age: 10,
                sex: "男",
                jobs: ["java"]
            }])
        })
    }

    render() {
        return (
            <div>
                列表渲染
                <ul>
                    {
                        // list遍历
                        this.state.userinfo.map((element, index) => {
                            return (
                                <li key={index}>
                                    <span>{element.name}</span>
                                    <span>{element.age}</span>
                                    <span> {element.sex}</span>
                                    <div>
                                        {element.jobs.map((childElement, childIndex) => {
                                            return (
                                                <span key={childIndex}>{childElement} </span>
                                            )
                                        })}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick= {this.clickHandler}>添加数据</button>
            </div>
        )
    }
}