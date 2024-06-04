import React from "react";
import { Box, Typography, Card, CardContent } from "@material-ui/core";
import "./Purposee.css";

const Purpose = [
  {
    title: (
      <p
        style={{
          fontSize: 30,
          fontWeight: 800,
          color: "#ff7704",
          margin: 0,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Mission
      </p>
    ),
    content: (
      <p
        style={{
          fontSize: 19,
          fontFamily: "Poppins, sans-serif",
          margin: 0,
          marginLeft: 10,
          alignContent: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Radztech Business Solutions provides technology-integrated accounting
        solutions aiming to help our clients improve their business value.
      </p>
    ),
  },
  {
    title: (
      <p
        style={{
          fontSize: 30,
          fontWeight: 800,
          color: "#ff7704",
          margin: 0,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Vision
      </p>
    ),
    content: (
      <p
        style={{
          fontSize: 19,
          fontFamily: "Poppins, sans-serif",
          margin: 0,
          marginLeft: 10,
          alignContent: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        The country's leading partner in technology-integrated accounting
        innovations.
      </p>
    ),
  },
  {
    title: (
      <p
        style={{
          fontSize: 30,
          fontWeight: 800,
          color: "#ff7704",
          margin: 0,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Purpose of Internship
      </p>
    ),
    content: (
      <p
        style={{
          fontSize: 19,
          fontFamily: "Poppins, sans-serif",
          margin: 0,
          marginLeft: 10,
          textAlign: "justify",
          alignContent: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;The internship program is designed to serve as a
        valuable opportunity for students to gain firsthand experience in the
        corporate world, closely aligned with their chosen professional career
        paths. Through this program, students will be immersed in real-life
        business environments, allowing them to apply theoretical knowledge
        acquired in their academic studies to practical, everyday situations.
        This exposure not only helps bridge the gap between classroom learning
        and professional practice but also equips students with a deeper
        understanding of industry-specific practices, workplace dynamics, and
        professional expectations. By participating in this internship program,
        students will develop essential skills, gain critical insights into
        their future careers, and build a network of professional contacts that
        can support their career growth and aspirations. Ultimately, the program
        aims to prepare students for a successful transition from academic life
        to professional endeavors, ensuring they are well-prepared to meet the
        challenges and demands of their chosen fields.
      </p>
    ),
  },
];

const Message = ({ title, content }) => (
  <Card className="message-card">
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {content}
      </Typography>
    </CardContent>
  </Card>
);

const Purp = () => (
  <Box className="message-container">
    {Purpose.map((item, index) => (
      <Message key={index} title={item.title} content={item.content} />
    ))}
  </Box>
);

export default Purp;
