import React from 'react'


const ServicesCard = (props) => {
  return (
    <div className='ServicesCard'>
        <div className="ServicesCard-row">
        <div className="ServicesCard__Image">
            <img src={props.Image} alt=""/>
        </div>
        <div className="ServicesCard__text">
            <h1>{props.Title}</h1>
        </div>
        </div>
        <div className="ServicesCard__paragraph">
        <p>{props.Paragraph}</p>
         </div>
    </div>
  )
}

export default ServicesCard