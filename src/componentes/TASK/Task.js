import React from "react";

export default function Task(props) {
  state = {
    isEdit: false,
    editedTaxt: props.tasktexst,
  };

  editClick = () => {
    this.setState({
      isEdit: true,
    });
  };

  onSave = (event) => {
    this.setState({
      isEdit: false,
      editedTaxt: event.target.value,
    });
  };
  return (
    <div>
      <input type="checkbox" onChange={props.onCheckChange}></input>

      {this.state.isEdit ? (
        <>
          <span>{this.state.editedTaxt}</span>
          <button onClick={editClick}>Edit</button>
          <button>x</button>
        </>
      ) : (
        <>
          <input value={this.state.editedTaxt}></input>
          <button onClick={onSave}>Save</button>
          <button>Cancel</button>
        </>
      )}
    </div>
  );
}
