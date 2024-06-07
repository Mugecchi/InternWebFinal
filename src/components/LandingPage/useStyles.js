import { makeStyles } from "@material-ui/core";
import bg from "./bg.jpg";

export const useStyles = makeStyles((theme) => ({
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes highlighter": {
    "0%": {
      backgroundColor: "transparent",
    },
    "50%": {
      backgroundColor: "#ff7704", // Your highlight color
    },
    "100%": {
      backgroundColor: "transparent",
    },
  },
  "@keyframes highlighter2": {
    "0%": {
      backgroundColor: "transparent",
    },
    "50%": {
      backgroundColor: "#000000", // Your highlight color
    },
    "100%": {
      backgroundColor: "transparent",
    },
  },

  titleContainer: {
    background: `url(${bg}) no-repeat center center`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
    position: "relative",
    height: "100%",
    width: "100%",
    zIndex: -2,
    animation: `fadeIn 1.5s ease-in`,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
    },
  },
  backgroundImage: {
    transform: "rotateX(180deg)", // Rotate the background image only
  },
  descContainer: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    height: "35vh",
    width: "100%",
    paddingLeft: "2vh",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
    },
  },

  overlayImage: {
    position: "absolute",
    opacity: "30%",
    zIndex: -2,
    left: "-1vw",
    objectFit: "cover",
  },
  logo: {
    width: "20vw",
    height: "20vw",
  },
  heading: {
    zIndex: 10,
    marginTop: theme.spacing(2),
    fontSize: "3rem",
    fontStyle: "italic",
    color: "white",
    fontWeight: 900,
    marginLeft: "1vw",
    width: "60vw",
    padding: "10px",
    fontFamily: `"Poppins"`,
    lineHeight: 1.5,
    zIndex: 2,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  // highlight: {
  //   color: "#ff7704",
  // },

  description: {
    zIndex: 10,
    marginTop: theme.spacing(2),
    fontSize: "2rem",
    fontStyle: "italic",
    color: "white",
    fontWeight: 900,
    marginLeft: "1vw",
    width: "60vw",
    padding: "10px",
    fontFamily: `"Poppins"`,
    lineHeight: 1.5,
    zIndex: 2,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      textAlign: "center",
    },
  },
  Growing: {
    fontWeight: "bold",
    color: "#000000ff",
    WebkitTextStroke: "1px white",
    fontSize: "4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  Avatar: {
    width: "40vh",
    height: "40vh",
    position: "absolute",
    zIndex: 10,
    marginTop: theme.spacing(2),
    fontSize: "2rem",
    fontStyle: "italic",
    color: "white",
  },
}));

export default useStyles;
