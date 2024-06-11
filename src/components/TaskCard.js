import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import { useDrag } from "react-dnd";

export default function TaskCard({ title, tags, handleDelete, index }) {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className="taskcard"
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <p className="task-name">{title}</p>
      <div className="taskcard-flex">
        <div className="tag-flex">
          {tags.map((tag, index) => (
            <Tag key={index} name={tag} selected={true} />
          ))}
        </div>
        <div className="task-delete" onClick={() => handleDelete(index)}>
          <img src="delete.png" alt="delete" />
        </div>
      </div>
    </div>
  );
}
