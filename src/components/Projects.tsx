import React from 'react';
import Heading from './Heading';
import Card from './Card';
import './Project.css';

const data = [
  {
    id: 0,
    title: "Todo List App",
    desc: "To-Do List: A simple and efficient to-do list app built using Next.js and CSS. Users can add, mark as complete, or delete tasks, making it an intuitive tool for managing daily tasks with a vibrant and responsive UI.",
    img: "/images/todo.jpeg",
    tags: ["Next.js", "CSS", "HTML", "Typescript"],
  },
  {
    id: 1,
    title: "CountDown Timer App",
    desc: "Countdown Timer: A functional countdown timer built using HTML, CSS, and JavaScript. It allows users to input time in seconds and offers start, pause, and reset functionality, with a sleek and minimalist design.",
    img: "/images/appcountdown.PNG",
    tags: ["Next.js", "CSS", "HTML", "Typescript"],
  },
  {
    id: 2,
    title: "Resume Builder",
    desc: "This resume builder is a static web application developed using HTML, CSS, and TypeScript. It allows users to generate a professional-looking resume by inputting their personal information, skills, and experiences.",
    img: "/images/resume builder.PNG",
    tags: ["Next.js", "CSS", "HTML", "Typescript"],
  },
  {
    id: 3,
    title: "GIAIC Card",
    desc: "ID Card Interface: This project is a professional ID card interface showcasing details such as name, roll number, and batch, designed with HTML and CSS for clarity and organization.",
    img: "/images/idcard.jpeg",
    tags: ["Next.js", "CSS", "HTML", "Typescript"],
  },
  {
    id: 4,
    title: "Portfolio with HTML & CSS",
    desc: "A portfolio website built with HTML and CSS to showcase skills and projects. It features a responsive design, clean layout, and easy navigation for a professional overview of work.",
    img: "/images/html-css-portfolio.PNG",
    tags: ["CSS", "HTML"],
  },
  {
    id: 5,
    title: "Company Portfolio with HTML & CSS",
    desc: "A company portfolio built with HTML and CSS, presenting a clean, responsive showcase of services, projects, and achievements with sections like About, Services, Portfolio, and Contact.",
    img: "/images/companyportfolio.PNG",
    tags: ["CSS", "HTML"],
  },
];

const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <div id='heading-title'>
      <Heading  title='My Projects' /></div>
      <div className='projects-grid'>
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
