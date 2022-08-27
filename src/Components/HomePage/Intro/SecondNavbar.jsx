import React, {useEffect, useRef} from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuButton from "../../../Images/SVG/Menubar.svg";

const SecondNavbar = () => {
  const [Visible, setVisible] = useState(false);
  const SecondPopup = () => {
    setVisible(!Visible);
  };
  let SecondMenu = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!SecondMenu.current.contains(event.target)){
        setVisible(false);
      }
})})
  return (
    <>
      <nav className="Second__navbar">
        <div className="Second__navbar-logo">
          <Link id="Logo" to="/">
            {" "}
            <h1>GSF</h1>
          </Link>
        </div>
        <button className="Second__Menu-button" onClick={SecondPopup}>
          {" "}
          <img id="Second__menu-image" src={MenuButton} alt="" />{" "}
        </button>
        <div className="Second__navbar-Class">
          <ul className="Secondnavbar__list">
            <Link id="Home_button" to="/">
              <li>Home</li>
            </Link>
            <Link id="Portfolio_button" to="/Portfolio">
              <li>Portfolio</li>
            </Link>
            <Link id="ContactMe_button" to="/ContactMe">
              <li>ContactMe</li>
            </Link>
          </ul>
        </div>
      </nav>
      {/* Menu Popup */}
      <div className={`SecondPopupMenu ${Visible ? "Visible" : ""} `}>
        <h1 id='SecondCancelMe'>X</h1>
        <ul className="SecondPopupMenu__list" ref={SecondMenu}>
        <Link id="SecondPopupHome" to="/">
            {" "}
            <li>Home</li>{" "}
          </Link>
          <Link id="SecondPopupPortfolio" to="/Portfolio">
            {" "}
            <li>Portfolio</li>{" "}
          </Link>
          <Link id="SecondPopupContact" to="/ContactMe">
            <li>Contact Me</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default SecondNavbar;
