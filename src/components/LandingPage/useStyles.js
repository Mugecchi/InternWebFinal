import { makeStyles } from "@material-ui/core";
import bg from "./bg.png";
import bg2 from "./bg2.png";

export const useStyles = makeStyles((theme) => ({
  "@keyframes fadeEffect": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
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
    backgroundColor: "#ff750494",
    width: "60vw",
    color: "#ffffff",
    fontWeight: 900,
    textAlign: "center",
    fontFamily: `"Poppins"`,
    animation: "$fadeEffect 3s ease-in-out infinite",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      width: "70vw",
    },
  },
  description: {
    fontSize: "1.5rem",
    fontWeight: "normal",
    width: "30vw",
    color: "#000000",
    backgroundColor: "#ffffffa1",
    fontStyle: "italic",
    animation: "$fadeEffect 3s ease-in-out infinite",
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
