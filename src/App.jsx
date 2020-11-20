import React from 'react';
import SetStateDemo from './setStateDemo';
// import MyNav from './MyNav';
// import StateComponent from './StateComponent';
// import ComponentLife from './ComponentLife';

export default class App extends React.Component {

    constructor(){
        super();
        this.state ={
            title: "文本1"
        }

    }

    updateTitle = () =>{
        let title = this.state.title;
        this.setState({
            title: title+="a"
        })
    }

    render() {
        // const nav1 = ["a", "b"];
        // const nav2 = ["a", "c"];
        return (
            /*  <div>
                 <MyNav nav={nav1} title = "A"/>
                 <MyNav nav={nav2} title = "B"/>
             </div> */
            // <StateComponent/>
            <div>
                {/* <ComponentLife title = {this.state.title} /> */}
                {/* <button onClick = {this.updateTitle}>修改title</button> */}
                <SetStateDemo />
            </div>
           
        )
    }
}