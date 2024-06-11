import React, { useState } from "react";
import "./TaskInput.css";
import Tag from "./Tag";

export default function TaskInput({ setTasks }) {
  const [taskData, setTaskData] = useState({
    //add the property names here as attributes with 'name' in respective form tags
    task: "",
    status: "todo",
    tags: [],
  });

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  // console.log(taskData.tags);

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
    //console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });

    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <div className="taskInput">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            name="task"
            type="text"
            value={taskData.task}
            placeholder="Enter Your Task Here..."
            onChange={handleChange}
          />
        </div>
        <div className="grid">
          <div className="tag-flex">
            <Tag
              name="Work"
              selectTag={selectTag}
              selected={checkTag("Work")}
            />
            <Tag
              name="Personal"
              selectTag={selectTag}
              selected={checkTag("Personal")}
            />
            <Tag
              name="Leisure"
              selectTag={selectTag}
              selected={checkTag("Leisure")}
            />
            <Tag
              name="Priority"
              selectTag={selectTag}
              selected={checkTag("Priority")}
            />
          </div>
          <select
            name="status"
            className="taskStatus"
            onChange={handleChange}
            value={taskData.status}
          >
            <option value="todo">To-Do</option>
            <option value="in-progress">In-Progress</option>
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
