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
  const photos = [
    {
      img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/447620223_1835909473502445_7111774670779690064_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFDBVxtsEtgNNFInuFARzv0Xg8CwJPXF_NeDwLAk9cX89JVaJLy7KTewv_gS-RlcCUgbih34K0pYiTsy8oYeQsf&_nc_ohc=2mOOu3PTCCEQ7kNvgH1dBnz&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYB5ct8SEkm5d7Ofm22s_R3v7CdE_O0s97jrcOXdER9zbQ&oe=6665E598",
      title: "Photo 2",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/447626886_1835909530169106_2846264745962990770_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHX__zWy_INVWrPZKMgzrY1s5e3avdvf2izl7dq929_aIp8KMAO7BMAgvruaZvKTCVz73u2HobcI44u_k7B2XZ2&_nc_ohc=nFJl1lyeUDkQ7kNvgHkxKq5&_nc_ht=scontent.fmnl4-6.fna&oh=00_AYAZXfvIhUU6TTMd_11i7xVaU1XjwUYAW7kaiqHmy9Sykw&oe=6666091D",
      title: "Photo 1",
    },
    {
      img: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/447641176_1835909500169109_3046860041442868471_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHrWUN0ME08qZXb5eG5hwkwrAJUPwDtfq6sAlQ_AO1-rppt_9y5dhHPAMgvEJsJU_Ca6T02UtPYtdhTZFfRC34m&_nc_ohc=-WU_2Ea0gSwQ7kNvgGzfPpV&_nc_ht=scontent.fmnl4-2.fna&oh=00_AYD68g3WMPliyGsS9wrllj6l4qTw__xfhWQ-cCVYLdbU1w&oe=6665E3C8",
      title: "Photo 3",
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447623927_1835909596835766_1776232966017089093_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFDjr3PVUPF8KGqY7SKIkEbiiqnNwP6-SSKKqc3A_r5JDBy5NdfVzFPVXmZybnPZsB938L_und9_DNEz_9QTiwd&_nc_ohc=hdzUgwJSHo0Q7kNvgE3kGRx&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYCI7cJaNMZNWX3uDV9d9jrC0HAI7pJSka5m33xzVwIjuQ&oe=66660160",
      title: "Photo 4",
    },
  ];

  return (
    <div className={classes.container}>
      <Container component={Paper}>
        <Typography variant="h4" gutterBottom align="center">
          FunMoment
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

export default FunMoment;
