import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import MessageDisplay from "./MessageDisplay";
import "./Message.css";
import { Grid, ThemeProvider, Typography } from "@material-ui/core";

const employees = [
  {
    id: "A",
    name: "Rado D. Racimo",
    position: "Chief Executive Officer/Lead Developer",
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
    position: "Admin and Finance Executive",
    messages: [
      <img
        src="https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg"
        style={{ width: "100%" }}
      />,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.!",
    ],
  },
  {
    id: "C",
    name: "Acquilles A. Lazaro",
    position: "Business Development Officer",
    messages: [
      <img
        src="https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg"
        style={{ width: "100%" }}
      />,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.!",
    ],  },
  {
    id: "D",
    name: "Ronald Allan V. Miranda Jr.",
    position: "Chief Operations Officer",
    messages: [
      <img
        src="https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg"
        style={{ width: "100%" }}
      />,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.!",
    ],
  },
  {
    id: "E",
    name: "Rouella Marie R. Agonoy",
    position: "Junior Implementation Supervisor",
    messages: [
      <img
        src="https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg"
        style={{ width: "100%" }}
      />,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.!",
    ],
  },
  {
    id: "F",
    name: "Rea Bianca T. Rilan",
    position: "Implementation Associate",
    messages: [
      <img
        src="https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg"
        style={{ width: "100%" }}
      />,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.!",
    ],
  },
  {
    id: "G",
    name: "Lovely Joy C. Mina",
    position: "Junior Implementation Associate",
    messages: [
      <img
        src="https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg"
        style={{ width: "100%" }}
      />,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.!",
    ],
  },
  {
    id: "H",
    name: "Gechelle B. Ubaldo",
    position: "Technical Support Associate",
    messages: [
      <img
        src="https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg"
        style={{ width: "100%" }}
      />,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.!",
    ],
  },
  {
    id: "I",
    name: "Jean Carla D. Barrientos",
    position: "Admin Staff",
    messages: [
      <img
        src="https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg"
        style={{ width: "100%" }}
      />,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.!",
    ],
  },
  {
    id: "J",
    name: "Celso G. Laggui Jr.",
    position: "Senior Software Developer",
    messages: [
      <img
        src="https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg"
        style={{ width: "100%" }}
      />,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.!",
    ],
  },
  {
    id: "K",
    name: "Renen C. Rivera",
    position: "Senior Software Developer",
    messages: [
      <img
        src="https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_640.jpg"
        style={{ width: "100%" }}
      />,
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.!",
    ],
  },
  
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
