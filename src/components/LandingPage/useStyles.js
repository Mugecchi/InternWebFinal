import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  titleContainer: {
    background: "#ffdcd1",
    justifyContent: "left",
    alignItems: "center",
    display: "flex",
    height: "60vh",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  descContainer: {
    background: "#ffe3da",
    justifyContent: "left",
    alignItems: "center",
    display: "flex",
    height: "40vh",
    width: "100%",
    paddingLeft: "2vh",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  title: {
    color: "#000000",
    fontSize: "10rem",
    fontWeight: 800,
    letterSpacing: "-0.5rem",
    transform: "scale(0.7,2.3)", // default scale
    [theme.breakpoints.down("xs")]: {
      fontSize: "5rem",
    },
  },
}));
