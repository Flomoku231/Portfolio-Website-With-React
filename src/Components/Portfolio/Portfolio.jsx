import React, { useEffect } from "react";
import Footer from "../HomePage/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import SecondNavbar from "../HomePage/Intro/SecondNavbar";
import PortfolioDetails from "./PortfolioDetails";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <React.Fragment>
      <div className="Portfolio__Page">
        <SecondNavbar />
        <h2 id='Page-Head'>Below are the Projects I Have Execute</h2>
          <div className="Page__Card-row1" >
            <div  data-aos="fade-right"><PortfolioDetails /></div>
          </div>
            <div className="Page__Card-row2" >
                <div data-aos="fade-right"><PortfolioDetails /></div>
            </div>
            <div className="Page__Card-row2" >
              <div data-aos="fade-right" ><PortfolioDetails /></div>
            </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
