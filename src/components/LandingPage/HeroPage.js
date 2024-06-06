import { Box, Grid, Typography } from "@material-ui/core";
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
        <br />
        FROM INTERNSHIP{" "}
        <span className={`${classes.highlight} ${classes.circled}`}>
          TO FUTURE SUCCESS
        </span>
      </Typography>
      <Grid>
        <Typography className={classes.description}>
          Learning, <span className={classes.Growing}>Growing</span>,{" "}
          <span style={{ color: "#ff7704" }}>Making an impact:</span> Explore
          the journeys of those who dared to bridge the gap between theory and
          reality.
          <Grid>
            <i
              class="fa-solid fa-arrow-down fa-2x"
              className={classes["@keyframes bounce"]}
            ></i>
          </Grid>
        </Typography>
      </Grid>
    </Box>
  );
};

export default HeroPage;
