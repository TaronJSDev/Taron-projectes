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
    let task = JSON.parse(JSON.stringify(this.state.task));
    task.task = event.target.value;
    this.setState({ task });
  };

  saveModal = () => {
    this.props.saveModalHendeler(this.state.task);
  };

  render() {
    return (
      <Row>
        <Col>
          <Modal.Dialog>
            <Modal.Header closeButton onClick={this.modalClose}>
              {/* <Modal.Title>Modal title</Modal.Title> */}
            </Modal.Header>

            {this.state.isModalEdited ? (
              <>
                <Modal.Body>
                  <input
                    value={this.state.task.task}
                    onChange={this.modalInputChange}
                  ></input>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.modalClose}>
                    {" "}
                    Close{" "}
                  </Button>
                  <Button variant="primary" onClick={this.saveModal}>
                    Save changes
                  </Button>
                </Modal.Footer>
              </>
            ) : (
              <>
                <Modal.Body>{this.state.task.task}</Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={this.modalEdit}>
                    {" "}
                    Edit
                  </Button>
                </Modal.Footer>
              </>
            )}
          </Modal.Dialog>
        </Col>
      </Row>
    );
  }
}
