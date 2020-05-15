import React, { Component } from "react";
import { idgen } from "../Idgenerator";
// import Task from "./Task";

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
    if (this.state.inputvalue) {
      taskbtn.push({
        id: idgen(),
        taskpoint: this.state.inputvalue,
      });
    }

    this.setState({
      inputvalue: "",
      task: taskbtn,
    });
  };

  del = (id) => {
    const newlist = this.state.task.filter((el) => {
      return el.id != id;
    });
    this.setState({
      task: newlist,
    });
  };

  render() {
    const list = this.state.task.map((el) => {
      return (
        <div>
          <p key={el.id} onClick={() => this.del(el.id)}>
            {el.taskpoint}
          </p>
          {/* <button onClick={this.del}>del</button> */}
        </div>
      );
    });

    return (
      <div>
        <input
          value={this.state.inputvalue}
          onChange={this.inputchangehandeler}
        ></input>
        <button onClick={this.btnchang}>Add</button>
        {list}
      </div>
    );
  }
}
