import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

export default function TaskColumn(props) {
  return (
    <div className="column">
      <h2 className="column-heading">{props.name}</h2>
      <TaskCard />
    </div>
  );
}
