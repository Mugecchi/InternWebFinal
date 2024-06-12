import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {
  Paper,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Zoom,
} from "@material-ui/core";
import { useStyles } from "./utils/useStyles";
import { importAllImages } from "./utils/importImages";
const FunMoment = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleBackClick = () => {
    window.history.back();
  };

  const photos = [
    {
      img: "images/funMoment/1.jpg",
      title: "Photo 1",
      featured: true,
    },
    {
      img: "images/funMoment/2.jpg",
      title: "Photo 2",
      featured: false,
    },
    {
      img: "images/funMoment/3.jpg",
      title: "Photo 3",
      featured: false,
    },
    {
      img: "images/funMoment/4.jpg",
      title: "Photo 4",
      featured: false,
    },
    {
      img: "images/funMoment/5.jpg",
      title: "Photo 5",
      featured: false,
    },
    {
      img: "images/funMoment/6.jpg",
      title: "Photo 6",
      featured: false,
    },
    {
      img: "images/funMoment/7.jpg",
      title: "Photo 7",
      featured: false,
    },
    {
      img: "images/funMoment/8.jpg",
      title: "Photo 8",
      featured: false,
    },
    {
      img: "images/funMoment/9.jpg",
      title: "Photo 9",
      featured: false,
    },
    {
      img: "images/funMoment/10.jpg",
      title: "Photo 10",
      featured: false,
    },
    {
      img: "images/funMoment/11.jpg",
      title: "Photo 11",
      featured: false,
    },
    {
      img: "images/funMoment/12.jpg",
      title: "Photo 12",
      featured: false,
    },
    {
      img: "images/funMoment/13.jpg",
      title: "Photo 13",
      featured: false,
    },
    {
      img: "images/funMoment/14.jpg",
      title: "Photo 14",
      featured: false,
    },
    {
      img: "images/funMoment/15.jpg",
      title: "Photo 15",
      featured: false,
    },
    {
      img: "images/funMoment/16.jpg",
      title: "Photo 16",
      featured: false,
    },
    {
      img: "images/funMoment/17.jpg",
      title: "Photo 17",
      featured: false,
    },
    {
      img: "images/funMoment/18.jpg",
      title: "Photo 18",
      featured: false,
    },
    {
      img: "images/funMoment/19.jpg",
      title: "Photo 19",
      featured: false,
    },
    {
      img: "images/funMoment/20.jpg",
      title: "Photo 20",
      featured: false,
    },
    {
      img: "images/funMoment/21.jpg",
      title: "Photo 21",
      featured: false,
    },
    {
      img: "images/funMoment/22.jpg",
      title: "Photo 22",
      featured: false,
    },
    {
      img: "images/funMoment/23.jpg",
      title: "Photo 23",
      featured: false,
    },
    {
      img: "images/funMoment/24.jpg",
      title: "Photo 24",
      featured: false,
    },
    {
      img: "images/funMoment/25.jpg",
      title: "Photo 25",
      featured: false,
    },
    {
      img: "images/funMoment/26.jpg",
      title: "Photo 26",
      featured: false,
    },
    {
      img: "images/funMoment/27.jpg",
      title: "Photo 27",
      featured: false,
    },
    {
      img: "images/funMoment/28.jpg",
      title: "Photo 28",
      featured: false,
    },
    {
      img: "images/funMoment/29.jpg",
      title: "Photo 29",
      featured: false,
    },
    {
      img: "images/funMoment/30.jpg",
      title: "Photo 30",
      featured: false,
    },
    {
      img: "images/funMoment/31.jpg",
      title: "Photo 31",
      featured: false,
    },
    {
      img: "images/funMoment/32.jpg",
      title: "Photo 32",
      featured: false,
    },
    {
      img: "images/funMoment/33.jpg",
      title: "Photo 33",
      featured: false,
    },
    {
      img: "images/funMoment/34.jpg",
      title: "Photo 34",
      featured: false,
    },
    {
      img: "images/funMoment/35.jpg",
      title: "Photo 35",
      featured: false,
    },
    {
      img: "images/funMoment/36.jpg",
      title: "Photo 36",
      featured: false,
    },
  ];

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        onClick={handleBackClick}
        className={classes.floatingButton}
      >
        Back
      </Button>
      <Container component={Paper}>
        <Typography variant="h4" gutterBottom align="center">
          Fun Moments
        </Typography>
        <div className={classes.root}>
          <ImageList rowHeight={300} gap={12} className={classes.imageList}>
            {photos.map((photo) => (
              <ImageListItem
                key={photo.img}
                cols={photo.featured ? 2 : 1}
                rows={photo.featured ? 2 : 1}
                onClick={() => handleClickOpen(photo.img)} // Open modal on image click
              >
                <img src={photo.img} className={classes.image} />
                <ImageListItemBar
                  title={photo.title}
                  position="top"
                  actionIcon={
                    <IconButton
                      aria-label={`star ${photo.title}`}
                      className={classes.icon}
                    >
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                  className={classes.titleBar}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </Container>
      <Dialog
        TransitionComponent={Zoom}
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent
          style={{
            background: "#ddd",
            maxWidth: "80vw", // Adjust the width as needed
            margin: "auto",
            overflow: "auto",
          }}
        >
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              maxWidth: "90%",
              maxHeight: "100%",
              margin: "auto",
              display: "block",
            }}
          />
        </DialogContent>
        <DialogActions style={{ background: "#ddd" }}>
          <Button onClick={handleClose} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FunMoment;
