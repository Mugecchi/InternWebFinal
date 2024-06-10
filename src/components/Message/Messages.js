import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import MessageDisplay from "./MessageDisplay";
import "./Message.css";
import { Grid } from "@material-ui/core";

const employees = [
  {
    id: "sample",
    name: "sample",
    image:
      "https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg",
    messages: ["Welcome to the company!", "Hope you are doing well."],
  },
  {
    id: "B",
    name: "Bob",
    messages: ["Hi there!", "Nice to meet you."],
  },
  { id: "C", name: "Charlie", messages: ["Good day!", "How can I help you?"] },
  { id: "D", name: "Dany", messages: ["Hello!", "What’s up?"] },
];

function Message() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  return (
    <div className="Message-container">
      <Grid container>
        <EmployeeList employees={employees} onSelect={setSelectedEmployee} />
        <MessageDisplay employee={selectedEmployee} />
      </Grid>
    </div>
  );
}

export default Message;
