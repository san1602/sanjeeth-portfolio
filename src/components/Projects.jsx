import React from 'react';

function Projects() {
  const projects = [
    { name: "Shoestore Webpage", link: "#" },
    { name: "Japanese restaurant Webpage", link: "#" },
    { name: "E-commerce App", link: "#" },
    
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;