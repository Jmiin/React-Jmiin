import { Anchor, Badge, Avatar } from 'hzero-ui';
import 'hzero-ui/dist/hzero-ui.css';
import React from 'react';

import { Button } from 'antd';
 


const { Link } = Anchor;


export default class HzeroUi extends React.Component {


    render() {
        return (
            <div style={{ margin: 100 }}  >
                <Anchor style={{ margin: 20, }} showInkInFixed={true}>
                    <Link href="#components-anchor-demo-basic" title="A" />
                    <Link href="#components-anchor-demo-fixed" title="B" />
                    <Link href="#API" title="API">
                        <Link href="#Anchor-Props" title="C" />
                        <Link href="#Link-Props" title="D" />
                    </Link>
                </Anchor>
                <div>
                    <span style={{ marginRight: 24 }}>
                        <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
                    </span>
                </div>
                <div className="App">
                    <Button type="primary">Button</Button>
                </div>
            </div>
        )
    }
}
