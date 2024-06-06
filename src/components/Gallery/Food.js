import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
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
    objectFit: "cover", // Ensures the entire image is visible without cropping
    cursor: "pointer", // Add cursor pointer to indicate clickability
  },
}));

const Food = () => {
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
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447634533_1835905043502888_2886184013118430640_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFiUErejNvLkjsLZXm97mEyU-iVA2AQf4xT6JUDYBB_jDWLRx4sV4tLZYTjS9gHU9jj5lz2IT0nNMzbsuowXqm4&_nc_ohc=8Pbfc3ECD64Q7kNvgHLoWtY&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYDnfx7_qWd2of_ZTtA_hK0PXLrSw1K8jFKkf4k1nfXDfg&oe=6665EDF3",
      title: "Photo 2",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/447634520_1835905056836220_3585317844777076386_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHKGYbYi6lblzWmms96O3t9oQDw2d-VKL2hAPDZ35UoidB-XKPHWvW_jl-ls4IxG_gCwvPGhGRirOhAJfU5E56&_nc_ohc=1kzb-e-oC64Q7kNvgER5ts0&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYBNVMbqZW3aBxspYjxCg5XdgiyGnAMYHdxYH65wuV-BYA&oe=6665E909",
      title: "Photo 1",
      featured: false,
    },
  ];

  return (
    <div className={classes.container}>
      <Container component={Paper}>
        <Typography variant="h4" gutterBottom align="center">
          Food
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

export default Food;