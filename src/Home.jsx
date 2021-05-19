import React from "react";
import web from "../src/images/home.svg";
import Particles from "react-particles-js";
import { NavLink } from "react-router-dom";
import Typed from "react-typed";

const Home = () => {
  return (
    <>
    <Particles
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 10,
                random: true,
              },
              move: {
                direction: "bottom",
                out_mode: "out",
              },
              line_linked: {
                enable: false,
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "remove",
                },
              },
              modes: {
                remove: {
                  particles_nb: 10,
                },
              },
            },
          }}
        />
      <section id="header" className="d-flex align-items-center bg-set">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-sm-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1> HI! I AM BIBHUTI SUNARI </h1>
                  <Typed
                    className="typed"
                    strings={[
                    'I am a web developer',
                    'I am a web designer',
                    'I am a Graphic Designer',
                    'I am a logo designer']}
                    typeSpeed={80}
                    backSpeed={100}
                    loop >
                </Typed>
                  <div className="mt-3">
                    <NavLink to="/services" className="btn-get-started">
                      know my work
                    </NavLink>
                  </div>
                </div>

                <div className="col-sm-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="Commom img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
