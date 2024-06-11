import React from "react";
import "./Tag.css";

export default function Tag({ name, selectTag, selected }) {
  const tagStyle = {
    Work: { backgroundColor: "#FEC5E5" },
    Personal: { backgroundColor: "#FC99CD" },
    Leisure: { backgroundColor: "#FDAB9F" },
    Priority: { backgroundColor: "#FE7D6A" },
    default: { backgroundColor: "#FEEDF7" },
  };
  return (
    <button
      type="button"
      className="tag"
      onClick={() => selectTag(name)}
      style={selected ? tagStyle[name] : tagStyle.default}
    >
      {name}
    </button>
  );
}
