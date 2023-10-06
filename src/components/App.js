import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [shownTasks, setShownTasks] = useState(TASKS)

  // removeing tasks by clicking "X" button in TaskList
  function removeTask(event) {
    const targetText = event.target.parentElement.querySelector(".text").innerText
    const notRemovedTasks = shownTasks.filter((task) =>{
      if (task.text !== targetText) {
        return true
      }
    })
    setShownTasks(notRemovedTasks)
  }

  // CategoryFilter function
  function handleCategoryClick(event) {
    const allButtons = event.target.parentElement.querySelectorAll("button")
    allButtons.forEach((button) => {
      button.className = ""
    })
    event.target.className = "selected";
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryClick={handleCategoryClick} />
      <NewTaskForm />
      <TaskList tasks={shownTasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
