import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, removeTask}) {
  

  const taskDisplay = tasks.map((task) => {
    return <Task key={task.text} text={task.text} category={task.category} removeTask={removeTask}/>
  })

  return (
    <div className="tasks">
      {taskDisplay}
    </div>
  );
}

export default TaskList;
