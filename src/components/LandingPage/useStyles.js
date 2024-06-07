import { makeStyles } from "@material-ui/core";
import bg from "./bg.png";

export const useStyles = makeStyles((theme) => ({
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes bounce": {
    "0%, 100%": {
      transform: "translateY(0)", // Start and end position
    },
    "50%": {
      transform: "translateY(-100px)", // Bounce up
    },
  },
  "@keyframes bounceBg": {
    "0%, 100%": {
      backgroundPosition: "center center", // Start and end position
    },
    "50%": {
      backgroundPosition: "center 20px", // Bounce up
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
    animation: `"$fadeIn 1.5s ease-in"`,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
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
      alignItems: "center",
    },
  },

  overlayImage: {
    position: "absolute",
    opacity: "70%",
    zIndex: -2,
    left: "-1vw",
    objectFit: "cover",
  },
  logo: {
    width: "20vw",
    height: "20vw",
  },
  heading: {
    fontFamily: `"Poppins", cursive`,
    color: "#ffffff",
    fontSize: "3rem",
    fontWeight: "bolder",
    fontOpticalSizing: "auto",
    marginLeft: "1vw",

    zIndex: 10,
    marginBottom: theme.spacing(2),
    animation: "$bounce 2s ease-in-out infinite",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
  },
  highlight: {
    color: "#ff7704",
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
    animation: "$bounce 2s ease-in-out infinite",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  Growing: {
    fontWeight: "bold",
    color: "black",
    fontSize: "4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
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
