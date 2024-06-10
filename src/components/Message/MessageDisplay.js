import React from "react";
import "./MessageDisplay.css";
import { Avatar, Typography } from "@material-ui/core";

const MessageDisplay = ({ employee }) => {
  return (
    <div className="display-container">
      <Typography variant="h5" className="employee-name">
        {employee.name}
      </Typography>
      {employee.messages.map((msg, index) => (
        <div key={index} className="message-bubble">
          <Typography className="message-text">{msg}</Typography>
        </div>
      ))}
    </div>
  );
};

export default MessageDisplay;
