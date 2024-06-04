import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import logo from "../../images/emblem.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: "100vw",
    height: "100vh",
    background: "#f1f1f1",
    padding: theme.spacing(4),
  },
  logo: {
    width: "20vw",
    height: "20vw",
  },
  heading: {
    fontFamily: "Radley",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: "3vw",
    marginBottom: theme.spacing(2),
  },
  highlight: {
    color: "#FF6600",
  },
  underline: {
    textDecoration: "underline",
  },
  subheading: {
    fontSize: "1rem",
    marginBottom: theme.spacing(2),
  },

  description: {
    marginTop: theme.spacing(2),
    fontSize: "2.5vw",
    fontStyle: "italic",
    fontFamily: "Radley",
    lineHeight: 1.5,
    fontWeight: 500,
  },
  Growing: {
    fontWeight: "bold",
    fontSize: "5vw",
  },
}));

const CareerOdyssey = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />
      <Typography variant="h4" className={classes.heading}>
        NAVIGATE YOUR{" "}
        <span className={classes.highlight}>CAREER ODYSSEY: </span>
      </Typography>
      <Typography variant="h4" className={classes.heading}>
        FROM INTERNSHIP{" "}
        <span className={`${classes.highlight} ${classes.circled}`}>
          TO FUTURE SUCCESS
        </span>
      </Typography>
      <Typography
        variant="body1"
        className={classes.description}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={8} style={{ textAlign: "center" }}>
          Learning, <span className={classes.Growing}>Growing</span>,{" "}
          <span style={{ color: "#ff7704" }}>Making an impact:</span> Explore
          the journeys of those who dared to bridge the gap between theory and
          reality.
        </Grid>
      </Typography>
    </Box>
  );
};

export default CareerOdyssey;
