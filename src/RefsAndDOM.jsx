import React, { Component } from 'react'

export default class RefsAndDOM extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return <div ref={this.myRef} />;
    }

}
