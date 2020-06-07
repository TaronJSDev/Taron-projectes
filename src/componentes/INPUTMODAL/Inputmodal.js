import React, { Component } from "react";
import {
  Modal,
  InputGroup,
  FormControl,
  Button,
  Col,
  Row,
} from "react-bootstrap";

export default class Inputmodal extends Component {
  state = {
    title: "",
    description: "",
    date: "",
    isNewTaskAdded: false,
  };

  modalClose = () => {
    this.setState({
      isNewTaskAdded: false,
      title: "",
      description: "",
      date: "",
    });
  }; //true

  addNewTask = () => {
    this.setState({ isNewTaskAdded: true });
  }; //true

  addTitile = (event) => {
    this.setState({ title: event.target.value });
  }; //true
  addDescription = (event) => {
    this.setState({ description: event.target.value });
  }; //true

  taskDataChange = (event) => {
    this.setState({ date: event.target.value });
  }; //true

  savetask = () => {
    const fullTask = {
      title: this.state.title,
      description: this.state.description,
    };
    this.props.onSaveNewTask(fullTask);
    this.setState({
      title: "",
      description: "",
      date: "",
      isNewTaskAdded: false,
    });
  }; //true

  render() {
    return (
      <Row>
        {this.state.isNewTaskAdded ? (
          <Col>
            <Modal.Dialog>
              <Modal.Header closeButton onClick={this.modalClose}>
                <Modal.Title>Add task modal</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Title"
                    value={this.state.title} //true
                    onChange={this.addTitile} //true
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Task description"
                    value={this.state.description} //true
                    onChange={this.addDescription} //true
                  />
                </InputGroup>

                <input type="date" onChange={this.taskDataChange}></input>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={this.modalClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={this.savetask}
                  disabled={!this.state.title}
                >
                  Save task
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Col>
        ) : (
          <Col>
            <Button onClick={this.addNewTask}>Add new task</Button>
          </Col>
        )}
      </Row>
    );
  }
}
