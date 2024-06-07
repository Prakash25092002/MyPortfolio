import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import dph from "../../assets/dph.jpg";
import Prakash_Resume from "../../assets/Prakash.Resume.pdf";
import About from "../About/About";
import Services from "../Services/Services"
import Experience from "../Experience"
import Contact from "../Contact";
const Hero = () => {
  return (
    <div className="flex flex-col gap-16">
    <div className="flex flex-col items-center w-full mt-16 px-4 md:px-0">
      <img className="w-56 rounded-full animate-pulse-slow hover:scale-110 transition-transform duration-300" src={dph} alt="" />

      <h1 className="text-4xl font-semibold text-center mt-6 w-full md:w-2/5 animate-slideIn">
        <span className="bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 text-transparent bg-clip-text font-extrabold">
          I'm Divya Prakash Singh,
        </span>
        Frontend Developer in INDIA.
      </h1>

      <p className="text-center text-lg mt-8 w-full md:w-2/5 px-4 md:px-0 animate-slideInDelay">
      Creating dynamic and innovative web experiences as a passionate front-end developer.


      </p>

      <div className="   flex flex-col md:flex-row items-center gap-4 text-lg font-semibold justify-center mt-8">
        <Link to="/contact"> {/* Link to the contact page */}
          <div className="bg-gradient-to-r from-fuchsia-700 to-yellow-400 w-40 h-9 flex items-center justify-center rounded-full border-2 border-black text-sm cursor-pointer hover:scale-105 duration-500 hover:border-white ">
            Contact With Me
          </div>
        </Link>
        <div className="border-2 border-white w-32 h-9 flex items-center justify-center rounded-full text-sm cursor-pointer hover:scale-105 duration-500 hover:border-pink-600 ">
          <a href={Prakash_Resume} download={true}>
            My Resume
          </a>
        </div>
      </div>
    </div>
    <About/>
    <Experience/>
    <Services/>
    <Contact/>
    </div>
  );
};

export default Hero;
