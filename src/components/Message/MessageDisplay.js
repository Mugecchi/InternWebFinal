import React from "react";
import "./MessageDisplay.css";

const MessageDisplay = ({ employee }) => {
  return (
    <div className="display-container">
      <h2 className="employee-name">{employee.name}</h2>
      {employee.messages.map((msg, index) => (
        <div key={index} className="message-bubble">
          {employee.name}: {msg}
        </div>
      ))}
    </div>
  );
};

export default MessageDisplay;
