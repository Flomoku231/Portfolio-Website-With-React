import React from 'react'
import Project1 from '../../../../Images/Picture/ConsultancyProject.jpg';

const PortfolioCard = () => {
  return (
    <React.Fragment>
            <div className='Portfolio__Card'>
                <div className="Portfolio__Card-image">
                    <img id='Portfolio_image' src={Project1} alt=''/>
                </div>
                <div className="portfolio__Card-content">
                    <h2>World Health Organization Project</h2>
                </div>
            </div>
    </React.Fragment>
  )
}

export default PortfolioCard