import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="shadow  rounded-top">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Please click on the button below to check on my work.
            </p>
            <NavLink to="" className="button">
              Check Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
