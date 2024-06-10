import { Box, Typography, Divider } from "@material-ui/core";
import React from "react";
import Wave from "./wave.svg";
import { useStyles } from "./useStyles";

const HeroPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.titleContainer}>
      <img
        src={Wave}
        alt="wave"
        style={{
          position: "absolute",
          bottom: "-5vw",
          transform: "scaleX(-2)",
          left: 0,
          zIndex: -1,
        }}
      />
      <Typography className={classes.heading}>
        CHART YOUR CAREER COURSE
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.description}>
        your internship, your future
      </Typography>
    </Box>
  );
};

export default HeroPage;
