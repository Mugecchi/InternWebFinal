import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import InternData from "./Teams/Testimonials/InternData";
import Slider from "./InternTeam/Accordion";
import Faqs from "./Faqs/Faqs";
import HeroPage from "./LandingPage/HeroPage";
import Message from "./Message/Messages";
import Gallery from "./Gallery/Gallery";
import Purpose from "./Purpose/Purpose";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflowY: "scroll",
  },
  LandingPane: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
  primaryPanel: {
    position: "relative",
    background: "#f5f5f5",
    padding: "10vh 0",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    textAlign: "center",
    transition: "opacity 0.5s ease",
  },
  secondaryPanel: {
    position: "relative",
    height: "40vh",
    background: "#011c25",
    padding: "10vh 0",
    transition: "opacity 0.5s ease",
  },
  floatingButton: {
    marginBottom: theme.spacing(1),
    background: "#ff7704",
    color: "#fff",
    borderRadius: "20px",
    width: "auto",
    fontSize: "0.8rem",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const landingPage = useRef(null);
  const secondaryPanelRef = useRef(null);
  const purposePanelRef = useRef(null);
  const messagePanelRef = useRef(null);
  const galleryPanelRef = useRef(null);
  const faqsPanelRef = useRef(null);

  useEffect(() => {
    const scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition !== null) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
  }, []);

  const classes = useStyles();

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setAnchorEl(null); // Close the menu after clicking
  };

  return (
    <div className={classes.root}>
      <div className={classes.LandingPane} ref={landingPage}>
        <HeroPage />
      </div>
      <div className={classes.primaryPanel}>
        <Typography align="center">
          <Box fontFamily={"poppins"} fontSize={"5vw"} fontWeight={800}>
            RADZTECH <span style={{ color: "#ff7704" }}>INTERNS</span>
          </Box>
        </Typography>
        <Slider />
      </div>

      <div className={classes.secondaryPanel} ref={secondaryPanelRef}>
        <InternData />
      </div>
      <div className={classes.primaryPanel} ref={purposePanelRef}>
        <Purpose />
      </div>
      <div className={classes.primaryPanel} ref={messagePanelRef}>
        <Message />
      </div>
      <div className={classes.primaryPanel} ref={galleryPanelRef}>
        <Gallery />
      </div>
      <div className={classes.primaryPanel} ref={faqsPanelRef}>
        <Faqs />
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 999,
        }}
      >
        Open Menu
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => scrollToRef(landingPage)}>Home</MenuItem>
        <MenuItem onClick={() => scrollToRef(secondaryPanelRef)}>
          Testimonials
        </MenuItem>
        <MenuItem onClick={() => scrollToRef(purposePanelRef)}>
          Purpose
        </MenuItem>
        <MenuItem onClick={() => scrollToRef(messagePanelRef)}>
          Messages
        </MenuItem>
        <MenuItem onClick={() => scrollToRef(galleryPanelRef)}>
          Gallery
        </MenuItem>
        <MenuItem onClick={() => scrollToRef(faqsPanelRef)}>FAQs</MenuItem>
      </Menu>
    </div>
  );
};

export default Home;
