import { makeStyles } from "@material-ui/core";
import bg from "./bg.png";
import bg2 from "./bg2.png";

export const useStyles = makeStyles((theme) => ({
  "@keyframes fadeEffect": {
    "0%%": {
      opacity: 0,
    },
    "25%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },
  "@keyframes blurOff": {
    "0%": {
      filter: "blur(0)",
    },
    "50%": {
      filter: "blur(5px)",
    },
    "100%": {
      filter: "blur(0)",
    },
  },
  titleContainer: {
    background: `url(${bg}) no-repeat center center`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    height: "100vh", // Use vh for full screen height
    width: "100%",
    zIndex: -2,
    animation: "$blurOff 3s ease-in-out",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
    },
  },
  backgroundImage: {
    transform: "rotateX(180deg)", // Rotate the background image only
  },
  heading: {
    zIndex: 10,
    fontSize: "3rem",
    fontStyle: "italic",
    backgroundColor: "#ff7504ff",
    width: "50vw",
    border: "3px solid white",
    color: "#ffffff",
    fontWeight: 900,
    opacity: "0",
    textAlign: "center",
    fontFamily: `"Poppins"`,
    animation: "$fadeEffect 5s ease-in-out infinite",
    animationDelay: "3s",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      width: "70vw",
    },
  },
  description: {
    fontSize: "1.5rem",
    fontWeight: "normal",
    width: "30vw",
    opacity: "0",
    color: "#000000",
    backgroundColor: "#ffffffff",
    border: "3px solid #ff7704",
    fontStyle: "italic",
    animationDelay: "3s",

    animation: "$fadeEffect 5s ease-in-out infinite",
    marginTop: theme.spacing(1), // Add some margin between heading and description
    [theme.breakpoints.down("sm")]: {
      width: "50vw",
      fontSize: "1rem",
    },
  },

  centerPiece: {
    height: "80vh",
    position: "absolute",
    top: "5vh",
    width: "80vw",
    zIndex: 1,
    borderRadius: "50px",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));

export default useStyles;
