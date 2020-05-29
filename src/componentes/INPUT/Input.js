import React, { Component } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

export default class Input extends Component {
  state = {
    valueOfInput: "",
  };

  inputChange = (event) => {
    this.setState({
      valueOfInput: event.target.value,
    });
  };

  addButtonClick = () => {
    this.props.onAddClic(this.state.valueOfInput);
    this.setState({ valueOfInput: "" });
  };

  render() {
    return (
      <div>
        <InputGroup
          className="mb-3"
          value={this.state.valueOfInput}
          onChange={this.inputChange}
        >
          <FormControl
            placeholder="Input task"
            aria-label="Input task"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.addButtonClick}>
              Add
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}
