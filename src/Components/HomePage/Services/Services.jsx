import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ServicesCard from "./ServicesCard/ServicesCard";
import AccountingAssistance from "../../../Images/Picture/AccountingAssistanceImage.jpg";
import BusinessConsultant from "../../../Images/Picture/BusinessConsultantImage.jpg";
import Budget from "../../../Images/Picture/BudgetImage.jpg";
import FinancialAssessment from "../../../Images/Picture/FinancialAssessmentImage.jpg";
const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="Services" className="Services">
      <h1>Services</h1>
      <div className="Services__Card">
        <div className="Services__Card-row1" data-aos="fade-up">
          <ServicesCard
            Image={AccountingAssistance}
            Title="Accounting Assistance"
            Paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequatur dolorum enim et cupiditate nemo ad, nesciunt quas inventore ratione itaque voluptatem magni esse? Architecto quod voluptatum eos vel ab? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ullam, consequatur ipsam nobis quaerat harum vero odit hic tenetur amet doloremque magni quae autem veniam, quas necessitatibus magnam porro aliquam. "
          />
          <ServicesCard
            Image={BusinessConsultant}
            Title="Small Business Consultancy"
            Paragraph="Doloribus consequatur dolorum enim et cupiditate nemo ad, nesciunt quas inventore ratione itaque voluptatem magni esse? Architecto quod voluptatum eos vel ab? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ullam, consequatur ipsam nobis quaerat harum vero odit hic tenetur amet doloremque magni quae autem veniam, quas necessitatibus magnam porro aliquam. "
          />
        </div>
        <div className="Services__Card-row2" data-aos="fade-up">
          <ServicesCard
            Image={Budget}
            Title="Budget and Forcasting"
            Paragraph="Doloribus consequatur dolorum enim et cupiditate nemo ad, nesciunt quas inventore ratione itaque voluptatem magni esse? Architecto quod voluptatum eos vel ab? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ullam, consequatur ipsam nobis quaerat harum vero odit hic tenetur amet doloremque magni quae autem veniam, quas necessitatibus magnam porro aliquam. "
          />
          <ServicesCard
            Image={FinancialAssessment}
            Title="Financial Assessment"
            Paragraph="Doloribus consequatur dolorum enim et cupiditate nemo ad, nesciunt quas inventore ratione itaque voluptatem magni esse? Architecto quod voluptatum eos vel ab? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ullam, consequatur ipsam nobis quaerat harum vero odit hic tenetur amet doloremque magni quae autem veniam, quas necessitatibus magnam porro aliquam. "
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
