import React from "react";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import hero from "../../images/album1/bg.jpg";
import LazyLoad from "react-lazyload";
import bs from "../Gallery/images/bibleStudy/1.jpg";
import birth from "../Gallery/images/birthday/1.jpg";
import cli from "../Gallery/images/client/1.jpg";
import deplo from "../Gallery/images/deploMoment/1.jpeg";
import food from "../Gallery/images/food/1.jpg";
import fun from "../Gallery/images/funMoment/1.JPG";
import ori from "../Gallery/images/orientation/1.jpg";
import rep from "../Gallery/images/reporting/1.JPG";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  heroSection: {
    position: "relative",
    textAlign: "center",
    color: "white",
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroText: {
    zIndex: 1,
    "& h1": {
      fontSize: "3rem",
      fontWeight: 700,
    },
    "& p": {
      fontSize: "1.25rem",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#2e2c3c86",
    zIndex: 0,
  },
  card: {
    width: "100%",
    height: "100%", // Adjusted for mobile
    marginBottom: theme.spacing(2), // Added margin bottom
  },
  media: {
    height: 200,
    [theme.breakpoints.down("xs")]: {
      height: 150, // Adjusted for smaller screens
    },
  },
  cardTitle: {
    textAlign: "left",
    padding: theme.spacing(2),
    "& h5": {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    "& p": {
      color: theme.palette.text.secondary,
    },
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: "#fff",
    color: "#000",
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },
}));

// Dynamically import images from the ../../images directory

const albums = [
  {
    title: (
      <>
        Reporting
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          Interns unite their efforts, blending individual insights into
          collective success. From meticulous reporting to seamless teamwork,
          they elevate each task with unity and purpose.
        </p>
      </>
    ),
    thumbnail: rep,
    link: "/Reporting",
  },
  {
    title: (
      <>
        Orientation
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          Kick off their professional journey by exploring the company culture,
          meeting fellow interns, and understanding their role. The first day is
          designed to familiarize with the company teams, outline their duties,
          and set the tone for an enriching internship experience.
        </p>{" "}
      </>
    ),
    thumbnail: ori,
    link: "/Orrientation",
  },
  {
    title: (
      <>
        DeploMoments
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          Interns are assigned to various company clients, working
          collaboratively to address their needs and achieve common goals. They
          interact directly with clients, provide system guidance, and supply
          essential materials for support.
        </p>
      </>
    ),
    thumbnail: deplo,
    link: "/DeploMoment",
  },
  {
    title: (
      <>
        Meet the Clients
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          Interns dive into real-world experience by joining dynamic client
          meetings, both online and face-to-face, gaining invaluable exposure
          and insights.
        </p>
      </>
    ),
    thumbnail: cli,
    link: "/Client",
  },
  {
    title: (
      <>
        Food Hangouts
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          Gather, eat, laugh and repeat with the Radztech Team. Nothing brings
          people together like good “Balut” and siomai.
        </p>
      </>
    ),
    thumbnail: food,
    link: "/Food",
  },
  {
    title: (
      <>
        Bible Study
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          Together in His presence. Building a foundation of faith, one Bible
          study at a time.
        </p>
      </>
    ),
    link: "/BibleStudy",
    thumbnail: bs,
  },
  {
    title: (
      <>
        Birthday Celebrations
        <br />
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          Celebrating the best CEO ever and the powerhouse of business
          development as they lead the Radztech Team to success and new heights.
        </p>
      </>
    ),
    thumbnail: birth,
    link: "/Birthday",
  },
  {
    title: (
      <>
        Fun Moments
        <br />
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          In a single camera’s click ripples countless photos as the interns
          were unstoppable to show their smiles and take poses.
        </p>{" "}
      </>
    ),
    thumbnail: fun,
    link: "/FunMoment",
  },
];

const Gallery = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      {" "}
      <div className={classes.heroSection}>
        <div className={classes.overlay}></div>
        <div className={classes.heroText}>
          <Typography variant="h1">Interns Gallery</Typography>
          <Typography variant="body1">A Journey Frozen in Time </Typography>
        </div>
      </div>
      <Grid container spacing={2}>
        {albums.map((album, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className={classes.card}>
              <CardActionArea component={Link} to={album.link}>
                <LazyLoad>
                  <CardMedia
                    className={classes.media}
                    image={album.thumbnail}
                    title={album.title}
                  />
                </LazyLoad>
                <div className={classes.cardTitle}>
                  <Typography variant="h5">{album.title}</Typography>
                  <Typography variant="body2">{album.subtitle}</Typography>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
