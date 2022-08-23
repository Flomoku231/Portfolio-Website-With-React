import React from "react";
import { Link } from "react-router-dom";
import Button from "../HomePage/Intro/Button";
import ContactMe from "./ContactMe";

const SuccessModal = () => {
  return (
    <div className="SuccessModal__container">
      <div className="Modal__popup">
        <h2>Message Sent Successfully</h2>
        <Link to="/ContactMe"> <Button className="Popup" name="Close" /></Link>
      </div>
      <ContactMe />
    </div>
  );
};

export default SuccessModal;
