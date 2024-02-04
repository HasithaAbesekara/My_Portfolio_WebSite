import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_u38asqs",
      "template_g0ow2xp",
      form.current,
      "4z7yJTNHxKEu3TbNn"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>madusankaabesekara1@gmail.com</h5>
            <a href="mailto:madusankaabesekara1@gmail.com" target="_blank">
              Send an Email
            </a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Hasitha Abesekara</h5>
            <a
              href="https://www.linkedin.com/in/hasitha-abesekara-61aa712a2/"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsappSquare className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>0704866669</h5>
            <a
              href="https://api.whatsapp.com/send?phone=94704866669"
              target="_blank"
            >
              Send Message
            </a>
          </article>
        </div>

        {/*npm install emailjs-com --save */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
