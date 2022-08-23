import React from "react";
import PersonImage from "../../../../Images/Picture/Picture2.jpeg";

const TestimonialCard = () => {
  return (
    <React.Fragment>
      <div className="TestimonialCard">
        <div className="TestimonialCard__content">
        <div className="TestimonialCard__text">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            veritatis nobis voluptatem ipsum dignissimos excepturi quia quos
            possimus nihil laudantium repellendus aspernatur eveniet, ullam sunt
            rerum, nesciunt expedita voluptas sit! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Blanditiis, pariatur nesciunt quod
            impedit quas dolorum nihil quae delectus et, eum eveniet atque est
            cum. Sit architecto voluptatum reprehenderit culpa ex."
          </p>
        </div><br/>
        <hr/>
        <div className="TestimonialCard__PersonInfo">
          <button className="TestimonialCard-PersonInfo-button">
            <div className="button-image">
              <img id="PersonImage" src={PersonImage} alt="" />
            </div>
            <div className="button-text">
              <span className="Span">
                <h3>Emmanuel Flomoku</h3> <h4>Web Developer</h4>
              </span>
            </div>
          </button>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TestimonialCard;
