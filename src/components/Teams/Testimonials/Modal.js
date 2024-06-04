import React, { useState } from "react";
import {
  Modal,
  Box,
  ButtonBase,
  Avatar,
  Paper,
  makeStyles,
  styled,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
} from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimonial from "./Testimonial"; // Adjust the import path as needed

const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  borderRadius: "30%",
  backgroundColor: "white",
  overflow: "hidden",
}));

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  PaperCont: {
    padding: "2vw",
    position: "relative",
    overflow: "hidden",
    width: "40vw",
    height: "40vh",
    boxShadow: 24,
    borderRadius: "50px",
    [theme.breakpoints.down("md")]: {
      width: "35vh",
      height: "35vh",
    },
    [theme.breakpoints.down("sm")]: {
      width: "35vh",
      height: "35vh",
    },
  },
  carouselMobItem: {
    margin: "3vw",
  },
  blurWrapper: {
    position: "relative",
    overflow: "hidden",
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "50vh",
      zIndex: 1,
    },
    "&::before": {
      left: 0,
      background:
        "linear-gradient(to right, rgba(1, 28, 37, 1), rgba(1, 28, 37, 0))",
      filter: "blur(0px)",
      zIndex: 1,
    },
    "&::after": {
      right: 0,
      background:
        "linear-gradient(to left, rgba(1, 28, 37, 1), rgba(1, 28, 37, 0))",
      filter: "blur(0px)",
      zIndex: 1,
    },
  },
  blurWrapperNoBlur: {
    position: "relative",
    overflow: "hidden",
  },
  CardTextHeader: {
    fontSize: "1vw",
    fontWeight: 600,
  },
}));

const ModalExp = ({ children = {}, Team = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleOpen = (index) => () => setOpenModalIndex(index);
  const handleClose = () => setOpenModalIndex(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={classes.root}>
      <div
        className={isMobile ? classes.blurWrapperNoBlur : classes.blurWrapper}
      >
        <Carousel
          style={{ maxHeight: "10vh" }}
          responsive={responsive}
          infinite
          autoPlaySpeed={2000}
          autoPlay
          centerMode={isMobile ? false : true}
        >
          {Team.map((item, index) => (
            <div
              key={index}
              className={isMobile ? classes.carouselMobItem : null}
            >
              <Typography align="center">
                <Paper
                  component={StyledButtonBase}
                  className={classes.PaperCont}
                  elevation={10}
                  onClick={handleOpen(index)}
                  style={{ cursor: "pointer" }}
                >
                  {/* test comment */}
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Avatar
                      src={item.src}
                      style={{
                        height: isMobile ? "30vh" : "25vh",
                        width: isMobile ? "30vh" : "25vh",
                      }}
                    />
                    {!isMobile && (
                      <Grid item xs>
                        <Box style={{ marginLeft: "2vh" }} textAlign={"left"}>
                          <Typography className={classes.CardTextHeader}>
                            {item.CardTitle}
                          </Typography>
                          <Typography variant="h5">
                            {item.CardContent}
                          </Typography>
                          <Typography align="right" variant={"h4"}>
                            - {item.NickName} (2024)
                          </Typography>
                        </Box>
                        <Grid>
                          <Typography
                            align="center"
                            variant={"h5"}
                            style={{ color: "#ff7704", paddingTop: "3vh" }}
                          >
                            Read more......
                          </Typography>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Paper>
              </Typography>
              <Modal open={openModalIndex === index} onClose={handleClose}>
                <Grid
                  container
                  style={{
                    left: isMobile ? "1vw" : "8vw",
                    width: isMobile ? "95vw" : "80vw",
                    borderRadius: "50px",
                    position: "absolute",
                    top: "5vh",
                  }}
                >
                  <Testimonial Team={[item]} handleClose={handleClose} />
                </Grid>
              </Modal>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ModalExp;
