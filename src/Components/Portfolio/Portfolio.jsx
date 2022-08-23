import React, { useEffect } from 'react'
import Footer from '../HomePage/Footer/Footer'
import PortfolioCard from '../HomePage/HomePortfolio/PortfolioCard/PortfolioCard'
import Navbar from '../HomePage/Intro/Navbar'
import Aos from "aos";
import 'aos/dist/aos.css';

const Portfolio = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);
  return (
    <React.Fragment>
        <div className="Portfolio__Page">
            <Navbar/>
                <h2>Below are the Projects I Have Execute</h2>
            <div className="Portfolio__Page-Card" data-aos='fade-right'>
                <div className="Page__Card-row1">
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                </div>
                <div className="Page__Card-row2" data-aos='fade-left'>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                </div>
            </div>
            <Footer/>
        </div>
    </React.Fragment>
  )
}

export default Portfolio