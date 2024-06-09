import React, { useState } from "react";
import "./TaskInput.css";
import Tag from "./Tag";

export default function TaskInput() {
  const [taskData, setTaskData] = useState({
    //add the property names here as attributes with 'name' in respective form tags
    task: "",
    status: "todo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });

    // const name = e.target.name; // task or status
    // const value = e.target.value; // input value
    // console.log(name, value);  // eg. task hello
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  return (
    <div className="taskInput">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            name="task"
            type="text"
            placeholder="Enter Your Task Here..."
            onChange={handleChange}
          />
        </div>
        <div className="grid">
          <div className="tag-flex">
            <Tag name="Work" color="#FEC5E5" />
            <Tag name="Personal" color="#FC99CD" />
            <Tag name="Leisure" color="#FDAB9F" />
            <Tag name="Priority" color="#FE7D6A" />
          </div>
          <select name="status" className="taskStatus" onChange={handleChange}>
            <option value="todo">To-Do</option>
            <option value="in-progess">In-Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button type="submit" className="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

// const [task, setTask] = useState("");
// const [status, setStatus] = useState("todo");
// const handleTaskChange = (e) => {
//   setTask(e.target.value);
// };
// const handleStatusChange = (e) => {
//   setStatus(e.target.value);
// };
// console.log(task);
// console.log(status);
