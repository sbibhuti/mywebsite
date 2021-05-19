import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Services = () => {
  return (
    <>
      <section id="services">
        <div className="my-5">
          <h1 className="text-center"> My Work </h1>
          <div className="title-underline"></div>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Sdata.map((val, ind) => {
                  return (
                    <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
