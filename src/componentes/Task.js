import React from "react";

export default function Task(props) {
  // del = (id) => {
  //   this.setState({ task: task.filter((el) => el.id != id) });
  // };
  return (
    <div>
      <p className="plist" key={props.key}>
        {props.el.taskpoint}
      </p>
    </div>
  );
}
