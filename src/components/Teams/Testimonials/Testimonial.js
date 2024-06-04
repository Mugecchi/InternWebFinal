import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  Avatar,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(4),
    margin: "auto",
    width: "80vw",
    height: "80vh",
    backgroundColor: "#d6d6d6",
    borderRadius: "50px",
    overflow: "auto", // Enable scrollbar
    "&::-webkit-scrollbar": {
      width: "0", // Hide scrollbar
      height: "0",
    },
  },
  image: {
    width: "25vh",
    height: "25vh",
  },
  img: {
    margin: "auto",
    display: "inherit",
    width: theme.spacing(30),
    height: theme.spacing(30),
    maxWidth: "100%",
    maxHeight: "100%",
  },
  bio: {
    fontWeight: "700",
  },
}));

export default function Testimonial({ Team = [], handleClose }) {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  let fontSize = "3rem";
  if (isSmallScreen) {
    fontSize = "1rem";
  } else if (isMediumScreen) {
    fontSize = "1rem";
  }
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const key = Object.values(Team);
  console.log(key);
  return (
    <div className={classes.root}>
      {Team.map((item, index) => {
        return (
          <div className={classes.root} key={index}>
            <Paper className={classes.paper} elevation={10}>
              <Typography align="right">
                <IconButton onClick={handleClose}>
                  <i class="fa fa-times-circle fa-fade" aria-hidden="true"></i>
                </IconButton>
              </Typography>
              <Grid container spacing={2}>
                <Grid
                  item
                  style={{
                    display: isMobile ? "block" : false,
                    marginLeft: isMobile ? "auto" : false,
                    marginRight: isMobile ? "auto" : false,
                  }}
                >
                  <div className={classes.image}>
                    <Avatar
                      outlineStyle="inset"
                      className={classes.img}
                      alt="complex"
                      src={item.src}
                      style={{ border: "3px solid black" }}
                    />
                  </div>
                </Grid>
                <Grid item sm container>
                  <Grid
                    item
                    xs
                    style={{ marginLeft: "1vw" }}
                    spacing={2}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={isMobile ? null : 5}
                      style={{
                        borderRight: isMobile ? null : "1px solid black",
                      }}
                    >
                      <Box>
                        <Typography
                          align={isMobile ? "center" : "left"}
                          className={classes.bio}
                          style={{ fontSize }}
                        >
                          {`${item.FirstName}
                           ${item.LastName}`}
                        </Typography>
                        <Typography
                          align={isMobile ? "center" : "left"}
                          className={classes.bio}
                        ></Typography>
                        <Typography align={isMobile ? "center" : "left"}>
                          {item.Course}
                        </Typography>
                        <Typography
                          align={isMobile ? "center" : "left"}
                          variant="subtitle1"
                        >
                          {item.School}
                          <br /> <br /> {isMobile ? item.Introduction : null}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={isMobile ? 8 : 5}>
                      <Box>
                        <Typography
                          align={isMobile ? "center" : "left"}
                          className={classes.bio}
                        >
                          {isMobile ? null : item.Introduction}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {isMobile ? null : (
                    <div>
                      <i className="fa-solid fa-quote-right fa-10x fa-fade" />
                    </div>
                  )}
                </Grid>
                <Grid item xs={12} style={{ margin: "10px 30px 0 30px" }}>
                  <Typography
                    variant="h4"
                    align={isMobile ? "center" : "justify"}
                  >
                    &nbsp; &nbsp; &nbsp; &nbsp;{item.Testimony}
                  </Typography>
                  <Typography
                    variant="h4"
                    align={isMobile ? "center" : "justify"}
                  >
                    &nbsp; &nbsp; &nbsp; &nbsp;{item.Body}
                  </Typography>
                  <Typography
                    variant="h4"
                    align={isMobile ? "center" : "justify"}
                  >
                    &nbsp; &nbsp; &nbsp; &nbsp;{item.Quote}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item></Grid>
            </Paper>
          </div>
        );
      })}
    </div>
  );
}
