import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import { FaGithub, FaLinkedin, FaSearch, FaMoon } from "react-icons/fa";
import { SiGooglescholar, SiAmazon } from "react-icons/si";


function App() {
return (
<div>
<NavBar />
<main>
<header className="hero" id="home">
<div className="container hero-inner">
<div>
<h1>Hi — I’m <span className="accent">Saniya</span></h1>
<p className="lead">I’m passionate about transforming raw data into compelling stories that drive real business impact. <br/> I love solving complex problems with Data Science and making life easier through GenAI-powered systems.<br/> My work focuses on building scalable AI solutions that deliver measurable results.</p>
<a href="#projects" className="btn">See my work</a>
</div>
</div>
</header>
<About />
{/* <Employment/> */}
<Projects />
<Education />
<Contact />
<footer className="site-footer">
<div className="container">
<p>© {new Date().getFullYear()} Saniya Jaswani — <a href="https://github.com/saniyaJ/">GitHub</a></p>
</div>
</footer>
</main>
</div>
);
}


export default App;