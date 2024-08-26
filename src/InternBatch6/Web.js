import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  makeStyles,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InternData from "./Teams/Testimonials/InternData";
import Slider from "./InternTeam/Accordion";
import Faqs from "./Faqs/Faqs";
import HeroPage from "./LandingPage/HeroPage";
import Message from "./Message/PerCarousel";
import Gallery from "./Gallery/Gallery";
import Purpose from "./Purpose/Purpose";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflowY: "hidden",
    scrollBehavior: "smooth",
  },
  LandingPane: {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  },
  primaryPanel: {
    position: "relative",
    background: "#f5f5f5",
    padding: "10vh 0",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    textAlign: "center",
    transition: "opacity 0.5s ease",
  },
  secondaryPanel: {
    position: "relative",
    height: "40vh",
    background: "#011c25",
    padding: "10vh 0",
    transition: "opacity 0.5s ease",
  },
  floatingButtonsContainer: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    display: "flex",
    //backgroundColor: "transparent",
    justifyContent: "center ",
    alignItems: "center",
    padding: theme.spacing(1),
    zIndex: 1000,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      padding: theme.spacing(0.5),
    },
  },
  floatingButton: {
    margin: theme.spacing(1, 1),
    padding: theme.spacing(0, 1),
    "&:hover": {
      background: "#ddd",
      color: "#ff7704",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "#ff7704",
    },
  },
  drawer: {
    width: "30vh",
  },
}));

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const landingPage = useRef(null);
  const secondaryPanelRef = useRef(null);
  const purposePanelRef = useRef(null);
  const messagePanelRef = useRef(null);
  const galleryPanelRef = useRef(null);
  const TeamsPanel = useRef(null);
  const faqsPanelRef = useRef(null);

  useEffect(() => {
    const scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition !== null) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
  }, []);

  const classes = useStyles();

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClick = (child) => {
    scrollToRef(child);
    setDrawerOpen(false);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: "Home", ref: landingPage },
    { label: "Purpose", ref: purposePanelRef },
    { label: "Teams", ref: TeamsPanel },
    { label: "Testimonials", ref: secondaryPanelRef },
    { label: "Messages", ref: messagePanelRef },
    { label: "Gallery", ref: galleryPanelRef },
    { label: "FAQs", ref: faqsPanelRef },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.floatingButtonsContainer}>
        <IconButton
          className={classes.menuButton}
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        {menuItems.map((item, index) => (
          <Button
            key={index}
            className={classes.floatingButton}
            onClick={() => handleClick(item.ref)}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <div className={classes.drawer}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleClick(item.ref)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <div className={classes.LandingPane} ref={landingPage}>
        <HeroPage />
      </div>
      <div className={classes.primaryPanel} ref={purposePanelRef}>
        <Purpose />
      </div>
      <div className={classes.primaryPanel} ref={TeamsPanel}>
        <Typography align="center">
          <Box fontFamily={"poppins"} fontSize={"5vw"} fontWeight={800}>
            RADZTECH <span style={{ color: "#ff7704" }}>INTERNS</span>
          </Box>
        </Typography>
        <Slider />
      </div>

      <div className={classes.secondaryPanel} ref={secondaryPanelRef}>
        <InternData />
      </div>

      <div className={classes.primaryPanel} ref={messagePanelRef}>
        <Message />
      </div>
      <div className={classes.primaryPanel} ref={galleryPanelRef}>
        <Gallery />
      </div>
      <div className={classes.primaryPanel} ref={faqsPanelRef}>
        <Faqs />
      </div>
    </div>
  );
};

export default Home;
