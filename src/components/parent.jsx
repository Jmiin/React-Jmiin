import React, { Component } from 'react'
// import Child1 from './child1'
// import Child2 from './child2'
import { Row, Col, Table, Input, Button, Icon, Steps } from 'hzero-ui';
import 'hzero-ui/dist/hzero-ui.css';
const data = [{
    key: '1',
    name: 'John Brown',
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Joe Black',
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Jim Green',
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Jim Red',
    address: 'London No. 2 Lake Park',
}];
const Step = Steps.Step;
export default class Parent extends Component {

    constructor() {
        super();
        this.state = {
            money: 3,
            searchText: '',
        }
    }

    changeHandler = (event) => {
        this.setState({
            money: event.target.value
        })
        console.log(this.state.money);
    }


    handleSearch = (selectedKeys, confirm) => () => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    }

    handleReset = clearFilters => () => {
        clearFilters();
        this.setState({ searchText: '' });
    }

    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                    <div className="custom-filter-dropdown">
                        <Input
                            ref={ele => this.searchInput = ele}
                            placeholder="Search name"
                            value={selectedKeys[0]}
                            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                            onPressEnter={this.handleSearch(selectedKeys, confirm)}
                        />
                        <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>Search</Button>
                        <Button onClick={this.handleReset(clearFilters)}>Reset</Button>
                    </div>
                ),
                filterIcon: filtered => <Icon type="smile-o" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
                onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
                onFilterDropdownVisibleChange: (visible) => {
                    if (visible) {
                        setTimeout(() => {
                            this.searchInput.focus();
                        });
                    }
                },
                render: (text) => {
                    const { searchText } = this.state;
                    return searchText ? (
                        <span>
                            {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
                                fragment.toLowerCase() === searchText.toLowerCase()
                                    ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
                            ))}
                        </span>
                    ) : text;
                },
            }, {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                filters: [{
                    text: 'London',
                    value: 'London',
                }, {
                    text: 'New York',
                    value: 'New York',
                }],
                onFilter: (value, record) => record.address.indexOf(value) === 0,
            }];
        return (
            <div>
                {/* <p>Parent</p>
                <input type="text" value={this.state.money} onChange={this.changeHandler}/>
                <br/>
               人民币:<Child1 money={this.state.money} />
               美元:<Child2 money={this.state.money} /> */}
                <div style={{ margin: 200 }}>

                    <Row>
                        <Col span={16} push={8}>
                            <div style={{ margin: 20 }}>
                                <Steps direction="vertical" current={1} >
                                    <Step title="Finished" description="This is a description." />
                                    <Step title="In Progress" description="This is a description." />
                                    <Step title="Waiting" description="This is a description." />
                                </Steps>
                            </div>

                        </Col>
                        <Col span={8} pull={18}>
                            <Table columns={columns} dataSource={data} />
                        </Col>
                    </Row>
                </div>


            </div>
        )
    }
}
