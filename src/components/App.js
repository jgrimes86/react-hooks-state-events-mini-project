import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [shownTasks, setShownTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function removeTask(task) {
    const notRemovedTasks = shownTasks.filter((t) =>{
      if (t !== task) {
        return true
      }
    })
    setShownTasks(notRemovedTasks)
  }

  function handleCategoryClick(e, category) {
    const allButtons = e.target.parentElement.querySelectorAll("button")
    allButtons.forEach((button) => {
      button.className = ""
    })
    e.target.className = "selected";

    setSelectedCategory(category)
  }

  const filteredTasks = shownTasks.filter((task) => {
    if (selectedCategory === "All") {
      return true
    } else {return selectedCategory === task.category}
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryClick={handleCategoryClick} />
      <NewTaskForm />
      <TaskList tasks={filteredTasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
