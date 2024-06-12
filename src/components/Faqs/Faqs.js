import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Collapse,
  Menu,
  MenuItem,
  Grow,
} from "@material-ui/core";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "leaflet/dist/leaflet.css";
import markerIcon from "./marker.png";
import L from "leaflet";

const useStyles = makeStyles((theme) => ({
  faqContainer: {
    marginBottom: "1rem",
  },
  button: {
    marginBottom: "0.5rem",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  answerList: {
    textAlign: "justify",
    marginTop: "0.5rem",
    listStyleType: "none",
    padding: 0,
  },
}));

const DropdownButton = ({ question }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleClick}
      >
        {question}
        <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 'auto' }} />
      </Button>
    </div>
  );
};

const Faq = ({ question, answer, isOpen, onMouseEnter, onMouseLeave }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.faqContainer}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <DropdownButton question={question} />
      <Typography>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <ul className={classes.answerList}>
            {answer.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </Typography>
    </div>
  );
};

const Faqs = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [formState, setFormState] = useState({
    fullName: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const classes = useStyles();

  const faqs = [
    {
      question: "1. What courses are accepted?",
      answer: [
        "Bachelor of Science in Accountancy",
        "Bachelor of Science in Management Accounting",
        "Bachelor of Science in Accounting Information System",
        "Bachelor of Science in Business Administration Major in Marketing",
        "Bachelor of Science in Computer Science",
        "Bachelor of Science in Information Technology",
        "AB in Mass Communication",
        "AB in Public Administration",
        "Other related courses",
      ],
    },
    {
      question: "2. What are the requirements?",
      answer: [
        "CV/Resume",
        "COG/Curriculum Evaluation (1st-4th Year)",
        "Letter of Introduction if necessary",
      ],
    },
    {
      question: "3. How should I submit my application?",
      answer: [
        "You can submit your application request through the company’s email: sales@radztech.com",
        "All applicants will receive an email notification to inform them of their application status.",
      ],
    },
    {
      question: "4. What is the company culture?",
      answer: [
        "Our company culture is deeply rooted in our core values of teamwork, inclusivity, and a family-like atmosphere, treating every member of our team as part of our extended family, fostering a supportive and welcoming environment where everyone feels valued and respected. Our weekly Bible study sessions provide an opportunity for personal and spiritual growth, further enhancing the sense of community and connection among our team members. We place a strong emphasis on collaboration and teamwork, encouraging employees to work together towards common goals and supporting each other along the way. We strive to create a workplace where everyone feels comfortable, appreciated, and empowered to thrive.",
      ],
    },
  ];

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const customIcon = L.icon({
    rotationAngle: 45,
    iconUrl: markerIcon,
    iconSize: [50, 52],
    iconAnchor: [22, 51],
    popupAnchor: [10, -51],
    className: "rotating-marker",
  });

  return (
    <Container maxWidth="md" style={{ marginTop: "-6rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{ paddingRight: "1vw" }}>
          <div className={classes.faqContainer}>
            <Typography variant="h3" align="center" gutterBottom>
              Frequently Asked Questions
            </Typography>
            <Typography align="center">
              <p style={{ textAlign: "justify" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Are you eager to
                kickstart your career? Look no further! An internship
                opportunity with Radztech will empower you with practical
                skills, real-world experience, and valuable connections.
              </p>
              <Typography align="left" style={{ marginBottom: "-1vh" }}>
                <p
                  style={{
                    fontStyle: "italic",
                    opacity: 0.8,
                    fontSize: "0.8rem",
                  }}
                >
                  Here are the frequently asked questions about the Internship
                  program offered by Radztech Business Solutions!
                </p>
              </Typography>
              {faqs.map((faq, index) => (
                <Faq
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={hoverIndex === index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{ paddingLeft: "1vw" }}>
          <div>
            <Typography variant="h3" align="center" gutterBottom>
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formState.fullName}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                required
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formState.message}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
              />
              <Typography align="left">
                <Button type="submit" variant="contained" color="primary">
                  Send
                </Button>
              </Typography>
            </form>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ marginTop: "1rem" }}>
            <Typography variant="h4" gutterBottom>
              Location
            </Typography>
            <div style={{ height: "400px", width: "100%" }}>
              <MapContainer
                center={[16.932315, 121.767919]}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[16.932315, 121.767919]} icon={customIcon}>
                  <Popup>
                    Don Jose Canciller Ave, Cauayan City, Isabela, Philippines
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Faqs;
