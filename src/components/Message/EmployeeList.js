import React from "react";
import "./EmployeeList.css";
import { Avatar, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  Avatar: {
    width: "5vh",
    height: "5vh",
    [theme.breakpoints.down("sm")]: {
      width: "10vh",
      height: "10vh",
    },
  },
}));
const EmployeeList = ({ employees, onSelect }) => {
  const classes = useStyles();
  const [selectedId, setSelectedId] = React.useState(employees[0].id);

  const handleSelect = (employee) => {
    setSelectedId(employee.id);
    onSelect(employee);
  };

  return (
    <div className="list-container">
      <Typography>RadzTech Family</Typography>
      {employees.map((employee) => (
        <div
          key={employee.id}
          className={`employee-item ${
            employee.id === selectedId ? "selected" : ""
          }`}
          onClick={() => handleSelect(employee)}
        >
          <Avatar
            className={classes.Avatar}
            src={employee.image}
            alt={employee.name}
          />
          <Typography className="employeee">{employee.name}</Typography>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
