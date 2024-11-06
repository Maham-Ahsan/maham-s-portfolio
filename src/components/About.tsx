import React from 'react'

const About = () => {
  return (
    <div id='about' className='container pt-32 '>
      <h2 className='text-6xl justify-center flex text-green-300 md:'>About Me</h2>
      <p className='text-lg'>
      Hello, I'm Maham Ahsan,
      I am currently pursuing my studies in Artificial Intelligence at the Governor 
      Initiative for Artificial Intelligence and also working towards a Bachelor of 
      Arts degree at Allama Iqbal Open University (AIOU). With a passion for technology 
      and problem-solving, I am exploring the intersection of AI and creative solutions,
       building projects that combine innovation and practicality. As a frontend developer
        with experience in HTML, CSS, and TypeScript, I am now diving deeper into Next.js,
         aiming to enhance my skills and create dynamic, intelligent web applications.
      </p>
      <div className='flex justify-center'>
        <img src='/images/logo2.png' alt='Maham' className='rounded-full w-32 h-32 shadow-lg' />
    </div>
<p>
  I am eager to learn, adapt, and grow as a developer. I have a strong foundation in HTML, CSS,
   and TypeScript, and I am always looking for new skills and opportunities to improve my knowledge
    and skills. My goal is to contribute positively to the tech industry and to inspire others to 
    follow my passion for technology.
 
</p>
    </div>
  )
}

export default About
