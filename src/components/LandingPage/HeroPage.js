import { Box, Typography, Divider } from "@material-ui/core";
import React from "react";
import Wave from "./wave.svg";
import bg from "./bg.png";
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
          zIndex: 30,
        }}
      />
      <div className={classes.centerPiece}>
        <Typography className={classes.heading}>
          CHART YOUR CAREER COURSE
        </Typography>
        <Typography className={classes.description}>
          YOUR INTERNSHIP, YOUR FUTURE
        </Typography>
      </div>
    </Box>
  );
};

export default HeroPage;
