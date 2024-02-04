import React from "react";
import "./services.css";
import { BiCheckCircle } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Transform design concepts into functional web pages.</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>
                Craft clean HTML, CSS, and JavaScript for structure, style, and
                interaction.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Ensure quick loading times and smooth user experiences.</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Make sure the website works well across different browsers.</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Collaborate on integrating frontend with backend services.</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* Ui/Ux Part */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Convert design mockups into functional web pages.</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>
                Write clean, responsive code for structure, style, and
                interactivity.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Ensure a seamless user experience across devices.</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Make the website compatible with various browsers.</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Optimize code and assets for quick loading times.</p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Implement UI elements for a better user experience.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>
                Develop scalable and efficient APIs for server-side
                functionality.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>
                Integrate with databases, ensuring seamless data storage and
                retrieval.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>
                Implement server-side logic to handle business processes and
                data manipulation.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>
                Design and implement RESTful services for smooth communication
                with the frontend.
              </p>
            </li>
            <li>
              <BiCheckCircle className="service_list-icon" />
              <p>Optimize backend code for scalability and high performance.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
