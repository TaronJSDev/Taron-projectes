import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";

export default class Task extends Component {
  state = {
    inputTaskText: this.props.value,
    editedValue: this.props.edited,
    isEditedTask: false,
  };

  onEditClicHandeler = () => {
    this.setState({ isEditedTask: true });
  }; //true

  onEditCancelClicHandeler = () => {
    this.setState({ isEditedTask: false, inputTaskText: this.props.value });
  }; //true

  inputEditHandeler = (event) => {
    this.setState({ inputTaskText: event.target.value });
  };

  onEditSaveClicHandeler = () => {
    this.props.saveEditedTask(this.state.inputTaskText);
    this.setState({ isEditedTask: false });
  };

  onDeleteTask = () => {
    this.props.deleteCurrontTask();
  };

  showMoadal = () => {
    this.props.onshowModal();
  };

  render() {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <input
              type="checkbox"
              onChange={this.props.checkboxChange}
              checked={this.props.isTaskCheched}
            ></input>

            {this.state.isEditedTask ? (
              <>
                <Card.Text>
                  <input
                    value={this.state.inputTaskText}
                    onChange={this.inputEditHandeler}
                  ></input>
                </Card.Text>
                <Button variant="primary" onClick={this.onEditSaveClicHandeler}>
                  Save
                </Button>
                <Button
                  variant="primary"
                  onClick={this.onEditCancelClicHandeler}
                >
                  {" "}
                  Cancel{" "}
                </Button>{" "}
              </>
            ) : (
              <>
                <Card.Text>{this.state.inputTaskText}</Card.Text>
                <Button variant="primary" onClick={this.onEditClicHandeler}>
                  Edit
                </Button>
                <Button variant="primary" onClick={this.onDeleteTask}>
                  {" "}
                  X{" "}
                </Button>
              </>
            )}

            <Col>
              <Button variant="primary" onClick={this.showMoadal}>
                Show All
              </Button>
            </Col>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
