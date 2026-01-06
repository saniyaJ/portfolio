import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaMoon, FaSearch,FaMedium  } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export default function NavBar(){
const [scrolled, setScrolled] = useState(false);


useEffect(()=>{
const onScroll = () => setScrolled(window.scrollY > 50);
window.addEventListener('scroll', onScroll);
return () => window.removeEventListener('scroll', onScroll);
},[]);


return (
<nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
<div className="container nav-inner">
<div className="brand">Saniya Jaswani</div>
<div className="nav-links">
<ScrollLink to="about" smooth duration={400} offset={-60}>About</ScrollLink>
<ScrollLink to="projects" smooth duration={400} offset={-60}>Projects</ScrollLink>
<ScrollLink to="contact" smooth duration={400} offset={-60}>Contact</ScrollLink>
{/* <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a> */}
<a href="/SaniyaJaswaniResume.pdf" download >Resume</a>
 {/* ICONS */}
 <a href="https://medium.com/@saniyajaswani12" target="_blank" rel="noreferrer">
<FaMedium size={20} />
</a>
<a href="https://github.com/saniyaJ" target="_blank" rel="noreferrer">
<FaGithub size={20} />
</a>

<a href="https://www.linkedin.com/in/saniya-jaswani-64649679/" target="_blank" rel="noreferrer">
<FaLinkedin size={20} />
</a>
</div>
</div>
</nav>
);
}