import React from "react";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { importAllImages } from "./utils/importImages"; // Import the utility function
import hero from "../../images/album1/bg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: "#f8f9fa",
    color: "#333",
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 0,
  },
  card: {
    maxWidth: 300,
    margin: theme.spacing(2),
  },
  media: {
    height: 200,
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
const album1Images = importAllImages(
  require.context("../../images/album1", false, /\.(png|jpe?g|svg)$/)
);

const albums = [
  {
    title: "Name of album",
    images: album1Images,
    link: "/BarDaGoalan",
  },
  {
    title: "Name of Album2",
    images: album1Images,
    link: "/album3",
  },
];

const Gallery = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <div className={classes.heroSection}>
        <div className={classes.overlay}></div>
        <div className={classes.heroText}>
          <Typography variant="h1">Title</Typography>
          <Typography variant="body1">
            Short statement about the photos
          </Typography>
          <Button variant="contained" className={classes.button}>
            Possible link to another part of the website
          </Button>
        </div>
      </div>
      <Grid container justify="center">
        {albums.map((album, index) => (
          <Grid item key={index}>
            <Card className={classes.card}>
              <CardActionArea component={Link} to={album.link}>
                <CardMedia
                  className={classes.media}
                  image={Object.values(album.images)[0]}
                  title={album.title}
                />
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
