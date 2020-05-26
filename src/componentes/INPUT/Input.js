import React, { Component } from "react";

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
        <input
          value={this.state.valueOfInput}
          onChange={this.inputChange}
        ></input>
        <button onClick={this.addButtonClick}>Add</button>
      </div>
    );
  }
}
