import React from 'react';
import { Link } from 'react-scroll';
import './Header.css'; // Ensure this is the correct path

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#home" className="navbar-logo">AE</a> {/* Your initials or logo */}
        </div>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className="navbar-item">
            <Link to="education" smooth={true} duration={500}>Education</Link>
          </li>
          <li className="navbar-item">
            <Link to="experience-and-skills" smooth={true} duration={500}>Experience & Skills</Link>
          </li>
          <li className="navbar-item">
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li className="navbar-item">
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



