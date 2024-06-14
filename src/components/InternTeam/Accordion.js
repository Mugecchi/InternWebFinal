import React from "react";
import { useTheme, useMediaQuery, Typography } from "@material-ui/core";
import "./Accordion.css";

const Slider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const seconHalf = (
    <>
      <li className="eight">
        <a href="#">
          <h1>
            JOAN
            <br /> OPERATIONS TEAM
          </h1>
        </a>
      </li>
      <li className="nine">
        <a href="#">
          <h1>
            NOVELYN <br /> OPERATIONS TEAM
          </h1>
        </a>
      </li>
      <li className="ten">
        <a href="#">
          <h1>
            PATRICIA
            <br /> OPERATIONS TEAM
          </h1>
        </a>
      </li>
      <li className="eleven">
        <a href="#">
          <h1>
            FRENAN
            <br /> OPERATIONS TEAM
          </h1>
        </a>
      </li>
      <li className="twelve">
        <a href="#">
          <h1>
            RYAN
            <br /> OPERATIONS TEAM
          </h1>
        </a>
      </li>
      <li className="thirteen">
        <a href="#">
          <h1>
            JOEMAR
            <br /> DEVELOPMENT TEAM
          </h1>
        </a>
      </li>
      <li className="fourteen">
        <a href="#">
          <h1>
            ISAH
            <br /> TECHNICAL SUPPORT
          </h1>
        </a>
      </li>
    </>
  );
  return (
    <Typography>
      <ul className="slider">
        <li className="one">
          <a href="#">
            <h1>
              ADONIS
              <br /> DEVELOPMENT TEAM
            </h1>
          </a>
        </li>
        <li className="two">
          <a href="#">
            <h1>
              BENEDICK
              <br /> DEVELOPMENT TEAM
            </h1>
          </a>
        </li>
        <li className="three">
          <a href="#">
            <h1>
              MIGUI
              <br /> DEVELOPMENT TEAM
            </h1>
          </a>
        </li>
        <li className="four">
          <a href="#">
            <h1>
              RANDY
              <br /> DEVELOPMENT TEAM
            </h1>
          </a>
        </li>
        <li className="five">
          <a href="#">
            <h1>
              ANDREA
              <br /> OPERATIONS TEAM
            </h1>
          </a>
        </li>
        <li className="six">
          <a href="#">
            <h1>
              ANGELINA
              <br /> OPERATIONS TEAM
            </h1>
          </a>
        </li>
        <li className="seven">
          <a href="#">
            <h1>
              FRENALYN
              <br /> OPERATIONS TEAM
            </h1>
          </a>
        </li>
        {!isMobile ? seconHalf : null}
      </ul>
      {isMobile ? <ul className="slider">{seconHalf}</ul> : null}
    </Typography>
  );
};

export default Slider;
