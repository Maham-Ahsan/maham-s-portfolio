import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id='about' className='about-container'>
      <h2 className='about-title'>About Me</h2>
      <p className='about-description'>
        Hello, I'm Maham Ahsan,
        I am currently pursuing my studies in Artificial Intelligence at the Governor 
        Initiative for Artificial Intelligence and also working towards a Bachelor of 
        Arts degree at Allama Iqbal Open University (AIOU). With a passion for technology 
        and problem-solving, I am exploring the intersection of AI and creative solutions,
        building projects that combine innovation and practicality. As a frontend developer
        with experience in HTML, CSS, and TypeScript, I am now diving deeper into Next.js,
        aiming to enhance my skills and create dynamic, intelligent web applications.
      </p>
      <div className='image-container'>
        <img src='/images/logo2.png' alt='Maham' className='profile-image' />
      </div>
      <p className='about-footer'>
        I am eager to learn, adapt, and grow as a developer. I have a strong foundation in HTML, CSS,
        and TypeScript, and I am always looking for new skills and opportunities to improve my knowledge
        and skills. My goal is to contribute positively to the tech industry and to inspire others to 
        follow my passion for technology.
      </p>
    </div>
  );
};

export default About;
