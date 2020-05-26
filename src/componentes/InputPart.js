import React, { Component } from "react";

export default class InputPart extends Component {
  state = {
    inputvalue: "",
  };

  inputchangehandeler = (event) => {
    this.setState({
      inputvalue: event.target.value,
    });
  };

  btnchang = () => {
    if (!this.state.inputvalue) return;
    this.props.onAddTask(this.state.inputvalue);
    this.setState({
      inputvalue: "",
    });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.inputvalue}
          onChange={this.inputchangehandeler}
        ></input>
        <button onClick={this.btnchang}>Add</button>
      </div>
    );
  }
}
