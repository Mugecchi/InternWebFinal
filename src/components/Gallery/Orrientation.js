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
  const handleBackClick = () => {
    window.history.back();
  };
  const photos = [
    {
      img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/447634084_1835902723503120_1336065542110380525_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFDtdLGWMza8qMk0GgT6iaMHKryrP_PS-IcqvKs_89L4rolfRvOWW6Jgm2oO4-7iGSoPmR11BDBjx09rbMPpj3f&_nc_ohc=P6enxm_f_XAQ7kNvgExxH4k&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYCuHSszEHxedVp334hG1ksY0Dm9CcDxGiG0G9QbI958EQ&oe=6665E307",
      title: "Photo 1",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447777669_1835902710169788_6585248742187967925_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH3yZLhhbuKp4gUaCg6tFhwg-vw-UuVPQSD6_D5S5U9BJWRaqQ04otrlnQzOhMfY8XvqPZF2SjqSzXN1hSDFTB0&_nc_ohc=RSVnzMX0fLIQ7kNvgFZRccu&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYDKMKuFqfwlVgTOqmFDZUomAgHayoafFEL62Ncw9uLvoA&oe=6665EE79",
      title: "Photo 2",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447287233_1167122894525017_3069325523366536620_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEvkXdx_g0vPQ7nowKZDh9oheoi9vyiaSKF6iL2_KJpIiUjX_USylCb_zS3f6HyrhNAzWfGqlO5-UngWnhdha2P&_nc_ohc=P2LN8Qi1_zkQ7kNvgEHa9X4&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYBNGVeSMs9XHtU5xAvoTOKZZ6jD3X0qcEYgzg-8usfGJw&oe=666879D1",
      title: "Photo 3",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447282401_1167122884525018_8677547827080374767_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHnMWft8vaIKpd2YDMJvAw84CsYkVXOAqjgKxiRVc4CqIgRNkI9kCFLjU0HAnATV5bjjuemyipPE3a5jKUSpddV&_nc_ohc=qcaLWA8cQkUQ7kNvgHIShyL&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYBmCMC9SOfUvQV45y42oGGoQWN7doTFESPydKkRatI97g&oe=66687343",
      title: "Photo 4",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/447257689_1167122974525009_1377851236045358449_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF9zb-ZtCMT8FyTi_WDo3m4UUeSo85FxQNRR5KjzkXFA3mbz2VkmJphdR18H-EszEFGgX__-u7EXCOCzxNCQXUP&_nc_ohc=GZV09LkLMFYQ7kNvgG2FgP4&_nc_ht=scontent.fmnl4-6.fna&oh=00_AYDXWwzpZv0hd6PAFVnp0ryO0GAr30AfCyBNtbUDb2YSQA&oe=66687FC7",
      title: "Photo 5",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447232418_1167122957858344_5380520650445993315_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGmAgk0LRmC34RVXA3k8Fm1RxGrEQBQmI1HEasRAFCYjSNrwSiueIsAkJjuG8gLYpd2m9PytBPyFFNwyrw8t49p&_nc_ohc=76doo1NJFBsQ7kNvgHbfhI6&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYD1Balf8i5ZpVFb3iKNikaXxHE0KgOssI175d9ph9AsTA&oe=66689B5F",
      title: "Photo 6",
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

export default Orrientation;
