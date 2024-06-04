import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import InternData from "./Teams/Testimonials/InternData";
import Slider from "./InternTeam/Accordion";
import Faqs from "./Faqs/Faqs";
import HeroPage from "./LandingPage/HeroPage";
import Message from "./Message/Messagees";
import Gallery from "./Gallery/Gallery";
import Purpose from "./Purpose/Purpose";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
    height: "100vh",
    width: "100vw",
    overflowY: "scroll",
  },
  LandingPane: {
    display: "flex",
    textAlign: "center",
    position: "relative",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    transition: "opacity 0.5s ease",
    [theme.breakpoints.down("sm")]: {
      height: "50vh",
    },
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
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.LandingPane}>
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

      <div className={classes.secondaryPanel}>
        <InternData />
      </div>
      <div className={classes.primaryPanel}>
        <Purpose />
      </div>
      <div className={classes.primaryPanel}>
        <Message />
      </div>
      <div className={classes.primaryPanel}>
        <Gallery />
      </div>
      <div className={classes.primaryPanel}>
        <Faqs />
      </div>
      <div className={classes.primaryPanel}></div>
    </div>
  );
};

export default Home;
