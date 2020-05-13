import React from "react";

export default function Task(props) {
  return (
    <div>
      {props.task.map((el, index) => {
        <p key={index}> {el.task}</p>;
      })}
    </div>
  );
}
