import React, { Component } from "react";
import Task from "./Task";
export default class Todo extends Component {
  state = {
    inpval: "",
    task: [],
  };

  inputchange = (event) => {
    this.setState({
      inpval: event.target.value,
    });
  };

  btnClic = () => {
    this.setState({
      task: [...this.state.task, { task: this.state.inpval }],
      inpval: "",
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.inputchange}></input>
        <button onClick={this.btnClic}>Add</button>
        <Task task={this.state.task} />
      </div>
    );
  }
}
