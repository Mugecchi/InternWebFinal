import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { Paper, Dialog, DialogContent, Zoom, Button } from "@material-ui/core";
import { useStyles } from "./utils/useStyles";
import { importAllImages } from "./utils/importImages";

const DeploMoment = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [photos, setPhotos] = useState([]);

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

  useEffect(() => {
    try {
      const images = importAllImages(
        require.context("./images/deploMoment", false, /\.(png|jpe?g|JPG|svg)$/)
      );
      const updatedPhotos = Object.keys(images).map((key, index) => ({
        img: images[key],
        title: `Photo ${index + 1}`,
        featured: (index + 1) % 5 === 1,
      }));
      setPhotos(updatedPhotos);
    } catch (error) {}
  }, []);
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
          DeploMoment
        </Typography>
        <div className={classes.root}>
          <ImageList rowHeight={500} gap={12} className={classes.imageList}>
            {photos.map((photo) => (
              <ImageListItem
                className={classes.listContainer}
                key={photo.img}
                cols={photo.featured ? 2 : 1}
                rows={photo.featured ? 2 : 1}
                onClick={() => handleClickOpen(photo.img)}
              >
                <img
                  src={photo.img}
                  alt={photo.title}
                  className={classes.image}
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
        maxWidth="xl"
        maxHeight="xl"
      >
        <DialogContent maxWidth="xl" maxHeight="xl">
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              alignSelf: "center",
              justifySelf: "center",
              flexDirection: "column",
              maxWidth: "90%",
              maxHeight: "100%",
              margin: "auto",
              display: "block",
            }}
          />
        </DialogContent>
        <Button onClick={handleClose} color="primary" variant="contained">
          Close
        </Button>
      </Dialog>
    </div>
  );
};

export default DeploMoment;
