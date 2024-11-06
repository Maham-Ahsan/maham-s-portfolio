import React from "react";
import { IoMenu } from "react-icons/io5";

const Navbar =() => {
    return (
        <div className="container pt-8">
          <div className="flex justify-between items-center"> 

      <div className="ml-3 text-xl text-bold">Maham</div>
    <ul className="gap-5 lg:gap-16 hidden md:flex">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"> <a href="#about">About me</a></li>
          <li className="menuLink"> <a href="#skills">Skills</a></li>
          <li className="menuLink"> <a href="#projects" >Projects</a></li>
          <li className="menuLink"> <a href="#contact" >Contact</a></li>
    </ul>
    </div>
    <IoMenu className="md:hidden" size={30}/>
  </div>
    )
};

export default Navbar
