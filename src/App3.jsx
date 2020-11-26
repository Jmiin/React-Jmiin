import React, { Component } from 'react'
import Home from "./pages/Home";
import My from "./pages/My";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

/**
 * HashRouter：锚点链接
 * BrowserRouter：h5 新特性 / history.push  上线之后需要后台做一些处理：重定向
 */
export default class App3 extends Component {
    render() {
        return (
            <div>
                {/* <Home />
                <My /> */}

                <Router>
                    <Link to="/home">Home</Link>
                    
                    <Link to="/my">My</Link>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/my" component={My}></Route>
                </Router>
            </div>
        )
    }
}
