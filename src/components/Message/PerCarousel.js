import React, { useState, useEffect, useRef, useCallback } from "react";
import "./PerCarousel.css";
import Raplh from "../Gallery/images/RadztechFamily/Ralph.png";
import Jean from "../Gallery/images/RadztechFamily/Jean.png";
import Rado from "../Gallery/images/RadztechFamily/Rado.png";
import Rose from "../Gallery/images/RadztechFamily/Rose.png";
import Celso from "../Gallery/images/RadztechFamily/Celso.png";
import Renen from "../Gallery/images/RadztechFamily/Renen.png";
import Archie from "../Gallery/images/RadztechFamily/Archie.png";
import Rouella from "../Gallery/images/RadztechFamily/Rouella.png";
import Ronald from "../Gallery/images/RadztechFamily/Ronald.png";
import Rea from "../Gallery/images/RadztechFamily/Rea.png";
import Lovely from "../Gallery/images/RadztechFamily/Lovely.png";
import Chel from "../Gallery/images/RadztechFamily/Gechel.png";
import { Avatar, Typography } from "@material-ui/core";
const getRandomPastelColor = () => {
  const r = Math.floor(Math.random() * 127 + 127);
  const g = Math.floor(Math.random() * 127 + 127);
  const b = Math.floor(Math.random() * 127 + 127);
  return `rgb(${r}, ${g}, ${b})`;
};

const teamMembers = [
  {
    name: "Rado D. Racimo",
    position: "Chief Executive Officer/Lead Developer",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    src: Rado,
  },
  {
    name: "Venerose G. Racimo",
    position: "Admin and Finance Executive",
    src: Rose,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    src: Archie,
    name: "Acquilles A. Lazaro",
    position: "Business Development Officer",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    src: Ronald,
    name: "Ronald Allan V. Miranda Jr.",
    position: "Chief Operations Officer",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    src: Rouella,
    name: "Rouella Marie R. Agonoy",
    position: "Junior Implementation Supervisor",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    src: Rea,
    name: "Rea Bianca T. Rilan",
    position: "Implementation Associate",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    name: "Lovely Joy C. Mina",
    src: Lovely,
    position: "Junior Implementation Associate",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    name: "Gechelle B. Ubaldo",
    position: "Technical Support Associate",
    src: Chel,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    name: "Jean Carla D. Barrientos",
    position: "Admin Staff",
    src: Jean,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    name: "Celso G. Laggui Jr.",
    position: "Senior Software Developer",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    src: Celso,
  },
  {
    name: "Renen C. Rivera",
    position: "Senior Software Developer",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    src: Renen,
  },
];

const PerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  const updateCarouselClasses = useCallback(() => {
    const items = carouselRef.current?.querySelectorAll(".item");
    items?.forEach((item, index) => {
      item.className = "item";
      item.style.zIndex = "0";
    });
    if (!items) return;
    const length = items.length;
    items[currentIndex].classList.add("center-item");
    items[currentIndex].style.zIndex = "90";
    if (length > 1) {
      items[(currentIndex + 1) % length].classList.add(
        "second-item",
        "after-item"
      );
      items[(currentIndex + 1) % length].style.zIndex = "80";
    }
    if (length > 2) {
      items[(currentIndex + 2) % length].classList.add("after-item");
      items[(currentIndex + 2) % length].style.zIndex = "70";
    }
    if (length > 3) {
      items[(currentIndex - 1 + length) % length].classList.add(
        "last-item",
        "before-item"
      );
      items[(currentIndex - 1 + length) % length].style.zIndex = "60";
    }
    if (length > 4) {
      items[(currentIndex - 2 + length) % length].classList.add("before-item");
      items[(currentIndex - 2 + length) % length].style.zIndex = "50";
    }
  }, [currentIndex]);

  useEffect(() => {
    updateCarouselClasses();
  }, [currentIndex, updateCarouselClasses]);

  const handleNextClick = useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % teamMembers.length),
    []
  );
  const handlePrevClick = useCallback(
    () =>
      setCurrentIndex(
        (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
      ),
    []
  );

  useEffect(() => {
    intervalRef.current = setInterval(handleNextClick, 3000);
    return () => clearInterval(intervalRef.current);
  }, [handleNextClick]);

  useEffect(() => {
    const handleTouchStart = (event) => {
      const xClick = event.touches[0].pageX;
      const handleTouchMove = (event) => {
        const xMove = event.touches[0].pageX;
        if (xClick - xMove > 5) handleNextClick();
        if (xClick - xMove < -5) handlePrevClick();
        carouselRef.current.removeEventListener("touchmove", handleTouchMove);
      };
      carouselRef.current.addEventListener("touchmove", handleTouchMove);
    };
    carouselRef.current.addEventListener("touchstart", handleTouchStart);
    return () =>
      carouselRef.current.removeEventListener("touchstart", handleTouchStart);
  }, [handleNextClick, handlePrevClick]);

  return (
    <section className="Per-wrapper">
      <div className="per-carousel" ref={carouselRef}>
        {teamMembers.map((member, index) => (
          <div
            className="item"
            style={{ backgroundColor: getRandomPastelColor() }}
            key={index}
          >
            <div className="per-content">
              {member.src && (
                <div className="per-pic">
                  <Avatar
                    style={{
                      height: "35vh",
                      width: "35vh",
                      background: "white",
                      border: "1px solid #ff7704",
                    }}
                    src={member.src}
                  />
                </div>
              )}
              <div className="per-title">
                <Typography>{member.name}</Typography>
              </div>
              <Typography variant="subtitle2">{member.position}</Typography>

              <Typography className="per-mess">{member.message}</Typography>
            </div>
          </div>
        ))}
      </div>
      <div className="per-control">
        <div className="per-arrow">
          <span className="per-prev" onClick={handlePrevClick}>
            <svg
              width="9px"
              height="17px"
              viewBox="0 0 9 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <path
                  d="M5.95402631,5.53955726 L12.4900312,12.6302483 C12.5215536,12.663625 12.5200504,12.7162361 12.4866737,12.7477585 C12.4633873,12.7697513 12.4295365,12.7764084 12.3996562,12.7648714 C8.92068895,11.4216238 6.28747023,10.75 4.5,10.75 C2.75167103,10.75 0.194227704,11.392532 -3.17232997,12.6775959 L-3.17225579,12.6777903 C-3.2755576,12.7172221 -3.39126605,12.6654452 -3.43069786,12.5621434 C-3.45811021,12.4903296 -3.44198647,12.4091621 -3.38920725,12.3532783 L3.04597369,5.53955726 C3.80439711,4.73652071 5.07021051,4.70035461 5.87324707,5.45877803 C5.90093716,5.48492978 5.92787455,5.51186717 5.95402631,5.53955726 Z"
                  id="Triangle"
                  fill="#111111"
                  transform="translate(4.500000, 8.500000) rotate(-90.000000) translate(-4.500000, -8.500000) "
                ></path>
              </g>
            </svg>
          </span>
          <span className="per-next" onClick={handleNextClick}>
            <svg
              width="9px"
              height="20px"
              viewBox="0 0 9 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <path
                  d="M5.95402631,5.53955726 L12.4900312,12.6302483 C12.5215536,12.663625 12.5200504,12.7162361 12.4866737,12.7477585 C12.4633873,12.7697513 12.4295365,12.7764084 12.3996562,12.7648714 C8.92068895,11.4216238 6.28747023,10.75 4.5,10.75 C2.75167103,10.75 0.194227704,11.392532 -3.17232997,12.6775959 L-3.17225579,12.6777903 C-3.2755576,12.7172221 -3.39126605,12.6654452 -3.43069786,12.5621434 C-3.45811021,12.4903296 -3.44198647,12.4091621 -3.38920725,12.3532783 L3.04597369,5.53955726 C3.80439711,4.73652071 5.07021051,4.70035461 5.87324707,5.45877803 C5.90093716,5.48492978 5.92787455,5.51186717 5.95402631,5.53955726 Z"
                  id="Triangle"
                  fill="#111111"
                  transform="translate(4.500000, 8.500000) rotate(90.000000) translate(-4.500000, -8.500000) "
                ></path>
              </g>
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default PerCarousel;
