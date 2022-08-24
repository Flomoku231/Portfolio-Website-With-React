import React from 'react'
import { Link } from 'react-router-dom'
import MenuButton from '../../../Images/SVG/Menubar.svg';

const SecondNavbar = () => {
  return (
    <>
    <nav className="Second__navbar">
            <div className="Second__navbar-logo">
               <Link id='Logo' to='/'> <h1>GSF</h1></Link>
            </div>
            <button className="Second__Menu-button"> <img id='Second__menu-image' src={MenuButton} alt=""/> </button>
            <div className="Second__navbar-Class">
                <ul className="Secondnavbar__list">
                <Link id="Home_button" to='/'><li>Home</li></Link> 
                    <Link id="Portfolio_button" to='/Portfolio'><li>Portfolio</li></Link>
                    <Link id="ContactMe_button" to='/ContactMe'><li>ContactMe</li></Link> 
                </ul>
            </div>
        </nav>
    </>
  )
}

export default SecondNavbar;