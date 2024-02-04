import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Experience from "./components/exerience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />

      <About />
      <Experience />
      <Services />
      <Portfolio />

      <Contact />
      <Footer />
    </>
  );
};

export default App;
