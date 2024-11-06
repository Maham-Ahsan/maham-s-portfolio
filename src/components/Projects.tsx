import React from 'react'
import Heading  from './Heading'
import Card from './Card'
      {/**card section */}

const data = [
  {
    id: 0,
    title: "Todo List App",
    desc : "To-Do List: A simple and efficient to-do list app built using Next.js and Tailwind CSS. Users can add, mark as complete, or delete tasks, making it an intuitive tool for managing daily tasks with a vibrant and responsive UI.",
    img: "/images/todo.jpeg",
    tags : ["Next.js", "CSS", "HTML","Typescript"],
  },
  
{
  id: 1,
  title: "CountDown timer App",
  desc : "Countdown Timer: A functional countdown timer built using HTML, CSS, and JavaScript. It allows users to input time in seconds and offers start, pause, and reset functionality, with a sleek and minimalist design.",
  img: "/images/appcountdown.PNG",
  tags:["Next.js", "CSS", "HTML","Typescript"],
},
{
id: 2,
  title: "Resume Builder",
  desc : "This resume builder is a static web application developed using HTML, CSS, and TypeScript. It allows users to generate a professional-looking resume by inputting their personal information, skills, and experiences. The interface is user-friendly, with a clean layout and responsive design, making it easy to customize and download the final resume.",
  img: "/images/resume builder.PNG",
  tags : ["Next.js", "CSS", "HTML", "Typescript"],
},
{ 
  id: 3,
  title: "GIAIC Card",
  desc : "ID Card Interface: This project is a professional ID card interface showcasing details such as name, roll number, and batch. It is designed using clean HTML and CSS, with a visually appealing layout that emphasizes clarity and organization.",
  img: "/images/idcard.jpeg",
  tags : ["Next.js", "CSS", "HTML", "Typescript"],
},
 
{
  id:4,
  title: "PortFolio with HTML & CSS",
  desc : "This portfolio website is built with HTML and CSS to showcase my skills and projects. It features a responsive design, clean layout, and easy navigation, offering a professional overview of my work in frontend development.",
  img: "/images/html-css-portfolio.PNG",
  tags:["CSS", "HTML"],
},
{
  id:5,
  title: "Company portfolio with HTML & CSS",
  desc : "A company portfolio built with HTML and CSS presents a clean, responsive showcase of services, projects, and achievements. It provides a professional first impression with sections like About, Services, Portfolio, and Contact for easy navigation.",
  img: "/images/companyportfolio.PNG",
  tags:[ "CSS", "HTML"],
}
];
 
const Projects = () => {
  return (
    <div id='projects' className='container pt-32 text-green-400'>
    <Heading  title='My Projects' />
    <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-col-2 lg:grid-cols-3 place-items-center'>
      {data.map((el) => (<Card
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}

      />))}
    </div>
    </div>
  )
}

export default Projects
