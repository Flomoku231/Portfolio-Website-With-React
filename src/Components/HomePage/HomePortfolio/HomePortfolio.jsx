import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import { useEffect } from "react";

const HomePortfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <React.Fragment>
      <div className="HomePage__Portfolio">
        <div className="HomePage__Portfolio-text">
          <h1>Check My Portfolio</h1>
        </div>
        <div className="HomePage__Portfolio-Card" data-aos="fade-right">
        <div className="HomePage__Portfolio-cart1">
          <PortfolioCard />
          <PortfolioCard />
            </div>
          <div className="HomePage__Portfolio-cart2">
          <PortfolioCard />
          <PortfolioCard />
            </div>
        </div>
        <Link id="View__All" to="/Portfolio">
          <h2 id="View__text">View All Portfolio</h2>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default HomePortfolio;
