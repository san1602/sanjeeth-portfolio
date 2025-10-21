import React from 'react';
import { useRef } from 'react';
function Navbar({scrolltopro}) {
  return (
    <nav className="navbar">
      <h1>SANJEETH M</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#project" onClick={scrolltopro}>Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;