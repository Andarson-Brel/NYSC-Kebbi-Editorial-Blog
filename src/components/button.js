import React from "react";
export default function Button({ buttonstyle, type, children }) {
  return (
    <button style={buttonstyle} className="main-btn" type={type}>
      {children}
    </button>
  );
}
