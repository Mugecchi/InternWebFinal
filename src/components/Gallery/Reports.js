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
    {
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447798906_1167065014530805_37215188255895771_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG0q_oPoDADQendMqoINVQHZ2Xsd41KgyxnZex3jUqDLOxpneK7nDA44HeiR8QLf4OWdF-kiH09HOuoaMGtOlzm&_nc_ohc=3zu8DN3IATgQ7kNvgEsnkXW&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYAY-gr-WvjcKbc_OXcbe9eHEl1hH8owglg_X2YrJZf8nw&oe=666884C3",
      title: "Photo 6",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/447849763_1167065044530802_6606844368048572538_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEN2QeAqsXnmuMdQQk_gE1u-RgMuVUCetD5GAy5VQJ60IS1DrVIGnfiaSuZdJ36AYrjr_-JtwnqnoXC5IoiyN-Z&_nc_ohc=11eeZkomq3kQ7kNvgE1QYl_&_nc_ht=scontent.fmnl4-6.fna&oh=00_AYAeiWkvmxU3hu3MLldyc0JJYoAO9XExsItapKZDlRyQJg&oe=66686551",
      title: "Photo 7",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/444487962_1167065321197441_2730279436213517543_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGOYFQlBuXeYAA5sWhpnL6HOX4tMneh8Cg5fi0yd6HwKGsraW-m-l0X8JI1PLTAYqoXJqbd-4rx2mgy8NJC-9vb&_nc_ohc=jfzXOPVWLzgQ7kNvgFc5yO-&_nc_ht=scontent.fmnl4-2.fna&oh=00_AYBUzN3PrhAuqQoBBs2rJqPU88TD4ncQmZJVZ41XpCVvpg&oe=666870EE",
      title: "Photo 8",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447829610_1167065447864095_6431549770892288487_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEmTZsCgnG2o1_SYDl6Oic5V5fyilmLPmpXl_KKWYs-akNdxUHlaceyKMmcuiGd5CsRWnGViEREBrsRKwiNGNSq&_nc_ohc=DQmVMJFucn0Q7kNvgEt8WaA&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYDjYhg4QtPZ-RCEjJWOn7kU4dJL38bFnI4dsjFKD890BQ&oe=66685F5F",
      title: "Photo 9",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/447829832_1167065481197425_696837685155498082_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG9p3QWXrlsbOKvfDnd3CJO0fi2vvERuoXR-La-8RG6hcC8t3l38uCMeo8UBdzEbFeypy95-m8iRkgggg-UYhEE&_nc_ohc=w9puaekXMgYQ7kNvgHqae00&_nc_ht=scontent.fmnl4-2.fna&oh=00_AYAgE5dDZlqIC-2CyAlHNqSEaL-QX3vq1oomzjta71ns5w&oe=666867DC",
      title: "Photo 10",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447790051_1167065494530757_2090283652430384010_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHO3reAv1jHryUxyIcMMa0fSmAFXLHVMWRKYAVcsdUxZMnH9anvABSdGSAPRigDzRKyLvgHjV4dLR9QGDSedPxk&_nc_ohc=JBE-qS2gskkQ7kNvgHnnmo-&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYC-u736IlJrfVa_ATigQ2INsl-Sbl4CVfb5CvfrdTVrrA&oe=66686497",
      title: "Photo 11",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447630445_1167065524530754_3927949625859950212_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFnbu2zpKO78k_m17HG0UFuZaQ1gbmVPYNlpDWBuZU9gxygkKTVLZjCF_UmH59xHvEMxjFgThknfX7PrNQY5OIk&_nc_ohc=kp2rJSBeiPAQ7kNvgGtdObT&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYApk_TMRovFlqnePBx0f2tzyHsgtAuI5aAKqu723y7jJw&oe=66685245",
      title: "Photo 12",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/445502793_1167065627864077_8070373125750466304_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHmZc3JEZwaz5gNvbO7WNZgzH421GPTs4LMfjbUY9Ozgueb0u4zw4Cmf6U0i6ZDxP5a6BN0Xu_U9AmNsMVLZsNI&_nc_ohc=GuqOnMSBIQgQ7kNvgF1GftJ&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYCAF3LDnTEBjA9Y_pkGjKJgmA2KRiZ0Kq9l2WLMwBNlcQ&oe=66687B65",
      title: "Photo 13",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447604333_1167065671197406_3327602780451537331_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEDE6YsL6_d0tAoJvqW6Dvnk1374UEYuCyTXfvhQRi4LGt3BaOfUtHc-6evGQKy84qnyvJPfQ5Ys7NlPzNkMdnc&_nc_ohc=d0VefLI34z4Q7kNvgFzArVP&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYAJfuD2xBkvDIEirMWzgBmnVDeHrbyVP-JN7Ah24eZTIQ&oe=666867C6",
      title: "Photo 14",
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
