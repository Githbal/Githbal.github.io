"use client"

import React, { useState } from "react";
import "./hamburger.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      
      <div className="hamburger " onClick={toggleMenu}>
        <div className={isOpen ? "bar bar1 open" : "bar bar1"}></div>
        <div className={isOpen ? "bar bar2 open" : "bar bar2"}></div>
        <div className={isOpen ? "bar bar3 open" : "bar bar3"}></div>
      </div>
          
      <div className={isOpen ? "menu active" : "menu"}>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/skill">Skill</a></li>
          <li><a href="/portfolio">Projek</a></li>
          <li><a href="/kontak">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;