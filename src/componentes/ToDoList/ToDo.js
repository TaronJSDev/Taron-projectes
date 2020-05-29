import React, { Component } from "react";
import Input from "../INPUT/Input";
import { idgen } from "../Idgenerator";
import Task from "../TASK/Task";
import { Button, Container, Row } from "react-bootstrap";
import classes from "./todo.module.css";

export default class ToDo extends Component {
  state = {
    task: [],
    checkedTaskIdes: new Set(),
    isAllSelected: false,
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
      task = task.filter((tasks) => tasks.id !== id);
    });
    this.setState({
      task: task,
      checkedIdes: new Set(),
    });
  };

  deletTaskFromSet = (id) => () => {
    let task = this.state.task;
    task = task.filter((elem) => elem.id !== id);
    this.setState({
      task: task,
    });
  };

  selectall = () => {
    const selectAllTask = new Set(this.state.task);
    this.setState({ isAllSelected: true, checkedTaskIdes: selectAllTask });
  };

  deleteAllTask = () => {
    this.setState({
      isAllSelected: false,
      checkedTaskIdes: new Set(),
      task: [],
    });
  };

  cancelAllSelect = () => {
    this.setState({
      isAllSelected: false,
      checkedIdes: new Set(),
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
        <Container>
          <Row> {newTask}</Row>
        </Container>

        <div className={classes.removeButton}>
          {this.state.isAllSelected ? (
            <>
              <Button variant="primary" onClick={this.deleteAllTask}>
                delete all
              </Button>
              <Button variant="primary" onClick={this.cancelAllSelect}>
                cancel
              </Button>{" "}
            </>
          ) : (
            <>
              <Button variant="primary" onClick={this.removeHandeler}>
                remove
              </Button>
              <Button variant="primary" onClick={this.selectall}>
                select all
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }
}
