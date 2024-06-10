import React from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import "./Accordion.css"; // Ensure this CSS file exists

const Slider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const seconHalf = (
    <>
      <li className="eight">
        <a href="#">
          <h1>JOAN</h1>
        </a>
      </li>
      <li className="nine">
        <a href="#">
          <h1>NOVELYN</h1>
          <br /> <br />
          <h1>OPS TEAM</h1>
        </a>
      </li>
      <li className="ten">
        <a href="#">
          <h1>PATRICIA</h1>
        </a>
      </li>
      <li className="eleven">
        <a href="#">
          <h1>FRENAN</h1>
        </a>
      </li>
      <li className="twelve">
        <a href="#">
          <h1>RYAN</h1>
        </a>
      </li>
      <li className="thirteen">
        <a href="#">
          <h1>JOEMAR</h1>
        </a>
      </li>
      <li className="fourteen">
        <a href="#">
          <h1>ISAH</h1>
        </a>
      </li>
    </>
  );
  return (
    <>
      <ul className="slider">
        <li className="one">
          <a href="#">
            <h1>ADONIS</h1>
          </a>
        </li>
        <li className="two">
          <a href="#">
            <h1>BENEDICK</h1>
          </a>
        </li>
        <li className="three">
          <a href="#">
            <h1>MIGUI</h1>
          </a>
        </li>
        <li className="four">
          <a href="#">
            <h1>RANDY</h1>
          </a>
        </li>
        <li className="five">
          <a href="#">
            <h1>ANDREA</h1>
          </a>
        </li>
        <li className="six">
          <a href="#">
            <h1>ANGELINA</h1>
          </a>
        </li>
        <li className="seven">
          <a href="#">
            <h1>FRENALYN</h1>
          </a>
        </li>
        {!isMobile ? seconHalf : null}
      </ul>
      {isMobile ? <ul className="slider">{seconHalf}</ul> : null}
    </>
  );
};

export default Slider;
