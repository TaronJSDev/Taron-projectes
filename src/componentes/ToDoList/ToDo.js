import React, { Component } from "react";
import Input from "../INPUT/Input";
import { idgen } from "../Idgenerator";
import Task from "../TASK/Task";
import { Button } from "react-bootstrap";
import classes from "todo.css";

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

  checkedIdes = (Id) => () => {
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
    const checkedTaskIdes = new Set(this.state.checkedTaskIdes);
    let task = this.state.task;
    checkedTaskIdes.forEach((id) => {
      task = task.filter((tasks) => tasks.id != id);
    });
    this.setState({
      task: task,
      checkedIdes: new Set(),
    });
  };

  deletTaskFromSet = (id) => () => {
    let task = this.state.task;
    task = task.filter((elem) => elem.id != id);
    this.setState({
      task: task,
    });
  };

  render() {
    const newTask = this.state.task.map((elem) => (
      <Task
        key={elem.id}
        tasktexst={elem.taskText}
        onCheckChange={this.checkedIdes(elem.id)}
        deletTask={this.deletTaskFromSet(elem.id)}
      />
    ));

    return (
      <div>
        <Input onAddClic={this.addClickHandeler} />
        {newTask}
        {/* <button onClick={this.removeHandeler}>remove</button> */}
        <Button
          variant="primary"
          onClick={this.removeHandeler}
          className={classes.removebtn}
        >
          remove
        </Button>
      </div>
    );
  }
}
