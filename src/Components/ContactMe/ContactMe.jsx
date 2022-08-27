import React, { useState } from "react";
import emailjs from "emailjs-com";
import Validation from "./FormValidation.js";
import { useNavigate } from "react-router-dom";
import Button from "../HomePage/Intro/Button";
import SecondNavbar from "../HomePage/Intro/SecondNavbar";

const ContactMe = () => {
  const navigate = useNavigate();
  const UseForm = (Validation) => {
    const [values, setValues] = useState({
      name: "",
      email: "",
      request: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();

      setErrors(Validation(values));

      const SubmitErrors = Validation(values);
      if (Object.keys(SubmitErrors).length > 0) {
        return setErrors(SubmitErrors);
      }
      emailjs
        .sendForm(
          "service_kxb6tfb",
          "template_i734y8b",
          e.target,
          "Txy2hMdLyoMN-iiWW"
        )
        .then((res) => {});
      return navigate("/SuccessModal", { replace: true });
    };
    return { handleSubmit, handleChange, values, errors };
  };
  const { handleSubmit, errors, handleChange, values } = UseForm(Validation);
  return (
    <div className="ContactMe__Page">
      <SecondNavbar />
      <div className="ContactMe__Form">
        <form action="" className="Form__Content" onSubmit={handleSubmit}>
          <div className="NameInput">
            <label htmlFor="FullName">Full Name</label>
            <br />
            <input
              name="name"
              type="text"
              id="FullName"
              placeholder="John Brown"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p id="name-error"> {errors.name} </p>}
          </div>
          <div className="EmailInput">
            <label htmlFor="Email">Email</label>
            <br />
            <input
              name="email"
              type="email"
              id="Email"
              placeholder="abc@gmail.com"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p id="email-error"> {errors.email} </p>}
          </div>
          <div className="RequestInput">
            <label htmlFor="Request">Enter Message</label>
            <br />
            <textarea
              name="request"
              id="Request"
              cols="30"
              rows="10"
              placeholder="Write a message"
              value={values.request}
              onChange={handleChange}
            />
            {errors.request && <p id="request-error"> {errors.request} </p>}
          </div>
          <Button name="Send Message" className="Request" />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
