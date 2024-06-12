import React from "react";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import hero from "../../images/album1/bg.jpg";
import LazyLoad from "react-lazyload";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  heroSection: {
    position: "relative",
    textAlign: "center",
    color: "white",
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroText: {
    zIndex: 1,
    "& h1": {
      fontSize: "3rem",
      fontWeight: 700,
    },
    "& p": {
      fontSize: "1.25rem",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#2e2c3c86",
    zIndex: 0,
  },
  card: {
    width: "100%",
    height: "100%", // Adjusted for mobile
    marginBottom: theme.spacing(2), // Added margin bottom
  },
  media: {
    height: 200,
    [theme.breakpoints.down("xs")]: {
      height: 150, // Adjusted for smaller screens
    },
  },
  cardTitle: {
    textAlign: "left",
    padding: theme.spacing(2),
    "& h5": {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    "& p": {
      color: theme.palette.text.secondary,
    },
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: "#fff",
    color: "#000",
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },
}));

// Dynamically import images from the ../../images directory

const albums = [
  {
    title: (
      <>
        Reporting
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          - Interns unite their efforts, blending individual insights into
          collective success. From meticulous reporting to seamless teamwork,
          they elevate each task with unity and purpose.
        </p>
      </>
    ),
    thumbnail:
      "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447638316_1835900570170002_3322422175933087373_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF6I1cycDgPYDQUiN7xZr3_AmfK780yLvoCZ8rvzTIu-jf_BPZEkVUx3Xo3GwKjkRIOtU0Z4Gx54SCok0a_Ipxq&_nc_ohc=6Lcb8tcAv4EQ7kNvgEBNi-i&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYD5PeyneoVb80fbKyfQwvA5l6A9PIFOHvhtQFDW59WpSg&oe=6665E2D6",
    link: "/Reporting",
  },
  {
    title: (
      <>
        Orientation
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          - Interns unite their efforts, blending individual insights into
          collective success. From meticulous reporting to seamless teamwork,
          they elevate each task with unity and purpose.
        </p>{" "}
      </>
    ),
    thumbnail:
      "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/447634084_1835902723503120_1336065542110380525_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFDtdLGWMza8qMk0GgT6iaMHKryrP_PS-IcqvKs_89L4rolfRvOWW6Jgm2oO4-7iGSoPmR11BDBjx09rbMPpj3f&_nc_ohc=P6enxm_f_XAQ7kNvgExxH4k&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYCuHSszEHxedVp334hG1ksY0Dm9CcDxGiG0G9QbI958EQ&oe=6665E307",
    link: "/Orrientation",
  },
  {
    title: (
      <>
        DeploMoments
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          - Interns are assigned to various company clients, working
          collaboratively to address their needs and achieve common goals. They
          interact directly with clients, provide system guidance, and supply
          essential materials for support.
        </p>
      </>
    ),
    thumbnail:
      "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/447616330_1835903426836383_990556026098755227_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFjmubmwclqQGHMXYUIs4kYUyyTFXvVdwtTLJMVe9V3C8stZFNiMwtmeUtY3RG-i5NaXhL4mFsY3eiZGf7DvdfE&_nc_ohc=L87oigqxfOcQ7kNvgEmMhQE&_nc_ht=scontent.fmnl4-6.fna&oh=00_AYAynOl8xaUSkG1Un_XS4hEix8QhBBwo7MfB3Rc7023KWg&oe=6665F465",
    link: "/DeploMoment",
  },
  {
    title: (
      <>
        Meet the Clients
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          - Interns dive into real-world experience by joining dynamic client
          meetings, both online and face-to-face, gaining invaluable exposure
          and insights.
        </p>
      </>
    ),
    thumbnail:
      "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447555963_1835904470169612_2860019519222343637_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEMk5wFbLtDmWQwcU3p0tSkUar0ADKSzSZRqvQAMpLNJp4LvCg8D1ByPCcSs8QJBBLGS_gFukCov3GmYTG9Y47U&_nc_ohc=n1HPxOvblYUQ7kNvgFAK5FF&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYA3VEoZliE1S9hbC2fcOADS9TeaXrKyKWM-C5hFIeu-cQ&oe=6665FBF7",
    link: "/Client",
  },
  {
    title: (
      <>
        Food Hangouts
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          - Gather, eat, laugh and repeat with the Radztech Team. Nothing brings
          people together like good “Balut” and siomai.
        </p>
      </>
    ),
    thumbnail:
      "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/447634533_1835905043502888_2886184013118430640_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFiUErejNvLkjsLZXm97mEyU-iVA2AQf4xT6JUDYBB_jDWLRx4sV4tLZYTjS9gHU9jj5lz2IT0nNMzbsuowXqm4&_nc_ohc=8Pbfc3ECD64Q7kNvgHLoWtY&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYDnfx7_qWd2of_ZTtA_hK0PXLrSw1K8jFKkf4k1nfXDfg&oe=6665EDF3",
    link: "/Food",
  },
  {
    title: (
      <>
        Bible Study
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          - Together in His presence. Building a foundation of faith, one Bible
          study at a time.
        </p>
      </>
    ),
    link: "/BibleStudy",
    thumbnail:
      "https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/447616622_1835905440169515_7091066312287955012_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGFZpGOa5NLTL8UzyqEnkTAv-uMT3joSHG_64xPeOhIcTruyd_833UYrNKqZR_9rpDoBBdKyXH_6qC4DYreTpRw&_nc_ohc=ejyTU7AgE6gQ7kNvgHvkT43&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYAPV99CMNHtMtleIJDFzBikqbYcfjpkNKP82R_EWcaMag&oe=66660DD4",
  },
  {
    title: (
      <>
        Birthday Celebrations
        <br />
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          - Celebrating the best CEO ever and the powerhouse of business
          development as they lead the Radztech Team to success and new heights.
        </p>
      </>
    ),
    thumbnail:
      "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/447634070_1835905766836149_1517968031101273750_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEcHBiRgt4PNsDmV7NgOT4TWeCtQTEcLwFZ4K1BMRwvAfZE4TPvmW0nGkcQ7E4vvHe7WOk_guZo7rQTe7f7qL8h&_nc_ohc=18w0El_0_fgQ7kNvgFFyWXe&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYCtFpvyUk0d-j-3BPKDTu6wQRokRIY1hOa8I0gIns4mqw&oe=6666035B",
    link: "/Birthday",
  },
  {
    title: (
      <>
        Fun Moments
        <br />
        <p style={{ fontSize: 16, fontWeight: 400 }}>
          - In a single camera’s click ripples countless photos as the interns
          were unstoppable to show their smiles and take poses.
        </p>{" "}
      </>
    ),
    thumbnail:
      "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/447620223_1835909473502445_7111774670779690064_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFDBVxtsEtgNNFInuFARzv0Xg8CwJPXF_NeDwLAk9cX89JVaJLy7KTewv_gS-RlcCUgbih34K0pYiTsy8oYeQsf&_nc_ohc=2mOOu3PTCCEQ7kNvgH1dBnz&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYB5ct8SEkm5d7Ofm22s_R3v7CdE_O0s97jrcOXdER9zbQ&oe=6665E598",
    link: "/FunMoment",
  },
];

const Gallery = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <LazyLoad>
        {" "}
        <div className={classes.heroSection}>
          <div className={classes.overlay}></div>
          <div className={classes.heroText}>
            <Typography variant="h1">Interns Gallery</Typography>
            <Typography variant="body1">A Journey Frozen in Time </Typography>
          </div>
        </div>
      </LazyLoad>
      <Grid container spacing={2}>
        {albums.map((album, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className={classes.card}>
              <CardActionArea component={Link} to={album.link}>
                <LazyLoad>
                  <CardMedia
                    className={classes.media}
                    image={album.thumbnail}
                    title={album.title}
                  />
                </LazyLoad>
                <div className={classes.cardTitle}>
                  <Typography variant="h5">{album.title}</Typography>
                  <Typography variant="body2">{album.subtitle}</Typography>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
