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
  Zoom,
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
      title: "Photo 1",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447630595_1835908380169221_4823295065314433576_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEusrPS3iTOP4n6wjMwJkl2lVO34N4k7nCVU7fg3iTucNUlq1lE09tJ0DGOyTJv1vuImSdqNm1giXXHkY320kVc&_nc_ohc=0LVTRkQG3r4Q7kNvgH0txNR&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYDtsdJ4F0Ks8seYnB5ygDVt5GqZIL9GM04DZS7zj4vXYQ&oe=666603B5",
      title: "Photo 2",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447627493_1167087417861898_7111804964676231234_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHqc3XUtAEyaY_PK6dFY2C7gabAW-hvHt6BpsBb6G8e3gLUhlSwlyi3IpHUvNcldGP-Xy0IiYr3s-iDMOmXqbKm&_nc_ohc=dyD-W7nM58oQ7kNvgHqARXq&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYDgJEfDypLvK4fy-19VvPzU91LE6I38yKw3u413G8ATXQ&oe=6668600F",
      title: "Photo 3",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/447967254_1167087444528562_7594316008039136275_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEuiVaZuJVOPDmQ9ZwOkXJr0b94fkNF72fRv3h-Q0XvZ_7oOvQWysK761ZQJe69oISurxdcqoiZVVo7pWMeyr0O&_nc_ohc=X7M_kFqV5k8Q7kNvgHKKHk6&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYCNXSqCAJmU_U3bD8c1M2s_EQqZFYnXgJfXYm33Mnhk1Q&oe=66685EA2",
      title: "Photo 4",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447276847_1167087264528580_1339461502280618186_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF8xOf5caj7fRSlQMzPKi5m7rSollKnQIHutKiWUqdAgUGrHR3TSJxozjD5ZsiTHB3Hd1OfJpQDnnU7OeYHMi33&_nc_ohc=M3IuiG9aJrkQ7kNvgGAq9dZ&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYD3HihoFUlryCwkt_pMbtZkNsg11N9IMRwBuglZyrRcJw&oe=66687671",
      title: "Photo 5",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/447264779_1167087234528583_7097647006728490550_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHjmXSNIElkliBozVIv__mttzxNtd0dexS3PE213R17FAoQGkl4ysoj2KLtNdOmUkFaXPL48v2Re5N9d7ZPFwXs&_nc_ohc=sdsRmtDAu-IQ7kNvgE7RBfD&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYA98A1UUHB5u9QVwOdRKQgXIN3aRRxMGYk5MI3edRg3Nw&oe=666887D7",
      title: "Photo 6",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/447264779_1167087234528583_7097647006728490550_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHjmXSNIElkliBozVIv__mttzxNtd0dexS3PE213R17FAoQGkl4ysoj2KLtNdOmUkFaXPL48v2Re5N9d7ZPFwXs&_nc_ohc=sdsRmtDAu-IQ7kNvgE7RBfD&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYA98A1UUHB5u9QVwOdRKQgXIN3aRRxMGYk5MI3edRg3Nw&oe=666887D7",
      title: "Photo 7",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447213508_1167086811195292_4657323231252674131_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHa4Q7FHSbZ3IzFPjq7FWoL631uGP3bxN7rfW4Y_dvE3gcqgmFQHv9ZLUxwoTiQtvHMEtT_DS2pJKaDKY_aPgZ5&_nc_ohc=nLWDvgcw4GYQ7kNvgGzQt7M&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYAwrqQ5f_bpAwBSDnXPg_a0_paM_wVc50bm_ISipdPnoQ&oe=66688FF7",
      title: "Photo 8",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/447670841_1167086804528626_2543865037321244891_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGBWiNMkoJsRtDA5jW2drF_BRn3N7g6UDEFGfc3uDpQMR-mPgwxi5BjQsh1LC07RVRiddl_7fq1m1h0jPJJt9Hp&_nc_ohc=9jtBf4dJ29gQ7kNvgF7ANlv&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYDNMwO7bcgEi6hJ_0qWZRlzZlR7gMhrxexJIsLqIwwU5A&oe=666888DA",
      title: "Photo 9",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/447670841_1167086804528626_2543865037321244891_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGBWiNMkoJsRtDA5jW2drF_BRn3N7g6UDEFGfc3uDpQMR-mPgwxi5BjQsh1LC07RVRiddl_7fq1m1h0jPJJt9Hp&_nc_ohc=9jtBf4dJ29gQ7kNvgF7ANlv&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYDNMwO7bcgEi6hJ_0qWZRlzZlR7gMhrxexJIsLqIwwU5A&oe=666888DA",
      title: "Photo 10",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447260718_1167087301195243_5870896328878532638_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGVJMeMxWl3esOp_3zb9HQJC4MNW5NLn0wLgw1bk0ufTDE0cRnbxfW1Ob7J4AVx5bw-tj_qruNTS5aknCle4rip&_nc_ohc=5uLihRYX2goQ7kNvgHmLPN7&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYCOvEBfjTIyQSf-k6BYVxmz30Uz0H-8V6Ip_EeW5hTwpA&oe=666859C9",
      title: "Photo 11",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447292489_1167087574528549_1443043968564759619_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE0BUmfCqG5dAyz8xctAgputmZKnuZsCnW2Zkqe5mwKdfuqJEvzHR0cY4dsyXvypwTcMNeKCdTWRBtBU2mhHlLn&_nc_ohc=2qBKmvM7ulUQ7kNvgHGGDGG&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYDITSq7jXVzkXkH2dpn5GrHPV9dsL2sxWuIAL73uanoIw&oe=666890AE",
      title: "Photo 12",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447268214_1167087664528540_5613429599083766426_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHUbkDuDtdhCJj3RhNwB6Li2-83datZCvTb7zd1q1kK9GYOnaQKKEiDbUN5bpiFn8PtD1ocTEVLVW83m72WGEBV&_nc_ohc=l_IiUoqOxC4Q7kNvgGZA-Ga&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYD6Edjq-1JOnUkFIs9bmFhewwYYj8DstYLZOkiAtcMd-A&oe=66687094",
      title: "Photo 13",
      featured: false,
    },
    {
      img: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/447677611_1167087691195204_8265919591089884897_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEMXNIBpX3TD4UgdVeWmh7-DstzzGOcZ1sOy3PMY5xnW-eHI8BeGPFn8QgrgiRxYAQN4ftoFyieAKaymtULhtvI&_nc_ohc=1lfRmM5kXK8Q7kNvgEpX6Sr&_nc_ht=scontent.fmnl4-2.fna&oh=00_AYB2Kn8EEQKEHQsN26YyrbMzArX2B8IlTpbYipLrJQS1zA&oe=66686371",
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

export default Birthday;
