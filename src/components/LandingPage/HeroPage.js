import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  landingPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    background: "#f5f5f5",
    color: "#333",
    fontFamily: '"Playfair Display", serif',
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  header: {
    marginBottom: "20px",
    padding: "20px",
    borderBottom: "2px solid #000",
    width: "80%",
  },
  headerH1: {
    fontSize: "3em",
    marginTop: "20vh",
    letterSpacing: "2px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "5vw",
      marginTop: "0vh",
    },
  },
  headerH2: {
    fontSize: "1.5em",
    marginTop: 0,
    color: "#555",
    letterSpacing: "1px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
    },
  },
  mainContent: {
    fontSize: "1.2em",
    maxWidth: "800px",
    fontFamily: '"Roboto", sans-serif',
    lineHeight: 1.6,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5em",
    },
  },
}));

const HeroPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.landingPage}>
      <header className={classes.header}>
        <h1 className={classes.headerH1}>
          NAVIGATE YOUR <span style={{ color: "#ff7704" }}>CAREER ODYSSEY</span>
        </h1>
        <h2 className={classes.headerH2}>
          FROM INTERNSHIP TO{" "}
          <span style={{ color: "#ff7704" }}>FUTURE SUCCESS</span>
        </h2>
      </header>
      <main className={classes.mainContent}>
        <p>
          <span
            style={{
              WebkitTextStroke: "1px #000000",
              color: "transparent",
            }}
          >
            Learning,{" "}
          </span>
          <span style={{ fontWeight: 800, fontSize: "4vh" }}>Growing,</span>{" "}
          <span style={{ color: "#ff7704" }}>Making an impact: </span>Explore
          the journeys of those who dared to bridge the gap between theory and
          reality.
        </p>
      </main>
    </div>
  );
};

export default HeroPage;
