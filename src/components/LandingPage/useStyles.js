import { makeStyles } from "@material-ui/core";
import bg from "./bg.png";
export const useStyles = makeStyles((theme) => ({
  titleContainer: {
    background: `url(${bg}) no-repeat center center`, // Adjust the path to your image
    backgroundSize: "cover",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    display: "block",
    height: "100%",
    width: "100%",
    zIndex: -2,
    animation: "$slideIn 1.5s ease-in",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  descContainer: {
    justifyContent: "left",
    alignItems: "center",
    display: "flex",
    height: "35vh",
    width: "100%",
    paddingLeft: "2vh",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  Container: {
    background: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: "5rem",
    },
  },

  "@keyframes slideIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },

  logo: {
    width: "20vw",
    height: "20vw",
  },
  heading: {
    fontFamily: "Radley",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: "4vw",
    zIndex: 10,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "4.5vh",
    },
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
    zIndex: 10,
    marginTop: theme.spacing(2),
    fontSize: "3vw",
    fontStyle: "italic",
    color: "white",
    fontWeight: 900,
    fontFamily: "Radley",
    lineHeight: 1.5,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3vh",
    },
  },
  Growing: {
    fontWeight: "bold",
    fontSize: "5vh",
  },
}));
