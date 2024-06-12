import React, { useState, useEffect } from "react";
import "./PerCarousel.css";
import Rado from "../Gallery/images/RadztechFamily/Rado.jpg";
import Rose from "../Gallery/images/RadztechFamily/Rose.jpg";
import Celso from "../Gallery/images/RadztechFamily/Celso.jpg";
import Renen from "../Gallery/images/RadztechFamily/Renen.jpg";
import Archie from "../Gallery/images/RadztechFamily/Archie.jpg";
import Rouella from "../Gallery/images/RadztechFamily/Rouella.jpg";
import Ronald from "../Gallery/images/RadztechFamily/Ronald.jpg";
import Rea from "../Gallery/images/RadztechFamily/Rea.jpg";
import Lovely from "../Gallery/images/RadztechFamily/Lovely.jpg";
import Raplh from "../Gallery/images/RadztechFamily/Ralph.jpg";
import Jean from "../Gallery/images/RadztechFamily/Jean.jpg";
import { Avatar, Typography } from "@material-ui/core";

const PerCarousel = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const allItems = document.querySelectorAll(".per-carousel .item");
    const itemsArray = Array.from(allItems);
    setItems(itemsArray);

    carouselClass(itemsArray);
  }, []);

  const carouselClass = (items) => {
    items.forEach((item) => {
      item.classList.remove(
        "center-item",
        "before-item",
        "after-item",
        "second-item",
        "last-item"
      );
      item.style.zIndex = "0";
    });

    items[0].classList.add("center-item");
    items[0].style.zIndex = "90";

    if (items.length > 1) {
      items[1].classList.add("second-item");
      items[1].classList.add("after-item");
      items[1].style.zIndex = "80";
    }

    if (items.length > 2) {
      items[2].classList.add("after-item");
      items[2].style.zIndex = "70";
    }

    if (items.length > 3) {
      items[items.length - 1].classList.add("last-item");
      items[items.length - 1].classList.add("before-item");
      items[items.length - 1].style.zIndex = "60";
    }

    if (items.length > 4) {
      items[items.length - 2].classList.add("before-item");
      items[items.length - 2].style.zIndex = "50";
    }
  };

  const handleNextClick = () => {
    const newItems = [...items.slice(1), items[0]];
    setItems(newItems);
    carouselClass(newItems);
  };

  const handlePrevClick = () => {
    const newItems = [items[items.length - 1], ...items.slice(0, -1)];
    setItems(newItems);
    carouselClass(newItems);
  };

  useEffect(() => {
    const nextButton = document.querySelector(".per-next");
    const prevButton = document.querySelector(".per-prev");

    nextButton.addEventListener("click", handleNextClick);
    prevButton.addEventListener("click", handlePrevClick);

    const handleTouchStart = (event) => {
      const xClick = event.touches[0].pageX;
      const handleTouchMove = (event) => {
        const xMove = event.touches[0].pageX;
        if (Math.floor(xClick - xMove) > 5) {
          handleNextClick();
        } else if (Math.floor(xClick - xMove) < -5) {
          handlePrevClick();
        }
        document
          .querySelector(".per-carousel")
          .removeEventListener("touchmove", handleTouchMove);
      };
      document
        .querySelector(".per-carousel")
        .addEventListener("touchmove", handleTouchMove);
    };

    document
      .querySelector(".per-carousel")
      .addEventListener("touchstart", handleTouchStart);

    return () => {
      nextButton.removeEventListener("click", handleNextClick);
      prevButton.removeEventListener("click", handlePrevClick);
      document
        .querySelector(".per-carousel")
        .removeEventListener("touchstart", handleTouchStart);
    };
  }, [items]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [items]);

  return (
    <section className="Per-wrapper">
      <div className="per-carousel">
        <div className="item">
          <div className="per-content">
            <div className="per-pic">
              <Avatar
                style={{
                  height: "200px",
                  width: "200px",
                  border: "1px solid #ff7704",
                }}
                src={Rado}
              />
            </div>
            <div className="per-title">
              Rado D. Racimo
              <Typography className="per-sub">
                Chief Executive Officer/Lead Developer
              </Typography>
            </div>

            <h4 className="per-mess">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h4>
          </div>
        </div>
        <div className="item">
          <div className="per-content">
            <h2 className="per-title">Venerose G. Racimo</h2>
            <Typography className="per-sub">
              Admin and Finance Executive
            </Typography>
            <h4 className="per-mess">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h4>
          </div>
        </div>
        <div className="item">
          <div className="per-content">
            <h2 className="per-title">Acquilles A. Lazaro</h2>
            <Typography className="per-sub">
              Business Development Officer
            </Typography>
            <h4 className="per-mess">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h4>
          </div>
        </div>
        <div className="item">
          <div className="per-content">
            <h2 className="per-title">Ronald Allan V. Miranda Jr.</h2>
            <Typography className="per-sub">
              Chief Operations Officer
            </Typography>
            <h4 className="per-mess">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h4>
          </div>
        </div>
        <div className="item">
          <div className="per-content">
            <h2 className="per-title">Rouella Marie R. Agonoy</h2>
            <Typography className="per-sub">
              Junior Implementation Supervisor
            </Typography>
            <h4 className="per-mess">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h4>
          </div>
        </div>
        <div className="item">
          <div className="per-content">
            <h2 className="per-title">Rea Bianca T. Rilan</h2>
            <Typography className="per-sub">
              Implementation Associate
            </Typography>
            <h4 className="per-mess">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h4>
          </div>
        </div>
        <div className="item">
          <div className="per-content">
            <h2 className="per-title">Lovely Joy C. Mina</h2>
            <Typography className="per-sub">
              Junior Implementation Associate
            </Typography>
            <h4 className="per-mess">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h4>
          </div>
        </div>
        <div className="item">
          <div className="per-content">
            <h2 className="per-title">Gechelle B. Ubaldo</h2>
            <Typography className="per-sub">
              Technical Support Associate
            </Typography>
            <h4 className="per-mess">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h4>
          </div>
        </div>
        <div className="item">
          <div className="per-content">
            <h2 className="per-title">Jean Carla D. Barrientos</h2>
            <Typography className="per-sub">Admin Staff</Typography>
            <h4 className="per-mess">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h4>
          </div>
        </div>
        <div className="item">
          <div className="per-content">
            <h2 className="per-title">Celso G. Laggui Jr.</h2>
            <Typography className="per-sub">
              Senior Software Developer
            </Typography>
            <h4 className="per-mess">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h4>
          </div>
        </div>
        <div className="item">
          <div className="per-content">
            <h2 className="per-title">Renen C. Rivera</h2>
            <Typography className="per-sub">
              Senior Software Developer
            </Typography>
            <h4 className="per-mess">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </h4>
          </div>
        </div>
      </div>
      <div className="per-control">
        <div className="per-line">
          <div className="actual-line"></div>
        </div>
        <div className="per-arrow">
          <span className="per-prev">
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
          <span className="per-next">
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
