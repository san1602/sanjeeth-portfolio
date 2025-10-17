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
      title: "Shoe Store  Webpage",
      description:
        "A stylish and responsive website for a Shoe Store , built using HTML , CSS and JavaScript , featuring product showcases, hover effects, and a clean user interface optimized for all screen sizes.",
      link: "#",
    },
    {
      title: "Japanese Restaurant  Webpage",
      description:
        "I created a responsive Japanese restaurant webpage using HTML, CSS, Bootstrap, and JavaScript. The site includes menu, about, and contact sections. JavaScript is used for small interactive features with simple if conditions.",
      link: "#",
    },
    {
      title: "Online-Book Store Website",
      description:
        "A fully responsive online bookstore web application built with ReactJS. Users can browse books, view details, and add them to a shopping cart.",
      link: "https://onlinebookstore-smoky.vercel.app/",
    },
  ];

  return (
    <section id="#project">
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
    </section>
  );
}

export default Projects;