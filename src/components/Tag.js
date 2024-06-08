import React from "react";
import "./Tag.css";

export default function Tag({ name, color, border }) {
  return (
    <button style={{ backgroundColor: color }} className="tag">
      {name}
    </button>
  );
}
