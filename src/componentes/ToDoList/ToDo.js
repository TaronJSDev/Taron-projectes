import React, { Component } from "react";
import Input from "../INPUT/Input";
import { idgen } from "../Idgenerator";
import Task from "../TASK/Task";

export default class ToDo extends Component {
  state = {
    task: [],
    checkedTaskIdes: new Set(),
  };

  addClickHandeler = (inputTaxt) => {
    const newtesk = [...this.state.task];
    newtesk.push({
      id: idgen(),
      taskText: inputTaxt,
    });
    this.setState({ task: newtesk });
  };

  checkedIdes = (Id) => {
    const newCheckIdes = new Set(this.state.checkedTaskIdes);
    if (newCheckIdes.has(Id)) {
      newCheckIdes.delete(Id);
    } else {
      newCheckIdes.add(Id);
    }
    this.setState({
      checkedTaskIdes: newCheckIdes,
    });
  };

  removeHandeler = () => {
    const checkedTaskIdes = this.state.checkedTaskIdes;
    const task = this.state.task;
    checkedTaskIdes.forEach((id) => {
      task = task.filter((task) => task.id != id);
    });
    this.setState({
      task: task,
      checkedIdes: new Set(),
    });
  };

  render() {
    const newTask = this.state.task.map((elem) => (
      <Task
        key={elem.id}
        tasktexst={elem.taskText}
        onCheckChange={this.checkedIdes(elem.id)}
      />
    ));

    return (
      <div>
        <Input onAddClic={this.addClickHandeler} />
        {newTask}
        <button onClick={this.removeHandeler}>remove</button>
      </div>
    );
  }
}
