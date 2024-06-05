// src/FusionForce.js
import React from "react";
import "./HeroPage.css";

const HeroPage = ({
  title = "FUSION",
  subtitle = "FORCE",
  tagline = "Continued Innovation.",
  timeline = "2022-PRESENT",
  belief = "WE BELIEVE THAT GREAT MARKETING DOESN'T HAVE TO BE COMPLICATED.",
  description = "TODAY, ELEVATE MARKETING IS A WELL-ESTABLISHED AGENCY KNOWN FOR ITS CREATIVE AND DATA-DRIVEN APPROACH, WITH A DIVERSE PORTFOLIO OF CLIENTS RANGING FROM STARTUPS TO ESTABLISHED BRANDS. THE AGENCY CONTINUES TO INNOVATE AND LEAD IN THE DIGITAL MARKETING INDUSTRY. THE TEAM IS DEDICATED TO STAYING AHEAD OF THE CURVE, CONSTANTLY REFINING THEIR STRATEGIES TO DELIVER THE BEST RESULTS FOR THEIR CLIENTS.",
  footer = "WHERE CREATIVITY MEETS RESULTS",
}) => {
  return (
    <div className="fusion-force">
      <div className="header">
        <div className="title">
          <h1>
            {title} <span>{subtitle}</span>
          </h1>
        </div>
        <div className="tagline">
          <h2>{tagline}</h2>
        </div>
      </div>
      <div className="details">
        <div className="timeline">
          <p>{timeline}</p>
        </div>
        <div className="belief">
          <p>{belief}</p>
        </div>
      </div>
      <div className="description">
        <p>{description}</p>
        <p className="creativity">{footer}</p>
      </div>
    </div>
  );
};

export default HeroPage;
