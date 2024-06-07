import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  container: {},
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
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain", // Ensures the entire image is visible without cropping
    cursor: "pointer", // Add cursor pointer to indicate clickability
  },
}));
