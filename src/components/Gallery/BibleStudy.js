import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {
  Paper,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import { useStyles } from "./utils/useStyles";

const BibleStudy = () => {
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
  const photos = [
    {
      img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/447616622_1835905440169515_7091066312287955012_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGFZpGOa5NLTL8UzyqEnkTAv-uMT3joSHG_64xPeOhIcTruyd_833UYrNKqZR_9rpDoBBdKyXH_6qC4DYreTpRw&_nc_ohc=ejyTU7AgE6gQ7kNvgHvkT43&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYAPV99CMNHtMtleIJDFzBikqbYcfjpkNKP82R_EWcaMag&oe=66660DD4",
      title: "Photo 1",
      featured: true,
    },
  ];

  return (
    <div className={classes.container}>
      <Container component={Paper}>
        <Typography variant="h4" gutterBottom align="center">
          BibleStudy
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
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogContent
          style={{
            background: "#ddd",
            width: "80vw", // Adjust the width as needed
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

export default BibleStudy;
