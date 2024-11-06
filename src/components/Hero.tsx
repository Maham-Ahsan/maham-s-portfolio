

import React from "react";
import Navbar from "./Navbar";



const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/images/pic.jpeg)]  bg-cover"
      style={{ backgroundSize: "20%", backgroundPosition: "left 70px top 170px" }}
    >
      <Navbar />
      <div className="container grid lg:grid-col-2 h-[calc(80vh-150px)] pr-10">
        <div className="hidden lg:block"></div>
        <div className="text-[80px] sm:text-[60px] font-bold leading-tight flex justify-center items-center">

           <div className=" lg:ml-[30px] sm:ml-[150px]">
            <p  data-aos="zoom-in-down" className="text-bold text-8xl text-green-300">I'm Maham</p>
            <p data-aos="zoom-in-down" className="text-6xl text-green-200">FrontEnd Developer...</p>
            <p data-aos="zoom-in-down" className="text-medium text-4xl text-green-150">Welcome to my portfolio</p>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Hero;
