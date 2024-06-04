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
  const photos = [
    {
      img: "https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/332925313_864727001254545_5048380539468074462_n.png?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoslzWZtQHojLk8vdtkpRiH7R2K5N8kYUftHYrk3yRhVUTzEleyp8_aZZ6dO1STHMkP7l9F8TeU-mo7Txjwc1j&_nc_ohc=jjNQR3O3cbUQ7kNvgEIwfN7&_nc_ht=scontent.fcrk1-2.fna&oh=00_AYD9weVCn9PdWIzvHxXCHc7IeIQCZuQiIEw-EX6JTqI3yQ&oe=66643560",
      title: "Photo 2",
      featured: true,
    },
    {
      img: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/305401428_105951435592754_7586837755521457137_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCN90pw2xihIapaKIlF8dcQtiaHpwf8FVC2JoenB_wVZuh3ijYh0mIMhY4gEbtt_zGBe-1OUBvs2fsMlmeGYZl&_nc_ohc=IEFLYTr5Dc0Q7kNvgGJ_ELo&_nc_ht=scontent.fcrk1-5.fna&oh=00_AYCtigEJJR_aMd45CWLB_ITz5cTrq4GYxZn03mcxqWuzpw&oe=66645B2B",
      title: "Photo 1",
    },

    {
      img: "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/305918235_107023508818880_6771027481115972092_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFnNhXqeGFJUQlMp9LFnsbvtfNvb9KGFti1829v0oYW2JD5uXfc22q4qYH4mIxdMPtdyO--13RG4ntEUV33h1eI&_nc_ohc=wXpeKxrqzG8Q7kNvgEt5aor&_nc_ht=scontent.fcrk1-3.fna&oh=00_AYDnANxRN7hOUCYK9lHRD2pC6IVUt8oqvZ17CqMA79yz8w&oe=6664535A",
      title: "Photo 3",
      featured: false,
    },
  ];

  return (
    <div className={classes.container}>
      <Container component={Paper}>
        <Typography variant="h4" gutterBottom align="center">
          Devs
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
