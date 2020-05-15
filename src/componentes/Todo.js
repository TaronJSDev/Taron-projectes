import React, { Component } from "react";
import { idgen } from "../Idgenerator";
import Task from "./Task";

export default class Todo extends Component {
  state = {
    inputvalue: "",
    task: [],
  };

  inputchangehandeler = (event) => {
    this.setState({
      inputvalue: event.target.value,
    });
  };

  btnchang = () => {
    const taskbtn = [...this.state.task];
    taskbtn.push({
      id: idgen(),
      taskpoint: this.state.inputvalue,
    });
    this.setState({
      inputvalue: "",
      task: taskbtn,
    });
  };

  btndelhandeler = (event) => {
    // console.log(event.target.id);
  };

  render() {
    const list = this.state.task.map((el) => {
      <Task el={el} />;
    });
    console.log(list);

    return (
      <div>
        <input
          value={this.state.inputvalue}
          onChange={this.inputchangehandeler}
        ></input>
        <button onClick={this.btnchang}>Add</button>
      </div>
    );
  }
}
