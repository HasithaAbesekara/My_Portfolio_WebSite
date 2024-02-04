import React from "react";
import Cv from "../../assets/Full-stack developer.pdf";

const CV = () => {
  return (
    <div className="cv">
      <a href={Cv} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CV;
