import React, { PureComponent } from 'react'

export default class ProxyDemo extends PureComponent {

    componentDidMount(){
        /**
         * 跨越问题产生原因之一：不同的端口
         * Access to fetch at 'http://localhost:3100/api/list' from origin 'http://localhost:3000' has been blocked by CORS policy: 
         * No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs,
         *  set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
         * 
         * //https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md
         */
        fetch('/api/list')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }

    render() {
        return (
            <div>
                hello
            </div>
        )
    }
}
