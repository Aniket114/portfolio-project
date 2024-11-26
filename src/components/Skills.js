import React from "react";


const Skills = () => {
  const skills = [
    { name: "HTML", level: "80%" },
    { name: "CSS", level: "80%" },
    { name: "JavaScript", level: "75%" },
    { name: "Bootstrap", level: "70%" },
    { name: "React", level: "70%" },
    { name: "jQuery", level: "70%" },
    { name: "Java", level: "65%" }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2>My Skills</h2>
        <p>Here are some of the technologies I have worked with:</p>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
