import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  makeStyles,
  Drawer,
  Divider,
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
    overflowY: "hidden",
  },
  LandingPane: {
    position: "relative",
    height: "100vh",
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
  floatingButtonsContainer: {
    display: "flex",
    backgroundColor: "#fafafa30",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: theme.spacing(2),
  },
  floatingButton: {
    marginBottom: theme.spacing(1),
    background: "#ff7704",
    color: "#fff",
    borderRadius: "20px",
    width: "5vw",
    fontSize: "0.6rem",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "&:hover": {
      background: "#fff",
      color: "#ff7704",
    },
  },
}));

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
  };
  const handleClick = (child) => {
    scrollToRef(child);
    setDrawerOpen(false);
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

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div className={classes.floatingButtonsContainer}>
          <Button
            className={classes.floatingButton}
            onClick={() => handleClick(landingPage)}
          >
            Home
          </Button>
          <Button
            className={classes.floatingButton}
            onClick={() => handleClick(secondaryPanelRef)}
          >
            Testimonials
          </Button>
          <Button
            className={classes.floatingButton}
            onClick={() => handleClick(purposePanelRef)}
          >
            Purpose
          </Button>
          <Button
            className={classes.floatingButton}
            onClick={() => handleClick(messagePanelRef)}
          >
            Messages
          </Button>
          <Button
            className={classes.floatingButton}
            onClick={() => handleClick(galleryPanelRef)}
          >
            Gallery
          </Button>
          <Button
            className={classes.floatingButton}
            onClick={() => handleClick(faqsPanelRef)}
          >
            FAQs
          </Button>
          <Divider />
          <Button onClick={() => setDrawerOpen(false)}>Close</Button>
        </div>
      </Drawer>
      {/* <Button
        variant="contained"
        color="primary"
        onClick={() => setDrawerOpen(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 999,
        }}
      >
        Open Navigation
      </Button> */}
    </div>
  );
};

export default Home;
