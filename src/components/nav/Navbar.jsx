import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";

const Navbar = () => {
  const [actveNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={actveNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={actveNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={actveNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={actveNav === "#services" ? "active" : ""}
        onClick={() => setActiveNav("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={actveNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;
