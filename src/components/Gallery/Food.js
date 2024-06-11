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
  Zoom,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import { useStyles } from "./utils/useStyles";

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
  const handleBackClick = () => {
    window.history.back();
  };
  const photos = [
    {
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447634533_1835905043502888_2886184013118430640_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFiUErejNvLkjsLZXm97mEyU-iVA2AQf4xT6JUDYBB_jDWLRx4sV4tLZYTjS9gHU9jj5lz2IT0nNMzbsuowXqm4&_nc_ohc=8Pbfc3ECD64Q7kNvgHLoWtY&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYDnfx7_qWd2of_ZTtA_hK0PXLrSw1K8jFKkf4k1nfXDfg&oe=6665EDF3",
      title: "Photo 1",
      featured: true,
    },
    {
      img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/447634520_1835905056836220_3585317844777076386_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHKGYbYi6lblzWmms96O3t9oQDw2d-VKL2hAPDZ35UoidB-XKPHWvW_jl-ls4IxG_gCwvPGhGRirOhAJfU5E56&_nc_ohc=1kzb-e-oC64Q7kNvgER5ts0&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYBNVMbqZW3aBxspYjxCg5XdgiyGnAMYHdxYH65wuV-BYA&oe=6665E909",
      title: "Photo 2",
      featured: false,
    },
    {
      img: "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/447213553_1166965207874119_3978429858049726321_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEL30tuxchcPYQP76SrSmpUmli92UsSZu6aWL3ZSxJm7nF4JSATbQwDpdkxBFkDh-w1WNJNO6M9lhFCS9Enp5cd&_nc_ohc=6NLYXda1dukQ7kNvgGErPF6&_nc_ht=scontent.fcrk1-3.fna&oh=00_AYCHnSuhgfdMF9-DFlX9_DjIaEiU4ggU5HuCqScSm-ZAQQ&oe=66681A90",
      title: "Photo 3",
      featured: false,
    },
    {
      img: "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/447276800_1166965234540783_1380597674501244442_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG6k4v-XAzYgJRchUolcAOr88mzpgVkY5HzybOmBWRjkQWk9_upk6XKEDol2evb9DnQl7l_BJ_f_ViDGPAoH8nL&_nc_ohc=LCqZjKzg1rAQ7kNvgHCYocb&_nc_ht=scontent.fcrk1-3.fna&oh=00_AYAWSiWnATXVuOmmQfpEe4M3Kc4E1Rsepd4Ju2YKqew_Ug&oe=66682055",
      title: "Photo 4",
      featured: false,
    },
    {
      img: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/447292386_1166965271207446_4234252322426003167_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG2Lav_AYPQJQm2wgQM3AqSMhSlNGB_xWwyFKU0YH_FbIVnLYfOHzsWGqQfsA_tCQ1k2kwrFzffpoRSjzxO1hJh&_nc_ohc=CZDQAOKJJWoQ7kNvgGwr8zl&_nc_ht=scontent.fcrk1-5.fna&oh=00_AYDnEkJk8eVML5ptVD5b0nQbxRpQ3BSu08Lg8v013ZPRvg&oe=666839B6",
      title: "Photo 5",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/447793813_1167123421191631_5196352273918729495_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFTNqRh3SlVs8tX8szT2glbxGbPeSa489nEZs95Jrjz2RZjAcAKzQLsFkb67fiZM7NuO8h38KDontME-uEIB2aV&_nc_ohc=nEMpluolBsgQ7kNvgGhoIGj&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYBl6eHPYlba8j15c8TXIDEXor1GmbMvL2bNuQFT30BLdQ&oe=66688D6A",
      title: "Photo 6",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/447684893_1167123477858292_842257887237055635_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHAYcd5ISxB9TpmAMh7LIEogaAxrOklVbqBoDGs6SVVuryj2YUWLoWiPIMBwXud5hYSvcRVYPNvHIJboeEjKXmq&_nc_ohc=1LKr7CaxKc4Q7kNvgFImkDE&_nc_ht=scontent.fmnl4-2.fna&oh=00_AYCT5UbGORQd8dQ0VQ9r9ClCbMI1lCBUIIpbnfOWzZEgQg&oe=6668AE20",
      title: "Photo 7",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447268587_1167123594524947_2532009149046029690_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEdukeoCsymPh3VM_nLzoJ50Ta2fMQUSz3RNrZ8xBRLPfyS1FoQ12fxsSZ4VBxkniX95EfRWsJ2MMHI8NUu2XX1&_nc_ohc=LqDsbLqetFoQ7kNvgGmr_rL&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYCmW37Rp-a_Y0bOkhgW7DUCkllW0I265dVO2S4kuvW5ag&oe=66688B33",
      title: "Photo 8",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/447595963_1167123664524940_6408945030412968652_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFCZzc4qzPHExlD_WoDR-z_4ZlnCw70x3XhmWcLDvTHdRGDYbHtycsTtQ_WCWuriXofXLdQPPa8QyP8znhy6MR3&_nc_ohc=bct7i7Tv7AAQ7kNvgGOqeYU&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYCSAWooa_mOOUVuj4cZhVQti3QkJ7VO0Fm--6obANze_w&oe=66689E49",
      title: "Photo 9",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/447664514_1167123681191605_5259555004885329690_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGiF_vNmectICPBHxTD9zuA6E7xjzndDTboTvGPOd0NNkBPYd5bsQOMi1MH0vvbSY4hOvM7xtoWaFRH7bRy4_su&_nc_ohc=gzO7lNA2K7oQ7kNvgE_K63l&_nc_ht=scontent.fmnl4-2.fna&oh=00_AYAsl6RKPnAl4P26PrcD3-rN4q86KEO6OjS8JVbxmPaAWA&oe=66688C95",
      title: "Photo 10",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447292576_1167123694524937_9193832321516311505_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFJSLTQMffOB4Fb2Uu3DFuayojnttsFj-7KiOe22wWP7spT6jAHxY5U18rtGOaPK0DvY8Mk67suHezjDiLyp3nU&_nc_ohc=k7QJ9zOLNM0Q7kNvgErZcrS&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYDuOtR2VnBK2zSU_NQV6LepJH0hnktxa-QoqTO_9WTVTQ&oe=66688685",
      title: "Photo 11",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/447783892_1167123957858244_8643214555287488953_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF9Tv4q4561pS7O6YFGIu7GU5ZqMt1ZfKtTlmoy3Vl8q59ZybEGprvADefOsC9fGwAS-hQ__iSJAP4qHch0k2Bi&_nc_ohc=4tEk2RhAHA0Q7kNvgFLuJus&_nc_ht=scontent.fmnl4-2.fna&oh=00_AYCAwZ23-JwKhYhzc_zHRxbfWy27WlR7F5Nzc8OLzOdPNw&oe=6668A96F",
      title: "Photo 12",
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
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        TransitionComponent={Zoom}
      >
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

export default Food;
