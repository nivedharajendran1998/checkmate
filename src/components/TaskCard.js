import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";

export default function TaskCard() {
  return (
    <div className="taskcard">
      <p className="task-name">This is sample text</p>
      <div className="taskcard-flex">
        <div className="tag-flex">
          <Tag name="Work" />
          <Tag name="Priority" />
        </div>
        <div className="task-delete">
          <img src="delete.png" alt="delete" />
        </div>
      </div>
    </div>
  );
}
