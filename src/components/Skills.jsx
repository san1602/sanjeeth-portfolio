import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaJava } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Java", icon: <FaJava /> },
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-icon">{skill.icon}</span> {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;