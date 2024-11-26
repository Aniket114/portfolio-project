import React from "react";
import img from "../assest/myimage.jpg"

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1>Hi, I'm <span className="highlight">Aniket Bhambhoriya</span></h1>
          <p>
            A passionate <strong>Frontend Developer</strong> with skills in <strong>HTML, CSS, JavaScript, React, Bootstrap</strong>, and more. I love crafting user-friendly websites and bringing designs to life.
          </p>
          <div className="home-buttons">
            <a href="#contact" className="btn">Contact Me</a>
            <a href="resume.pdf" download="Aniket-Bhambhoriya-Resume.pdf" className="btn secondary-btn">Download Resume</a>
          </div>
        </div>
        <div className="home-image">
          <img src={img} alt="Your Name" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
