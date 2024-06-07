import { makeStyles } from "@material-ui/core";
import bg from "./bg.png";

export const useStyles = makeStyles((theme) => ({
  titleContainer: {
    background: `url(${bg}) no-repeat center center`,
    backgroundSize: "cover",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    position: "relative",
    alignContent: "center",
    display: "block",
    height: "100%",
    width: "100%",
    zIndex: -2,
    animation: "$fadeIn 1.5s ease-in",
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
  logo: {
    width: "20vw",
    height: "20vw",
  },
  heading: {
    textAlign: "center",
    fontFamily: `"Unkempt", cursive`,
    color: "#000000",
    fontSize: "4.8vw",
    top: "20vh",
    fontWeight: "bolder",
    position: "absolute",
    fontOpticalSizing: "auto",
    zIndex: 10,
    marginBottom: theme.spacing(2),
    animation: "$bounce 2s ease-in-out infinite", // Applying flyIn animation
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
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
    fontSize: "3rem",
    fontStyle: "italic",
    fontWeight: 900,
    position: "absolute",
    top: "40vh",
    padding: "10px",
    fontFamily: `"Unkempt", cursive`,
    lineHeight: 1.5,
    animation: "$bounce 2s ease-in-out infinite",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  Growing: {
    fontWeight: "bold",
    fontSize: "5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
}));

export default useStyles;
