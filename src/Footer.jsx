import { faBootstrap, faCss3Alt, faFontAwesome, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-100 text-center ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 order-1">
                <FontAwesomeIcon icon={ faBootstrap } />
                <FontAwesomeIcon icon={ faReact } />
                <FontAwesomeIcon icon={ faJsSquare } />
                <FontAwesomeIcon icon={ faFontAwesome } />
            </div>
            <div className="col-lg-4  order-3">
              <FontAwesomeIcon icon={ faHtml5 } />
              <FontAwesomeIcon icon={ faCss3Alt } />
              <FontAwesomeIcon icon={ faGitAlt } />
              <FontAwesomeIcon icon={ faGithub } />
            </div>
            <div className="col-lg-4  order-2">
              <p>© 2020 Bibhuti Sunari. All Rights Reserved | Let us express of confidence lavishly</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
