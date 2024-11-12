import React from "react";
import "./style.css";
function SectionTitle({ title }) {
  return (
    <div className="row">
      <div className="section-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default SectionTitle;
