import React from 'react';
import { DatePicker, Button } from 'hzero-ui';
import 'hzero-ui/dist/hzero-ui.css';
import RegistrationForm from './RegistrationForm';

import SetStateDemo from './setStateDemo';
// import MyNav from './MyNav';
// import StateComponent from './StateComponent';
// import ComponentLife from './ComponentLife';

const { RangePicker } = DatePicker;

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "文本1"
        }

    }

    updateTitle = () => {
        let title = this.state.title;
        this.setState({
            title: title += "a"
        })
    }

    onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    onOk(value) {
        console.log('onOk: ', value);
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
                <DatePicker />
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <div>
                    <div>
                        <DatePicker
                            showTime
                            format="YYYY-MM-DD HH:mm:ss"
                            placeholder="Select Time"
                            onChange={this.onChange}
                            onOk={this.onOk}
                        />
                        <br />
                        <RangePicker
                            showTime={{ format: 'HH:mm' }}
                            format="YYYY-MM-DD HH:mm"
                            placeholder={['Start Time', 'End Time']}
                            onChange={this.onChange}
                            onOk={this.onOk}
                        />
                    </div>
                </div>
                <div >
                    <RegistrationForm />
                </div>
            </div>


        )
    }
}