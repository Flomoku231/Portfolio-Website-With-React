import React from 'react'
import AboutMe from './AboutMe/AboutMe'
import Experience from './Experience/Experience'
import Footer from './Footer/Footer'
import HomePortfolio from './HomePortfolio/HomePortfolio'
import Intro from './Intro/Intro'
import Services from './Services/Services'
import HomePageTestimonial from './Testimonial/HomePageTestimonial'

const HomePage = () => {
  return (
    <div>
        <Intro/>
        <AboutMe/>
        <Services/>
        <Experience/>
        <HomePortfolio/>
        <HomePageTestimonial/>
        <Footer/>
    </div>
  )
}

export default HomePage