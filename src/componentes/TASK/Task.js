import React, { Component } from "react";
import classes from "./task.module.css";
import { Col } from "react-bootstrap";

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
      <Col xl="1" lg="3" md="6" className={classes.col}>
        <div>
          <input
            type="checkbox"
            className={classes.checkboxes}
            onChange={this.props.onCheckChange}
          ></input>

          {this.state.isEdit ? (
            <>
              <input
                type="text"
                value={this.state.inputvalue}
                onChange={this.inputChengHendeler}
                className={classes.editinput}
              ></input>
              <div className={classes.buttones}>
                <button onClick={this.saveEditedTaxt}>Save</button>
                <button onClick={this.cancelHendeler}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <span className={classes.editinput}>{this.state.inputvalue}</span>
              <div className={classes.buttones}>
                <button onClick={this.edithendeler}>Edit</button>
                <button onClick={this.deletCurrntTask}>x</button>
              </div>
            </>
          )}
        </div>
      </Col>
    );
  }
}
