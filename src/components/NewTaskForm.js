import React, {useState} from "react";

const initialForm = {
  text: "",
  category: "code"
}

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState(initialForm)

  const categoryOptions = categories.map((category) => {
    if (category === "All") {
      return null
    } else {
      return <option key={category} value={category}>{category}</option>
    }
  })

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const newFormData = {
      ...formData,
      [name]: value
    }
    setFormData(newFormData)
  }
  // console.log(formData)

  function handleSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit(formData)
    setFormData(initialForm)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          <option key="none" value=""></option>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
