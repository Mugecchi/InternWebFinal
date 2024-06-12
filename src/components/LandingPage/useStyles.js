import { makeStyles } from "@material-ui/core";
import bg from "./background.png";

export const useStyles = makeStyles((theme) => ({
  "@keyframes fadeEffect": {
    "0%": {
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
  "@keyframes move": {
    "25%": {
      opacity: 1,
    },
    "33%": {
      opacity: 1,
      transform: "translateY(30px)",
    },
    "67%": {
      opacity: 1,
      transform: "translateY(40px)",
    },
    "100%": {
      opacity: 0,
      transform: "translateY(55px) scale3d(0.5, 0.5, 0.5)",
    },
  },
  "@keyframes pulse": {
    to: {
      opacity: 1,
    },
  },
  titleContainer: {
    background: `url(${bg}) no-repeat center center`,
    // background: "#000000",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    height: "100vh",
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
    transform: "rotateX(180deg)",
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
    animation: "$fadeEffect 4s ease-in-out infinite",
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
    animation: "$fadeEffect 4s ease-in-out infinite",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: "50vw",
      fontSize: "1rem",
    },
  },
  centerPiece: {
    position: "absolute",
    zIndex: 1,
    borderRadius: "50px",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  scrollContainer: {
    position: "absolute",
    bottom: "15vh", // Adjust this value to move the indicator higher
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  chevron: {
    position: "absolute",
    width: "28px",
    height: "8px",
    opacity: 0,
    transform: "scale3d(0.5, 0.5, 0.5)",
    animation: "$move 3s ease-out infinite",
    "&:first-child": {
      animationDelay: "1s",
    },
    "&:nth-child(2)": {
      animationDelay: "2s",
    },
    "&:nth-child(3)": {
      animationDelay: "3s",
    },
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: 0,
      height: "100%",
      width: "50%",
      border: "1px solid #ffffff",
      background: "#ff7704",
    },
    "&:before": {
      left: -1.7,
      transform: "skew(0deg, 30deg)",
    },
    "&:after": {
      right: -1.7,
      width: "50%",
      transform: "skew(0deg, -30deg)",
    },
  },
  scrollText: {
    display: "block",
    marginTop: "65px",
    fontFamily: '"Helvetica Neue", "Helvetica", Arial, sans-serif',
    fontSize: "12px",
    color: "#ffffff",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    opacity: 0.25,
    animation: "$pulse 2s linear alternate infinite",
  },
}));

export default useStyles;
