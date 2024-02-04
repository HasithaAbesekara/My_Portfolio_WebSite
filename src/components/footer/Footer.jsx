import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Hasi
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://www.facebook.com/profile.php?id=100073548715363"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/hasithaabesekara?igsh=YTQwZjQ0NmI0OA=="
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/Hasitha94820296?t=oUVV6zfU6_g6msG623GX3A&s=08"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>2024 &copy; Hasitha</small>
      </div>
    </footer>
  );
};

export default Footer;
