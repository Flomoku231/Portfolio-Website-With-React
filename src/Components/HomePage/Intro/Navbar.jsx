import React from 'react'
import { Link } from 'react-router-dom'
import MenuButton from '../../../Images/SVG/Menubar.svg';

const Navbar = () => {
  return (
    <>
    <nav className="Home__navbar">
            <div className="Home__navbar-logo">
               <Link id='Logo' to='/'> <h1>GSF</h1></Link>
            </div>
            <button className="Menu__button"> <img id='Menu__button-image' src={MenuButton} alt=""/> </button>
            <div className="Home__navbar-list">
                <ul className="navbar__list">
                <Link id="Home_button" to='/'><li>Home</li></Link> 
                   <a id='Services__link' href='#Services'> <li>Sevices</li></a>
                    <Link id="Portfolio_button" to='/Portfolio'><li>Portfolio</li></Link> 
                    <a id='Testimonial__link' href='#Testimonial'><li>Testimonial</li></a>
                    <Link id="ContactMe_button" to='/ContactMe'><li>ContactMe</li></Link> 
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar