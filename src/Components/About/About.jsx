import React from "react";
import about from "../../assets/about.jpg";
import profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <div className="flex flex-col gap-9 justify-center items-center m-4">
      <div className="-z-50">
        <h1 className="text-4xl ml-[-50px] absolute font-semibold md:text-6xl">About me</h1>
        <img
          className="bg-transparent w-28 md:w-36 rounded-3xl h-16 relative z-[-10] bottom-1 left-13 md:left-28 md:bottom-0"
          src={about}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row gap-[50px] md:gap[90px] mt-10">
        <div>
          <img
            className="w-64 md:w-80 rounded-3xl md:h-96"
            src={profile}
            alt=""
          />
        </div>
        <div className="flex flex-col md:gap-[60px]">
          <div className="flex flex-col gap-[20px] text-[20px] font-medium">
            <p>Hello! I'm Divya Prakash Singh, a dedicated front-end web developer passionate about crafting innovative and efficient web solutions</p>
            <p>Check out my portfolio to see my projects. I'm open to new opportunities and collaborations—reach out anytime!</p>
          </div>
          <div className="flex flex-col gap-[20px] mt-8 align-middle justify-center">
            <div className="flex items-center gap-[30px] hover:scale-105 duration-300">
              <p className="min-w-[120px] text-[20px]">HTML & CSS</p>
              <hr
                className="animate-pulse w-1/2 h-2 -z-30 rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400"
                style={{ width: "50%" }}
              />
            </div>
            <div className="flex items-center gap-[30px] hover:scale-105 duration-300">
              <p className="min-w-[120px] text-[20px]">React JS</p>
              <hr
                className="animate-pulse w-1/2 h-2 -z-30 rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400"
                style={{ width: "70%" }}
              />
            </div>
            <div className="flex items-center gap-[30px] hover:scale-105 duration-300">
              <p className="min-w-[120px] text-[20px]">Java Script</p>
              <hr
                className=" -z-30 animate-pulse w-1/2 h-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400"
                style={{ width: "60%" }}
              />
            </div>
            <div className="flex items-center gap-[30px] hover:scale-105 duration-300">
              <p className="min-w-[120px] text-[20px]">Tailwind css</p>
              <hr
                className="animate-pulse w-1/2 h-2 rounded-full -z-30 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400"
                style={{ width: "50%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around w-[85%] lg:w-2/3 mt-6 gap-9 ">
        <div className="hover:scale-110 duration-300 flex flex-col items-center">
          <h1 className="text-4xl bg-gradient-to-r from-purple-700 via-pink-400 to-yellow-400 text-transparent bg-clip-text font-extrabold">1+</h1>
          <p className="">YEARS OF EXPERIENCE</p>
        </div>
        <hr className="w-full border-t-2 border-gray-300 animate-glow md:hidden" />
        <div className="hover:scale-110 duration-300 flex flex-col items-center">
          <h1 className="text-4xl bg-gradient-to-r from-purple-700 via-pink-400 to-yellow-400 text-transparent bg-clip-text font-extrabold">10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr className=" md:hidden w-full border-t-2 border-gray-300 animate-glow" />
        <div className="hover:scale-110 duration-300 flex flex-col items-center">
          <h1 className="text-4xl bg-gradient-to-r from-purple-700 via-pink-400 to-yellow-400 text-transparent bg-clip-text font-extrabold">5+</h1>
          <p>CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
