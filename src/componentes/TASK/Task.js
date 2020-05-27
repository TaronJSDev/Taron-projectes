import React, { Component } from "react";

export default class Task extends Component {
  state = {
    isEdit: false,
    inputvalue: this.props.tasktexst,
  };

  edithendeler = () => {
    this.setState({ isEdit: true });
  };

  inputChengHendeler = (event) => {
    this.setState({ inputvalue: event.target.value });
  };

  saveEditedTaxt = () => {
    this.setState({
      isEdit: false,
    });
  };

  cancelHendeler = () => {
    this.setState({
      isEdit: false,
      inputvalue: this.props.tasktexst,
    });
  };

  deletCurrntTask = () => {
    this.props.deletTask();
  };

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.props.onCheckChange}></input>
        {this.state.isEdit ? (
          <>
            {" "}
            <input
              type="text"
              value={this.state.inputvalue}
              onChange={this.inputChengHendeler}
            ></input>
            <button onClick={this.saveEditedTaxt}>Save</button>
            <button onClick={this.cancelHendeler}>Cancel</button>
          </>
        ) : (
          <>
            <span>{this.state.inputvalue}</span>
            <button onClick={this.edithendeler}>Edit</button>
            <button onClick={this.deletCurrntTask}>x</button>
          </>
        )}
      </div>
    );
  }
}
