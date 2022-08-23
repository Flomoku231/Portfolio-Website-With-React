import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import FocusImage from './FocusImage'
import Navbar from './Navbar'

const Intro = () => {
  return (
    <div className='HomePage'>
            <Navbar/>
        <div className='Intro__Container'>
          <div className="Intro__Container-content">
               <div className="Intro__Container-text">
                    <h2 id='Greet'>Hello,</h2>
                    <h1 id='Introduction'>I am Gayflor S. Flomo</h1>
                    <p id='Paragraph'>Secure your Financial security with me</p>
                </div> 
                  <div className="Intro__Container-button">
                   <Link to='/ContactMe'> <Button
                    name="Hire Me"
                    /></Link>
                    <Button 
                    className='DownloadCV' 
                    name="Download CV"/>
                  </div>
            </div>
            <div className="Intro__Container-image">
                <FocusImage/>
            </div>
        </div>
    </div>
  )
}

export default Intro