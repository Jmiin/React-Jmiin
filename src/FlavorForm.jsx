import React, { Component } from 'react'

export default class FlavorForm extends Component {

    constructor(props) {
        super(props);
        this.state = {selectValue: 'coconut'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({selectValue: event.target.value});
      }
    
      handleSubmit(event) {
        console.log('你喜欢的风味是: ' + this.state.selectValue);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              选择你喜欢的风味:
              <select value={this.state.selectValue} onChange={this.handleChange}>
                <option value="grapefruit">葡萄柚</option>
                <option value="lime">酸橙</option>
                <option value="coconut">椰子</option>
                <option value="mango">芒果</option>
              </select>
            </label>
            <input type="submit" value="提交" />
          </form>
        );
      }
}
