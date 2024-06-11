import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import MessageDisplay from "./MessageDisplay";
import "./Message.css";
import { Grid, ThemeProvider, Typography } from "@material-ui/core";

const employees = [
  {
    id: "uid",
    name: "Rado D. Racimo",
    image:
      "https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg",
    messages: [
      <img
        src="https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg"
        style={{ width: "100%" }}
      />,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.!",
    ],
  },
  {
    id: "B",
    name: "Venerose G. Racimo",
    messages: ["Hi there!", "Nice to meet you."],
  },
  {
    id: "C",
    name: "Acquilles A. Lazaro",
    messages: ["Good day!", "How can I help you?"],
  },
  {
    id: "D",
    name: "Dany",
    messages: ["Hello!", "What’s up?"],
  },
  { id: "C", name: "Charlie", messages: ["Good day!", "How can I help you?"] },
  { id: "D", name: "Dany", messages: ["Hello!", "What’s up?"] },
  { id: "C", name: "Charlie", messages: ["Good day!", "How can I help you?"] },
  { id: "D", name: "Dany", messages: ["Hello!", "What’s up?"] },
];

function Message() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  return (
    <div>
      <div className="Message-container">
        <EmployeeList employees={employees} onSelect={setSelectedEmployee} />
        <MessageDisplay employee={selectedEmployee} />
      </div>
    </div>
  );
}

export default Message;
