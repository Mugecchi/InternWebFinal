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
} from "@material-ui/core";
import { useStyles } from "./utils/useStyles";

const DeploMoment = () => {
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
      img: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/447616330_1835903426836383_990556026098755227_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFjmubmwclqQGHMXYUIs4kYUyyTFXvVdwtTLJMVe9V3C8stZFNiMwtmeUtY3RG-i5NaXhL4mFsY3eiZGf7DvdfE&_nc_ohc=L87oigqxfOcQ7kNvgEmMhQE&_nc_ht=scontent.fmnl4-6.fna&oh=00_AYAynOl8xaUSkG1Un_XS4hEix8QhBBwo7MfB3Rc7023KWg&oe=6665F465",
      title: "Photo 1",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/447626977_1835903440169715_237552682228264994_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF4KrAyypoNRTzHDKh2BH4pD0rABc_L6acPSsAFz8vpp2ezpPGUfMIYe6YZOcHf3Io9U2-b7TN0Tg1uOrx0wgi3&_nc_ohc=I1hz5XlzEdMQ7kNvgGnZH-a&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYAIpOSpxw6iqTimACzEGbG_V3jABCSVvkr72edCHOaDtg&oe=6665FFCE",
      title: "Photo 2",
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447519117_1835903546836371_8789853041902982113_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF6-Gjet3-dx05xA0Ao-NR4bo5jcMHoSERujmNwwehIRCEUShKFP7cvEY1RIzAxLZSoUiC3axIUa2wlm22mhF0S&_nc_ohc=CFZ9sOzFXZgQ7kNvgHnURLM&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYCAkffImAhJznGXyu3bR-MalhO-PySTJfLaY6bhv9wwLw&oe=66660A1B",
      title: "Photo 3",
    },
    {
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447648201_1835903743503018_7016399677270286867_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG4mZSlz5J0AErMnWyiSmecTNMBZHKATi9M0wFkcoBOL1iVOxoLukjmJ1qUZii_-tB-8NL1nroef2a3lJAdmt1Q&_nc_ohc=OCsCS8UYvg4Q7kNvgFhlCGx&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYA1xBUs7wEx55L2-ohT-Uit7ESglHKOMUwwdw5IYdBEaA&oe=6665DF80",
      title: "Photo 4",
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
          DeploMoment
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

export default DeploMoment;
