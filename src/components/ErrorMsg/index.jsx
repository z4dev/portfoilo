import React from "react";
import "./style.css";

function ErrorMsg({ children }) {
  return <div className="error-msg">{children}</div>;
}

export default ErrorMsg;
