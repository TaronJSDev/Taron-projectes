import React from "react";

export default function Task(props) {
  delfunc = () => {};
  return (
    <div>
      <p className="plist" key={props.el.id}>
        {props.el.taskpoint}
      </p>
      <button onClick={delfunc}>del</button>
    </div>
  );
}
