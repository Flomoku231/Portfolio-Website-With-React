import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuButton from "../../../Images/SVG/Menubar.svg";

const Navbar = () => {
  const [isVisible, setIsvisible] = useState(false);

  const HopePopup = () => {
    setIsvisible(!isVisible);
  };
  let MenuRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!MenuRef.current.contains(event.target)) {
        setIsvisible(false);
      }
    });
  });
  return (
    <>
      <nav className="Home__navbar"  >
        <div className="Home__navbar-logo">
          <Link id="Logo" to="/">
            {" "}
            <h1>GSF</h1>
          </Link>
        </div>
        <button
         className="Menu__button" onClick={HopePopup}>
          {" "}
          <img id="Menu__button-image" src={MenuButton} alt="" />{" "}
        </button>
        <div className="Home__navbar-list">
          <ul className="navbar__list">
            <Link id="Home_button" to="/">
              <li>Home</li>
            </Link>
            <a id="Services__link" href="#Services">
              {" "}
              <li>Sevices</li>
            </a>
            <Link id="Portfolio_button" to="/Portfolio">
              <li>Portfolio</li>
            </Link>
            <a id="Testimonial__link" href="#Testimonial">
              <li>Testimonial</li>
            </a>
            <Link id="ContactMe_button" to="/ContactMe">
              <li>Contact Me</li>
            </Link>
          </ul>
        </div>
      </nav>
      <div
        className={`PopupMenu ${isVisible ? "isVisible" : ""}`}
      > <h1 id="CancelMe">X</h1>
        <ul className="PopupMenu__list"  ref={MenuRef}>
          <a id="PopupServices" href="#Services">
            {" "}
            <li>Services</li>{" "}
          </a>
          <Link id="PopupPortfolio" to="/Portfolio">
            {" "}
            <li>Portfolio</li>{" "}
          </Link>
          <a id="PopupTestimonial" href="#Testimonial">
            <li>Testimonial</li>
          </a>
          <Link id="PopupContact" to="/ContactMe">
            <li>Contact Me</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
