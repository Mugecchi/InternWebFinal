import React from "react";
import "./EmployeeList.css";
import { Avatar, Typography } from "@material-ui/core";

const EmployeeList = ({ employees, onSelect }) => {
  const [selectedId, setSelectedId] = React.useState(employees[0].id);

  const handleSelect = (employee) => {
    setSelectedId(employee.id);
    onSelect(employee);
  };

  return (
    <div className="list-container">
      <Typography>Employees</Typography>
      {employees.map((employee) => (
        <div
          key={employee.id}
          className={`employee-item ${
            employee.id === selectedId ? "selected" : ""
          }`}
          onClick={() => handleSelect(employee)}
        >
          <div className="avatar">
            <Avatar src={employee.image} alt={employee.name} />
          </div>
          {employee.name}
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
