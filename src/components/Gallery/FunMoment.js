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
  Zoom,
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
  const handleBackClick = () => {
    window.history.back();
  };
  const photos = [
    {
      img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/447620223_1835909473502445_7111774670779690064_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFDBVxtsEtgNNFInuFARzv0Xg8CwJPXF_NeDwLAk9cX89JVaJLy7KTewv_gS-RlcCUgbih34K0pYiTsy8oYeQsf&_nc_ohc=2mOOu3PTCCEQ7kNvgH1dBnz&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYB5ct8SEkm5d7Ofm22s_R3v7CdE_O0s97jrcOXdER9zbQ&oe=6665E598",
      title: "Photo 1",
      featured: true,
    },
    {
      img: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/447626886_1835909530169106_2846264745962990770_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHX__zWy_INVWrPZKMgzrY1s5e3avdvf2izl7dq929_aIp8KMAO7BMAgvruaZvKTCVz73u2HobcI44u_k7B2XZ2&_nc_ohc=nFJl1lyeUDkQ7kNvgHkxKq5&_nc_ht=scontent.fmnl4-6.fna&oh=00_AYAZXfvIhUU6TTMd_11i7xVaU1XjwUYAW7kaiqHmy9Sykw&oe=6666091D",
      title: "Photo 2",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/447641176_1835909500169109_3046860041442868471_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHrWUN0ME08qZXb5eG5hwkwrAJUPwDtfq6sAlQ_AO1-rppt_9y5dhHPAMgvEJsJU_Ca6T02UtPYtdhTZFfRC34m&_nc_ohc=-WU_2Ea0gSwQ7kNvgGzfPpV&_nc_ht=scontent.fmnl4-2.fna&oh=00_AYD68g3WMPliyGsS9wrllj6l4qTw__xfhWQ-cCVYLdbU1w&oe=6665E3C8",
      title: "Photo 3",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447623927_1835909596835766_1776232966017089093_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFDjr3PVUPF8KGqY7SKIkEbiiqnNwP6-SSKKqc3A_r5JDBy5NdfVzFPVXmZybnPZsB938L_und9_DNEz_9QTiwd&_nc_ohc=hdzUgwJSHo0Q7kNvgE3kGRx&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYCI7cJaNMZNWX3uDV9d9jrC0HAI7pJSka5m33xzVwIjuQ&oe=66660160",
      title: "Photo 4",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/447272556_1167123161191657_1186743895538470261_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF7JynOxVyMSbQKKPdpEWONSxStHQFPceJLFK0dAU9x4hR5HFEz3qqjGES4mWngkjYcW8mAiYNRSmYjBGOnj40u&_nc_ohc=tr_bVhaUc5AQ7kNvgG1TUsO&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYDXpOhNnmvuTs0HpkjBpJAfhDTfd84OwhWot3idc3PQng&oe=6668916D",
      title: "Photo 5",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447281502_1167123207858319_3413289762318236345_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHtf50yqNgL8U-DtPdqyvTuWXzjB492xwhZfOMHj3bHCLu988_bCD_toNNRisbzzvHDr-ea9v75fB5MvkPiZpnF&_nc_ohc=7_69NeZmloQQ7kNvgGkRf0X&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYA2x9cRyWfvFdfFYMiX3DJL2Za9suyPwdn6QdFmRzT_rg&oe=66689F04",
      title: "Photo 6",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447272302_1167123227858317_8362848698778016318_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeENSniTv1WFKhccY8biDZi0g_NgXl0EeEWD82BeXQR4RUL6m9jZ5AGGVZXjpnWBpr1y2TOBnv0IcYeEOta9J_VU&_nc_ohc=Eh3mvnuSlyUQ7kNvgFMkA8P&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYBgAvv9PAaYRwOshYzJB3qnYXjVEqNUIrMWc5_-EwyDoA&oe=6668A1A2",
      title: "Photo 7",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/447291046_1167123511191622_1637657918112236256_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFO5C_LGEkZ8p3RyBPX18xgmPU80NVH2WeY9TzQ1UfZZ-4Dt2RV3MDzIdD2pN7hq8gwAjArbJSDLrK06F2hk_BP&_nc_ohc=t_334UUhIXkQ7kNvgFzOtxl&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYBiZVtoxD1u0gn3jH5y6T7dS1ObMAJJwiXhwWFFyzePMA&oe=66688CE0",
      title: "Photo 8",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/447291046_1167123511191622_1637657918112236256_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFO5C_LGEkZ8p3RyBPX18xgmPU80NVH2WeY9TzQ1UfZZ-4Dt2RV3MDzIdD2pN7hq8gwAjArbJSDLrK06F2hk_BP&_nc_ohc=t_334UUhIXkQ7kNvgFzOtxl&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYBiZVtoxD1u0gn3jH5y6T7dS1ObMAJJwiXhwWFFyzePMA&oe=66688CE0",
      title: "Photo 9",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/447260596_1167123844524922_337977479998079475_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEJ_Qoz6mZPo71vGf4_Osvthw4PgK9FfeKHDg-Ar0V94u9Zuhhru-2sPADgQhqXR7UC1ifoWYgQoADfyP1ZSqdS&_nc_ohc=HadeJSp-t9gQ7kNvgFtB0Xg&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYDFXX4mPJoGCRuGz-UztgddvOFpEh06Luh7Chy_qLpjjg&oe=66688D3D",
      title: "Photo 10",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/447278079_1167123867858253_7116194801510770720_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqkaTG_MwUZqkFxzkzJkfcxor0NoKeZxzGivQ2gp5nHNPUSQYnuvWTRchGyFFsbYccI_P_6Q6NN4EdNG4OeVUr&_nc_ohc=3so5Ug0rfc0Q7kNvgE-TvDp&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYCOBx8M4kYA63ctuni9VvLIhxaxBujckgfyTdQHck5icg&oe=66687B64",
      title: "Photo 11",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447276742_1167123934524913_3524207372942183262_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeELRyOu8sd73VPLguCL_SU4cIAd2UdEplFwgB3ZR0SmUcnIbgdNDaUGm6QLU9A8cZVYs_jsyNZmB7GZu0RXdzzq&_nc_ohc=RWOwoU18rV4Q7kNvgGz2Zle&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYAPApnj39u_nEGkXfwRPlub3KvNf2CRlb69Go1DhaqaSw&oe=66689D8D",
      title: "Photo 12",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/447278074_1167123974524909_8983439946024868574_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEGRO8pO2SyfSyoZWfEop0Hv0ifoDk0gfi_SJ-gOTSB-CDvY4ahNBYyhi0n879NjW8Pt1yqnUYOv80k9edBQJ_Q&_nc_ohc=Zl3mj45rucUQ7kNvgGBriQM&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYDOvMZt1n0z3txUw3ZBDdpb4mkRQg7l7GwvIRw-3MeQYg&oe=66689741",
      title: "Photo 13",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/447223580_1167124114524895_2357458289916010960_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG_dvvjjdV4cskjbO6sr_AfpkxOUcQOlvqmTE5RxA6W-vDX66ToA9MXeENR-3vQ8LLW0l7eMjhkxW5t_JzfoEFP&_nc_ohc=9BXIYa8NZxYQ7kNvgFnDNSe&_nc_ht=scontent.fmnl4-6.fna&oh=00_AYAPyLdEE1PYOhdPWRGBzvMjmoKd3QhtDpWK-z2VGEI-2w&oe=66689F26",
      title: "Photo 14",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447261263_1167124201191553_3423671373507648823_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEnpGHb3DI5dkBo81Dpfj6ZNAowAHp5twM0CjAAenm3A82ibhpl1cxwUTJVOjBUPJ5T2ugUTW3t2pBkBErjG9WI&_nc_ohc=9vOY6EqgNUMQ7kNvgFHm-Cl&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYCFd6H2SIgy7EpkDWXZiONcxHpJ4Nj2C8Fo15LZB5DfVQ&oe=66688C70",
      title: "Photo 15",
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
          Fun Moments
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
        TransitionComponent={Zoom}
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
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

export default FunMoment;
