import React from "react";
import ToDoListItem from "./ToDoListItem";

export default class ToDoList extends React.Component {

  constructor() {
    super();
    this.state = {
      value: '',
      data: ['Finish react training videos','Finish assignments']
    };
    this.handleChange = this.handleChange.bind(this);
    this.addListItem = this.addListItem.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addListItem(e) {
    this.setState({value: e.target.value, data: this.state.data.concat([this.state.value])});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.addListItem}>ADD</button>
        <ToDoListItem data={this.state.data}/>
      </div>
    );
  }
}
