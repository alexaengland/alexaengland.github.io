import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#home" className="navbar-logo">AE</a> {/* Your initials or logo */}
        </div>
        <div className="navbar-toggle" onClick={toggleDropdown}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-list ${isOpen ? 'navbar-dropdown' : ''}`}>
          <li className="navbar-item">
            <Link to="home" duration={0}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="about" duration={0}>About</Link>
          </li>
          <li className="navbar-item">
            <Link to="education" duration={0}>Education</Link>
          </li>
          <li className="navbar-item">
            <Link to="experience-and-skills" duration={0}>Experience & Skills</Link>
          </li>
          <li className="navbar-item">
            <Link to="projects" duration={0}>Projects</Link>
          </li>
          <li className="navbar-item">
            <Link to="contact" duration={0}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;





