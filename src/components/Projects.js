import React from "react";

const Projects = () => {
  const projectList = [
    {
      name: "Chat GPT Clone",
      description: "A frontend Chat GPT platform using React and JSON file",
      link: "#",
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Portfolio",
      description: "Simple portfolio with React.",
      link: "#",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
