import React from "react";
import "./TaskInput.css";
import Tag from "./Tag";

export default function TaskInput() {
  return (
    <div className="taskInput">
      <form className="form">
        <div>
          <input type="text" placeholder="Enter Your Task Here..." />
        </div>
        <div className="grid">
          <div className="tag-flex">
            <Tag name="Work" color="#FEC5E5" />
            <Tag name="Personal" color="#FC99CD" />
            <Tag name="Leisure" color="#FDAB9F" />
            <Tag name="Priority" color="#FE7D6A" />
          </div>
          <select className="taskStatus">
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
