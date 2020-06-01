import React, { Component } from "react";
import { Col, InputGroup, FormControl, Button } from "react-bootstrap";

export default class Input extends Component {
  state = {
    inputValue: "",
  };

  inputChengeOfInput = (event) => {
    this.setState({ inputValue: event.target.value });
  }; //true

  addBtnClic = () => {
    this.props.addTask(this.state.inputValue);
    this.setState({ inputValue: "" });
  }; //true

  render() {
    return (
      <Col>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            value={this.state.inputValue}
            onChange={this.inputChengeOfInput}
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              disabled={!this.state.inputValue ? true : false}
              onClick={this.addBtnClic}
            >
              Add
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    );
  }
}
