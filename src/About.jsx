import React from "react";
import { NavLink } from "react-router-dom";
import SkillBar from "react-skillbars";

const About = () => {
  const skills = [
    {
      type: "HTML",
      level: 80,
    },
    {
      type: "CSS",
      level: 80,
    },
    {
      type: "Javascript",
      level: 65,
    },
    {
      type: "React",
      level: 80,
    },
    {
      type: "Redux",
      level: 80,
    },
    {
      type: "Git/Github",
      level: 60,
    },
    {
      type: "Bootstrap",
      level: 70,
    },
  ];
  const colors = {
    bar: "#a9d333",
    title: {
      text: "#000",
      background: "#e67e22",
    },
  };

  return (
    <>
      <section id="about" className="d-flex align-items-center about">
        <div className="container-fluid ">
          <div className="row title my-2">
            <div className="col text-center">
              <h1 className="text-uppercase">about me</h1>
              <h3 className="text-capitalize">I'm an open book</h3>
              <div className="title-underline"></div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 pt-3 pt-lg-0 order-1 order-md-2 d-flex justify-content-center flex-column">
                <h1>Always learning and pushing boundries</h1>
                <h2 className="my-3">
                  <em>
                    I have been designing websites for more than two years and
                    still going on with love
                  </em>
                </h2>
                <div className="mt-3">
                  <NavLink to="/contact" className="btn-get-started ">
                    Know more
                  </NavLink>
                </div>
              </div>
              <div className="col-md-6 order-2 order-md-1 skill-bar d-flex flex-column">
                <SkillBar
                  skills={skills}
                  colors={colors}
                  animationDuration={7000}
                />
                <div className="d-flex align-items-end">
                  <a href="https://www.freepik.com/vectors/background">
                    Background vector created by starline - www.freepik.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
