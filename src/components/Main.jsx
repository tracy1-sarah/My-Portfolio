import React from "react";
import tracy from "../assets/tracybg.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import glassesemoji from "../assets/glassesimoji.png";
import thumbs from "../assets/thumbup.png";
import crown from "../assets/crown.png";
import FloatingDiv from "./FloatingDiv/FloatingDiv";
import vector from "../assets/vector.svg";
import resume from "../assets/file/resume.pdf"
import { motion } from "framer-motion"

function Main() {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="w-full h-full">
        <div className="main-container grid md:grid-cols-2 gap-2 px-24 pt-24">
          {/* Left grid */}
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-24">
            <span className="intro font-bold md:text-3xl lg:text-6xl">
              Heyaa! I am
            </span>
            <span className="name font-bold text-3xl mt-4 ">
              Tracy Sarah Afram-Owusu
            </span>
            <span className="font-light text-gray-600 mt-2 ">
              A Content creator and Frontend developer with high level of
              expertise in web designing and development. Skilled in Networking,
              Computing, and Teaching. Strong arts and design professional.
            </span>
            <span className="mt-2 text-2xl"> Welcome to my Space!</span>
            <a href={resume} download>
              <button className="px-4 py-2 mt-4 text-white border bg-purple-600 hover:bg-purple-600 border-purple-600 rounded-md">Download Resume</button>
            </a>

            {/* Social Media handles */}
            <div
              className="absolute flex flex-col h-[150px] py-2 md:min-w-[500px] bottom-[1%] mx-1 md:left-1/2 transform md:-translate-x-1/2
               bg-zinc-100 border border-purple-300 rounder-xl text-center shadow-xl"
            >
              <p className="text-xl py-2">Social Media Handles</p>
              <div className="flex justify-between flex-wrap px-4">
                <p className="flex px-2 py-2 text-slate-500">
                  {" "}
                  <a
                    className="w-full scale-50 hover:cursor-pointer"
                    href="https://github.com/tracy1-sarah"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={github} alt="Background" />
                  </a>
                </p>
                <p className="flex px-2 py-2 text-slate-500">
                  {" "}
                  <a
                    className="w-full scale-50 hover:cursor-pointer"
                    href="https://www.linkedin.com/in/tracy-sarah-afram-owusu-165b6818a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedin} alt="Background" />
                  </a>
                </p>
                <p className="flex px-2 py-2 text-slate-500">
                  <a
                    className="w-full scale-50 hover:cursor-pointer"
                    href="https://www.instagram.com/_tracysarah/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={instagram} alt="Background" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* RIGHT GRID */}
          <div className="image-container flex relative">
            <img src={vector} alt="vector" />
            {/* <img src={tracy} alt="Background" /> */}
            <img src={glassesemoji} alt="emoji" />

            <div className="top-24 left-2/4">
              <FloatingDiv image={crown} text1="Web" text2="Developer" />
            </div>
            <div className="top-96 left-20">
              <FloatingDiv image={thumbs} text1="Content" text2="Creator" />
            </div>
            <div className="blur bg-purple-500"></div>
            <div className="blurs"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
