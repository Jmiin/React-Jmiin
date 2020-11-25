import React, { PureComponent } from 'react';
import queryString from 'querystring';

export default class Fetch extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            children: [],
            res: ''
        }
    }

    componentDidMount() {
        /**
         * fetch 基于promise 
         */
        fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/modeling-methods.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                name: data.name,
                children: data.children,
                res: data
            })
        });

        /**
         * post
         * 
         * body 字符串类型
         */
        fetch('http://iwenwiki.com/api/blueberrypai/login.php',{
            method: 'POST',
            headers:{
                'content-type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json,text/plain,*/*'
            },
            body:queryString.stringify({
                user_id: '',
                password: '',
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                name: data.name,
                children: data.children,
                res: data
            })
        });


    }

    render() {

        //const { xxx } = this.state;
        // 上面的写法是es6的写法，其实就相当于：
        // const xxx = this.state.xxx
        const { name } = this.state;
        const { children } = this.state;
        //const { res } = this.state;

        return (
            <div>

                {
                    children.length > 0 ?
                        <div>
                            name:{name}
                            <ul>
                                children: {children.map((element, index) => {
                                return <li key={index}> {element.name}</li>
                            })}
                            </ul>

                        </div>
                        :
                        <div>wait ...</div>
                }
            </div>
        )
    }
}
