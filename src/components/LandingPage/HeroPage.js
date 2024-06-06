import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import logo from "./wave.svg";
import { useStyles } from "./useStyles";

const HeroPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.titleContainer} style={{ position: "relative" }}>
      {/* Image placed behind the text */}
      <img
        src={logo}
        style={{ position: "absolute", bottom: 0, left: 0, zIndex: -1 }}
      />
      <Typography variant="h4" className={classes.heading}>
        NAVIGATE YOUR{" "}
        <span className={classes.highlight}>CAREER ODYSSEY: </span>
        FROM INTERNSHIP{" "}
        <span className={`${classes.highlight} ${classes.circled}`}>
          TO FUTURE SUCCESS
        </span>
      </Typography>
      <Typography
        variant="body1"
        className={classes.description}
        style={{
          display: "flex",
          textJustify: "inter-word",
          justifyContent: "center",
        }}
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

export default HeroPage;
