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

const BarDaGoalan = () => {
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
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447638316_1835900570170002_3322422175933087373_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF6I1cycDgPYDQUiN7xZr3_AmfK780yLvoCZ8rvzTIu-jf_BPZEkVUx3Xo3GwKjkRIOtU0Z4Gx54SCok0a_Ipxq&_nc_ohc=6Lcb8tcAv4EQ7kNvgEBNi-i&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYD5PeyneoVb80fbKyfQwvA5l6A9PIFOHvhtQFDW59WpSg&oe=6665E2D6",
      title: "Photo 2",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447507353_1835900583503334_1312896947632851818_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7A2tMcJz4N-epyt_9s07CfcwSWqfb3kV9zBJap9veRS7PHOxPLPz5qWcCl5ZEwzsIl3061Q6vbnoW3lfQIzjj&_nc_ohc=ojHYUi2cGeAQ7kNvgHoHWy1&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYBsAac_Qh9mpk1Z_SzmwcfbpSSTo8E9V1f-1Xbo8M-pKw&oe=6665F37A",
      title: "Photo 1",
    },
    {
      img: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/447556133_1835900600169999_8915536803152416866_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEnwd7fSiNcXxSyDAOA4u1ozj3wZhM8Z-DOPfBmEzxn4Bb4uS523AvM2eZBHtoqKEjOu3rYONadogQq6w_XpeT5&_nc_ohc=5Pv-tQkpYvoQ7kNvgETi5Vr&_nc_ht=scontent.fmnl4-6.fna&oh=00_AYCaEkrM5FlJcH4LJ-_Paq3rfygGD_V9JO5_VlJe0CzipQ&oe=6665FFB5",
      title: "Photo 3",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447638316_1835900570170002_3322422175933087373_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF6I1cycDgPYDQUiN7xZr3_AmfK780yLvoCZ8rvzTIu-jf_BPZEkVUx3Xo3GwKjkRIOtU0Z4Gx54SCok0a_Ipxq&_nc_ohc=6Lcb8tcAv4EQ7kNvgEBNi-i&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYD5PeyneoVb80fbKyfQwvA5l6A9PIFOHvhtQFDW59WpSg&oe=6665E2D6",
      title: "Photo 4",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447507353_1835900583503334_1312896947632851818_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7A2tMcJz4N-epyt_9s07CfcwSWqfb3kV9zBJap9veRS7PHOxPLPz5qWcCl5ZEwzsIl3061Q6vbnoW3lfQIzjj&_nc_ohc=ojHYUi2cGeAQ7kNvgHoHWy1&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYBsAac_Qh9mpk1Z_SzmwcfbpSSTo8E9V1f-1Xbo8M-pKw&oe=6665F37A",
      title: "Photo 5",
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
          Reportings and Collaboration
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

export default BarDaGoalan;
