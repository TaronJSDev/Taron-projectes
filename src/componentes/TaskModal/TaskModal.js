import React, { Component } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";

export default class TaskModal extends Component {
  state = {
    task: this.props.onShowCurrentTask,
    isModalEdited: false,
  };

  modalClose = () => {
    this.props.modalCloseHandeler();
  };

  modalEdit = () => {
    this.setState({ isModalEdited: true });
  };

  modalInputChange = (event) => {
    this.setState({ task: event.target.value });
  };

  render() {
    return (
      <Row>
        <Col>
          <Modal.Dialog>
            <Modal.Header closeButton onClick={this.modalClose}>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            {this.state.isModalEdited ? (
              <Modal.Body>
                <input
                  value={this.state.task}
                  onChange={this.modalInputChange}
                ></input>
              </Modal.Body>
            ) : (
              <Modal.Body>{this.state.task}</Modal.Body>
            )}
            <Modal.Footer>
              {this.state.isModalEdited ? (
                <>
                  <Button variant="secondary" onClick={this.modalClose}>
                    {" "}
                    Close
                  </Button>
                  <Button variant="primary">Save changes</Button>
                </>
              ) : (
                <Button variant="primary" onClick={this.modalEdit}>
                  Edit
                </Button>
              )}
            </Modal.Footer>
          </Modal.Dialog>
        </Col>
      </Row>
    );
  }
}
