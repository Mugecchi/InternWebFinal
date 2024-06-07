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

const Orrientation = () => {
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
      img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/447634084_1835902723503120_1336065542110380525_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFDtdLGWMza8qMk0GgT6iaMHKryrP_PS-IcqvKs_89L4rolfRvOWW6Jgm2oO4-7iGSoPmR11BDBjx09rbMPpj3f&_nc_ohc=P6enxm_f_XAQ7kNvgExxH4k&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYCuHSszEHxedVp334hG1ksY0Dm9CcDxGiG0G9QbI958EQ&oe=6665E307",
      title: "Photo 2",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447777669_1835902710169788_6585248742187967925_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH3yZLhhbuKp4gUaCg6tFhwg-vw-UuVPQSD6_D5S5U9BJWRaqQ04otrlnQzOhMfY8XvqPZF2SjqSzXN1hSDFTB0&_nc_ohc=RSVnzMX0fLIQ7kNvgFZRccu&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYDKMKuFqfwlVgTOqmFDZUomAgHayoafFEL62Ncw9uLvoA&oe=6665EE79",
      title: "Photo 1",
    },
  ];

  return (
    <div className={classes.container}>
      <Container component={Paper}>
        <Typography variant="h4" gutterBottom align="center">
          Orrientation
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

export default Orrientation;
