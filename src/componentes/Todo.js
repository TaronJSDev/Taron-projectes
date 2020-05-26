import React, { Component } from "react";
import { idgen } from "../Idgenerator";
import InputPart from "./InputPart";
import Task from "./Task";
// import Task from "./Task";

export default class Todo extends Component {
  state = {
    task: [],
  };

  addTask = (task) => {
    const newTask = [...this.state.task];
    newTask.push({
      id: idgen(),
      task: task,
    });

    this.setState({
      task: newTask,
    });
  };

  render() {
    const list = this.state.task.map((el) => {
      return <Task key={this.state.task.id} text={this.state.task.task} />;
    });

    return (
      <div>
        <InputPart onAddTask={this.addTask} />
        {list}
      </div>
    );
  }
}
