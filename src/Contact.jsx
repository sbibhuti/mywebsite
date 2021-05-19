import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faMapSigns, faMobile } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceID = "service_4spzjje";
  const templateID = "template_bdfm2xl";
  const userID = "user_CsadQgi7YdhAu9skCtKB4";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        company: data.company,
        textarea: data.textarea,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully! I'll contact you as soon as possible."
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div className="box">
      <div className="contact">
        <div className="contact-info">
          <h2>feel free to reach out</h2>
          <div className="list-flex">
            <ul className="info">
              <li>
                <span>
                  <FontAwesomeIcon icon={faMapSigns} />
                </span>
                <span>
                  Rourkela <br />
                  Sundergarh, Odisha
                  <br />
                  769006
                  <br />
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faMobile} />
                </span>
                <span>
                  <br />
                  +91-8018295224
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faAt} />
                </span>
                <span>
                  <br />
                  bibhutisunari@outlook.com
                </span>
              </li>
            </ul>
            <div>
              <ul className="social">
                <li>
                  <NavLink to="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div>
            <h2>let's talk. first step is you.</h2>
            <span className="success-message">{successMessage}</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="name">
              <div className="text-contain">
                <input
                  type="textbox"
                  placeholder="Your name"
                  className="textbox one"
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message:
                        "Please enter a name with fewer than 20 characters",
                    },
                  })}
                />
                <span className="error-message one">
                  {errors.name && errors.name.message}
                </span>
              </div>
              <div className="text-contain">
                <input
                  type="textbox"
                  placeholder="Your Company"
                  className="textbox two"
                  {...register("company", {
                    required: "Please enter your company detail",
                    maxLength: {
                      value: 30,
                      message:
                        "Please enter your company with fewer than 30 characters",
                    },
                  })}
                />
                <span className="error-message two">
                  {errors.company && errors.company.message}
                </span>
              </div>
            </div>
            <div className="name">
              <div className="text-contain">
                <input
                  type="email"
                  placeholder="your email address"
                  className="textbox three"
                  {...register("email", {
                    required: "Please provide you email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid Email",
                    },
                  })}
                />
                <span className="error-message three">
                  {errors.email && errors.email.message}
                </span>
              </div>
              <div className="text-contain">
                <input
                  type="textbox"
                  placeholder="contact number"
                  className="textbox four"
                  {...register("phone", {
                    required: "Please add your phone number",
                  })}
                />
                <span className="error-message four">
                  {errors.phone && errors.phone.message}
                </span>
              </div>
            </div>
            <div className="name-text">
              <textarea
                placeholder="share your idea"
                className="textarea"
                {...register("textarea", {
                  required: "Please describe shortly your project needs...",
                })}
              />
              <span className="error-message">
                {errors.textarea && errors.textarea.message}
              </span>
              <button className="contact-button" type="submit">
                Let's Go
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
