import React from "react";
import "./experience.css";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience__details">
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <CiStar className="icons" />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <CiStar className="icons" />
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <CiStar className="icons" />
              <CiStar className="icons" />
              <h4>Tailsind</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <CiStar className="icons" />
              <h4>ReactJS</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience__details">
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <CiStar className="icons" />
              <h4>Node Js</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <CiStar className="icons" />
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <CiStar className="icons" />
              <CiStar className="icons" />
              <h4>PHP</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <FaStar className="icons" />
              <FaStar className="icons" />
              <FaStar className="icons" />
              <CiStar className="icons" />
              <CiStar className="icons" />
              <h4>ASP.NET</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <FaStar className="icons" />
              <FaStar className="icons" />
              <CiStar className="icons" />
              <CiStar className="icons" />
              <CiStar className="icons" />
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
