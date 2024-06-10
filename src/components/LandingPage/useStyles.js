import { makeStyles } from "@material-ui/core";
import bg from "./bg.png";

export const useStyles = makeStyles((theme) => ({
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
    color: "#ffffff",
    fontWeight: 900,
    textAlign: "center",
    fontFamily: `"Poppins"`,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  description: {
    fontSize: "2rem",
    fontWeight: "normal",
    color: "white",
    fontStyle: "italic",
    marginTop: theme.spacing(1), // Add some margin between heading and description
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },

  divider: {
    margin: theme.spacing(2, 0),
    height: "1px",
    width: "50vw",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
}));

export default useStyles;
