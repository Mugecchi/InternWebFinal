import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Link } from "react-router-dom";

import {
  Paper,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import { useStyles } from "./utils/useStyles";

const Birthday = () => {
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
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447634070_1835905766836149_1517968031101273750_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEcHBiRgt4PNsDmV7NgOT4TWeCtQTEcLwFZ4K1BMRwvAfZE4TPvmW0nGkcQ7E4vvHe7WOk_guZo7rQTe7f7qL8h&_nc_ohc=18w0El_0_fgQ7kNvgFFyWXe&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYCtFpvyUk0d-j-3BPKDTu6wQRokRIY1hOa8I0gIns4mqw&oe=6666035B",
      title: "Photo 2",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447630595_1835908380169221_4823295065314433576_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEusrPS3iTOP4n6wjMwJkl2lVO34N4k7nCVU7fg3iTucNUlq1lE09tJ0DGOyTJv1vuImSdqNm1giXXHkY320kVc&_nc_ohc=0LVTRkQG3r4Q7kNvgH0txNR&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYDtsdJ4F0Ks8seYnB5ygDVt5GqZIL9GM04DZS7zj4vXYQ&oe=666603B5",
      title: "Photo 2",
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
          Birthday
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

export default Birthday;
