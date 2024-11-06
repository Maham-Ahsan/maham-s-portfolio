import React from "react";

const skills = () => {
  return (
    <div id='skills' className="container pt-32 ">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Skills</h2>
          <p className="text-green-200 pt-2">
            I'm a highly skilled and dedicated Frontend Developer with a passion
             for creating engaging and user-centric interfaces. I have a strong 
             foundation in HTML, CSS, and JavaScript, along with knowledge in
              modern web technologies like React, Next.js, and TypeScript.
          </p>
          </div>
          <div>
            <div>
                <h3 className="text-3xl font-bold">Technologies</h3>
                <ul className="list-disc pl-6 text-green-300">
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
      </div>
  );
};

export default skills;
