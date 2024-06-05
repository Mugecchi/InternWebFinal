import React from "react";
import { Box, Typography, Card, CardContent } from "@material-ui/core";
import "./Purposee.css";

const Purpose = [
  {
    id: "vision",
    title: (
      <Box
        style={{
          fontSize: 30,
          fontWeight: 800,
          color: "#ff7704",
          padding: "10px",
          border: "outset 10px #ff7704",
          backgroundColor: "#ededed",
        }}
      >
        VISION
      </Box>
    ),
    content: (
      <p>
        The country's leading partner in technology-integrated accounting
        innovations.
      </p>
    ),

    contentStyle: {
      fontSize: 19,
      fontFamily: "Poppins, sans-serif",
      margin: "0 10px",
      textAlign: "center",
      marginTop: "30px",
    },
  },
  {
    id: "mission",
    title: (
      <Box
        style={{
          fontSize: 30,
          fontWeight: 800,
          color: "#ff7704",
          padding: "10px",
          border: "outset 10px #ff7704",
          backgroundColor: "#ededed",
        }}
      >
        MISSION
      </Box>
    ),
    content: (
      <p>
        Radztech Business Solutions provides technology-integrated accounting
        solutions aiming to help our clients improve their business value.
      </p>
    ),
    contentStyle: {
      fontSize: 19,
      fontFamily: "Poppins, sans-serif",
      margin: "0 10px",
      textAlign: "center",
      marginTop: "30px",
    },
  },
  {
    id: "purpose",
    title: (
      <Box
        style={{
          fontSize: 30,
          fontWeight: 800,
          color: "#ff7704",
          padding: "10px",
          border: "outset 10px #ff7704",
          backgroundColor: "#ededed",
        }}
      >
        PURPOSE OF INTERNSHIP
      </Box>
    ),
    content: (
      <p>
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
    contentStyle: {
      fontSize: 19,
      fontFamily: "Poppins, sans-serif",
      margin: "0 10px",
      textAlign: "justify",
      marginTop: "30px",
    },
  },
];

const Message = ({ id, title, content, titleStyle, contentStyle }) => (
  <Card className={`message-card ${id}`}>
    <CardContent>
      <Typography
        variant="h5"
        component="div"
        className="message-title"
        style={titleStyle}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        className="message-content"
        style={contentStyle}
      >
        {content}
      </Typography>
    </CardContent>
  </Card>
);

const Purp = () => (
  <Box className="message-container">
    {Purpose.map((item, index) => (
      <Message
        key={index}
        id={item.id}
        title={item.title}
        content={item.content}
        titleStyle={item.titleStyle}
        contentStyle={item.contentStyle}
      />
    ))}
  </Box>
);

export default Purp;
