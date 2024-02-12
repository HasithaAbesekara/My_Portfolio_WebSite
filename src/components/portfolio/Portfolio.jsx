import React from "react";
import "./portfolio.css";
import p1 from "../../assets/Food.png";
import p2 from "../../assets/login page.png";
import p3 from "../../assets/User_Mangemnet.png";
import p4 from "../../assets/watherapp.png";
import p5 from "../../assets/porlt.png";
import p6 from "../../assets/food-recipi.png";

const data = [
  {
    id: 1,
    image: p1,
    title: "Food Delivery NextJs And ReactJs",
    github:
      "https://github.com/HasithaAbesekara/Food_Delivery_Next_js_React_js.git",
  },
  {
    id: 2,
    image: p2,
    title: "Login Registration MERN Stack",
    github:
      "https://github.com/HasithaAbesekara/Login_Registration_MERN_Stack.git",
  },
  {
    id: 3,
    image: p3,
    title: "User Managment System In Crud",
    github: "https://github.com/HasithaAbesekara/React_Node_CURD.git",
  },
  {
    id: 4,
    image: p4,
    title: "Wather App Using ReactJs",
    github: "https://github.com/HasithaAbesekara/Weather-App.git",
  },
  {
    id: 5,
    image: p5,
    title: "This is a My portfolio ",
    github: "https://github.com",
  },
  {
    id: 6,
    image: p6,
    title: "This is a React Redux Project ",
    github: "https://github.com/HasithaAbesekara/Food_Recipe_App.git",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="protfolio__item-ca">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
