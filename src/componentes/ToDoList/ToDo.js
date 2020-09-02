import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import InputModal from "../INPUTOREDITMODAL/InputOrEditModal";
import Task from "../TASK/Task";

export default class ToDo extends Component {
  state = {
    task: [],
    modalOpenOrClose: false,
    currentTaskIndes: null,
  };

  componentDidMount() {
    fetch("http://localhost:3001/tasks", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ task: data });
      });
  }

  openModal = () => {
    this.setState({ modalOpenOrClose: true });
  };

  closeModal = () => {
    this.setState({ modalOpenOrClose: false });
  };

  addingNewTask = (fullTask) => {
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      body: JSON.stringify(fullTask),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          task: [...this.state.task, response],
          modalOpenOrClose: false,
        });
      });
  };

  modalEdit = (id) => {
    this.setState({
      currentTaskIndes: this.state.task.findIndex((elem) => elem.id === id),
      modalOpenOrClose: true,
    });
  };

  render() {
    const { modalOpenOrClose, task, currentTaskIndes } = this.state;
    const taskList = task.map((task) => (
      <Task key={task.id} fullTask={task} onEditModal={this.modalEdit} />
    ));
    return (
      <Container>
        <Button onClick={this.openModal}>Add Task</Button>
        <InputModal
          type="add"
          modalClose={this.closeModal}
          open={modalOpenOrClose}
          newTaskAdding={this.addingNewTask}
        />
        <InputModal
          type="edit"
          date={task[currentTaskIndes]}
          modalClose={this.closeModal}
          open={modalOpenOrClose}
          newTaskAdding={this.addingNewTask}
        />
        <Row>{taskList}</Row>
      </Container>
    );
  }
}
