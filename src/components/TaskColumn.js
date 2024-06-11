import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import { useDrop } from "react-dnd";

export default function TaskColumn({
  name,
  tasks,
  status,
  handleDelete,
  handleStatusChange,
  progress,
}) {
  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item) => handleStatusChange(item.index, status),
  });

  return (
    <div className="column" ref={drop}>
      <h2 className="column-heading">{name}</h2>
      {progress !== undefined && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      )}
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </div>
  );
}
