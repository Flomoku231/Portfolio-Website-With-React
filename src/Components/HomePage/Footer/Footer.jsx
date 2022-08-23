import React from "react";
import { Link } from "react-router-dom";
import Button from "../Intro/Button";
import FacebookIcon from '../../../Images/SVG/Facebook.svg';
import InstagramIcon from '../../../Images/SVG/Instagram.svg';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="HomePage__footer">
          <div className="Footer__rightcontent-icons">
            <span className="Facebook__Icon"> <img src={FacebookIcon} alt=""/> <p>Facebook</p> </span>
            <span className="Instagram-Icon"><img src={InstagramIcon} alt=""/> <p>Instagram</p></span>
          </div>
          <div className="HomePage__footer-button">
           <Link to='/ContactMe'> <Button
            className="FooterButton"
            name="Send A Request"
            /></Link>
          </div>
          <div className="Footer__rightcontent-icons">
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
          </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
