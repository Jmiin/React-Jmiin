import React, { Component } from 'react'
import Home from "./pages/Home";
import My from "./pages/My";
import Ucenter from "./pages/Ucenter";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import NotFound from './pages/NotFound';

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
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/my">My</Link>
                        </li>
                        <li>
                            <Link to="/my/ucenter">ucenter</Link>
                        </li>
                        <li>
                            <Link to="/demo">demo</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/my/ucenter" component={Ucenter} ></Route>
                        <Route exact path="/" component={Home}></Route>
                        {/* {https://reactrouter.com/web/api/Route/strict-bool} */}
                        <Route strict exact path="/my" component={My}></Route>
                        <Route path="/demo" render={() => <div>demo</div>}></Route>
                        
                        <Route component={NotFound}></Route>
                        
                    </Switch>

                </Router>
            </div>
        )
    }
}
