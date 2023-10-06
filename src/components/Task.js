import React from "react";

function Task({ task, removeTask}) {

  const {text, category} = task

  function handleClick () {
    removeTask(task)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
