import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./useStyles";

function HeroPage() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.titleContainer}></Typography>
      <Typography className={classes.descContainer}></Typography>
    </div>
  );
}

export default HeroPage;
