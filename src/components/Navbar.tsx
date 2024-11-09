import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo">Maham</div>
        <ul className="menu-desktop">
          <li className="menu-link"><a href="#hero">Home</a></li>
          <li className="menu-link"><a href="#about">About me</a></li>
          <li className="menu-link"><a href="#skills">Skills</a></li>
          <li className="menu-link"><a href="#projects">Projects</a></li>
          <li className="menu-link"><a href="#contact">Contact</a></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>
      {isMenuOpen && (
        <ul className="menu-mobile">
          <li className="menu-link" onClick={toggleMenu}><a href="#hero">Home</a></li>
          <li className="menu-link" onClick={toggleMenu}><a href="#about">About me</a></li>
          <li className="menu-link" onClick={toggleMenu}><a href="#skills">Skills</a></li>
          <li className="menu-link" onClick={toggleMenu}><a href="#projects">Projects</a></li>
          <li className="menu-link" onClick={toggleMenu}><a href="#contact">Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
