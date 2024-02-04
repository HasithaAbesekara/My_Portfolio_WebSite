import React from "react";
import "./about.css";
import ME from "../../assets/pp.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>6 Month Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>100+ SriLanka</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            I am a final year ICT student seeking an opportunity as a Full Stack
            developer. Eager to transition into a Full Stack Developer role, I
            am equipped with additional expertise in Node.js, MongoDB,
            PostgreSQL, and .NET. I am actively seeking a challenging position
            in a dynamic and collaborative environment, where I can leverage my
            comprehensive skill set to contribute to end-to-end development
            projects. My goal is to further enhance my capabilities as a Full
            Stack Developer, gain valuable experience, and deliver top-tier
            performance.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
