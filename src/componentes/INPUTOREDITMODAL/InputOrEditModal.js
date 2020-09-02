import React, { Component } from "react";
import {
  Row,
  Col,
  Modal,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

export default class InputOrEditModal extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      title: "",
      description: "",
      date: "",
    };

    this.state = this.initialState;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.open && !this.props.open) {
      this.setState(this.initialState);
    } else if (!prevProps.open && this.props.open) {
      this.setState(this.props.data);
    }
  }

  handleClose = () => {
    this.props.modalClose();
  };

  changeInputesInModal = (type) => (event) => {
    this.setState({ [type]: event.target.value });
  };

  addNewTask = () => {
    const { title, description, date } = this.state;
    const fullTask = {
      title,
      description,
      date,
    };

    this.props.newTaskAdding(fullTask);
  };

  render() {
    console.log(this.props.data);

    const { title, description, date } = this.state;
    return (
      <Row>
        <Col>
          <Modal show={this.props.open} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add new task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="title"
                  value={title}
                  onChange={this.changeInputesInModal("title")}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <FormControl
                  placeholder="description"
                  value={description}
                  onChange={this.changeInputesInModal("description")}
                />
              </InputGroup>

              <input
                type="date"
                onChange={this.changeInputesInModal("date")}
              ></input>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={this.addNewTask}
                disabled={!title}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    );
  }
}
