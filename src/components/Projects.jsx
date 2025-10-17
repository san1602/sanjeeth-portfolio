import React from "react";
function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built using React.js showcasing my skills, projects, and contact details. Fully responsive with smooth animations.",
      link: "https://sanjeeth-portfolio.vercel.app/",
    },
    {
      title: "Shoe Store Webpage",
      description:
        "A stylish and responsive shoe store website built using HTML and CSS, featuring product showcases, hover effects, and a clean user interface optimized for all screen sizes.",
      link: "#",
    },
    {
      title: "Online-Book Store Website",
      description:
        "A fully responsive online bookstore web application built with ReactJS. Users can browse books, view details, and add them to a shopping cart.",
      link: "#",
    },
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;