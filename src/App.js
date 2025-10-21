import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useRef } from 'react';

function App() {
  const projectRef = useRef(null);
  const scrolltopro = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div>
        <Navbar scrolltopro={scrolltopro}/>
        <About />
        <Projects projectRef={projectRef}/>
        <Skills />
        <Contact />
      </div>































    </>
  );
}

export default App;
