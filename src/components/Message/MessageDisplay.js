import React from "react";
import "./MessageDisplay.css";
import { Avatar, Typography } from "@material-ui/core";

const MessageDisplay = ({ employee }) => {
  return (
    <div className="display-container">
      <Typography variant="h4" className="employee-name" >
        {employee.name}<br></br>  <Typography variant="subtitle2">{employee.position}</Typography>
      </Typography>
      
      {employee.messages.map((msg, index) => (
        <div key={index} className="message-bubble">
          <Typography style={{ fontSize: "0.95rem" }}>{msg}</Typography>
        </div>
      ))}
    </div>
  );
};

export default MessageDisplay;
