import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import Wave from "./wave.svg";
import { useStyles } from "./useStyles";
import overlay from "./overlay.png";
import Ryan from "./Ryann.jpg";
const HeroPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.titleContainer}>
      <img
        src={Wave}
        style={{
          position: "absolute",
          bottom: "-10vw",
          left: 0,
          zIndex: -1,
        }}
      />
      <Typography variant="h4" className={classes.heading}>
        NAVIGATE YOUR{" "}
        <span className={classes.highlight}>CAREER ODYSSEY: </span>
        <br />
        FROM INTERNSHIP{" "}
        <span className={`${classes.highlight} ${classes.circled}`}>
          TO FUTURE SUCCESS
        </span>
        <Avatar
          src={Ryan}
          style={{
            width: "40vh",
            height: "40vh",
            position: "absolute",
            right: "10vw",
            top: "5vh",
          }}
        ></Avatar>
      </Typography>
      <Grid>
        <Typography className={classes.description}>
          Learning, <span className={classes.Growing}>Growing</span>,{" "}
          <span style={{ color: "#ff7704" }}>Making an impact:</span> Explore
          the journeys of those who dared to bridge the gap between theory and
          reality.
          <Grid></Grid>
        </Typography>
      </Grid>
      <img
        alt="Overlay Background"
        src={overlay}
        className={classes.overlayImage}
      />
    </Box>
  );
};

export default HeroPage;
