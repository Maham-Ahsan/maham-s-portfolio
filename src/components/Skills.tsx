import React from "react";
import './Skills.css';

const Skills = () => {
  return (
    <div id='skills' className="skills-container">
      <div className="skills-grid">
        <div className="skills-text">
          <h2 className="skills-title">Skills</h2>
          <p className="skills-description">
            I'm a highly skilled and dedicated Frontend Developer with a passion
            for creating engaging and user-centric interfaces. I have a strong 
            foundation in HTML, CSS, and JavaScript, along with knowledge in
            modern web technologies like React, Next.js, and TypeScript.
          </p>
        </div>
        <div className="skills-list">
          <h3 className="skills-subtitle">Technologies</h3>
          <ul className="skills-items">
            <li data-aos="fade-left">Next.js</li>
            <li data-aos="fade-left">TypeScript</li>
            <li data-aos="fade-left">HTML</li>
            <li data-aos="fade-left">CSS</li>
            <li data-aos="fade-left">JavaScript</li>
            <li data-aos="fade-left">Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
