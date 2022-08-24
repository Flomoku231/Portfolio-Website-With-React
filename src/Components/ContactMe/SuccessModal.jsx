import React from "react";
import { Link } from "react-router-dom";
import Button from "../HomePage/Intro/Button";


const SuccessModal = () => {
  return (
    <>
    <div className="SuccessModal__container">
      <div className="Modal__popup">
        <h2 Id='Modal_Head'>Message Sent Successfully</h2>
        <Link to="/ContactMe"> <Button className="Popup-button" name="OK" /></Link>
      </div>
    </div>
    </>
  );
};

export default SuccessModal;
