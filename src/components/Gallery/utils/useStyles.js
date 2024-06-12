import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  container: {},
  floatingButton: {
    position: "fixed",
    bottom: theme.spacing(2), // Or a specific value like '20px'
    right: theme.spacing(2), // Or a specific value like '20px'
    zIndex: 1000,
  },
  root: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  imageList: {
    width: "100vw",
    height: "95vh",
    overflowY: "auto",
    transform: "translateZ(0)",
  },
  titleBar: {
    display: "none",
  },
  icon: {
    color: "white",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    height: "100%",
    objectFit: "cover", // Ensures the entire image is visible without cropping
    cursor: "pointer", // Add cursor pointer to indicate clickability
  },
}));
