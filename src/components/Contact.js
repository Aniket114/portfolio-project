import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa"; // Importing icons
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me through any of the following platforms:
        </p>
        <div className="contact-items">
          <a
            href="https://www.linkedin.com/in/aniket-bhambhoriya-b4618a2a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:anibhabh@gmail.com" className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>Email</span>
          </a>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+91-7898356378</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
