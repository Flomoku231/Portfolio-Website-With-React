import React from 'react'
import Project1 from '../../Images/Picture/ConsultancyProject.jpg'

const PortfolioDetails = () => {
  return (
    <React.Fragment>
    <div className='PortfolioDetails'>
        <div className="PortfolioDetails-image">
            <img id='Details_image' src={Project1} alt=''/>
        </div>
        <div className="portfolioDetails__Card-content">
            <h2 id='Details__Head' >World Health Organization Project</h2>
            <p id='Details__Paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error excepturi natus ipsa necessitatibus minus, alias amet earum tempora, ad reprehenderit numquam, 
                officia deserunt ducimus. Doloremque commodi officia dolores cupiditate in?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolore quas laborum 
                illo expedita explicabo saepe quod ipsa aspernatur, officia facilis quisquam nihil, 
                modi, dolorum reprehenderit eos voluptatum est architecto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, ullam alias mollitia voluptatem ducimus maxime minus eum quaerat,
                 dolores aspernatur obcaecati sint. Dolorem labore placeat sint soluta nobis alias consectetur?</p>
        </div>
    </div>
</React.Fragment>
  )
}

export default PortfolioDetails