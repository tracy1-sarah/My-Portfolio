import React from "react";
import glassesemoji from "../assets/glassesimoji.png";
import thumbs from "../assets/thumbup.png";
import crown from "../assets/crown.png";
import FloatingDiv from "./FloatingDiv/FloatingDiv";
import vector from "../assets/vector.svg";
import resume from "../assets/file/resume.pdf"
import { FaCloudDownloadAlt } from "react-icons/fa";


function Main() {
  return (
    <div name="home" className="w-full h-fit sm:h-screen flex flex-col justify-between">
      <div className="w-full h-full">
        <div className="main-container grid md:grid-cols-2 gap-2 px-24 pt-24">
          {/* Left grid */}
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-24">
            <span className="text-4xl sm:text-5xl font-bold">
              Heyaa! I am
            </span>
            <span className="text-4xl sm:text-5xl font-bold mt-4 ">
              Tracy Sarah Afram-Owusu
            </span>
            <span className="font-light text-gray-600 py-4 max-w-[700px] ">
              A Content creator and Frontend developer with high level of
              expertise in web designing and development. Skilled in Networking,
              Computing, and Teaching. Strong arts and design professional.
            </span>
            <span className="mt-2 text-2xl"> Welcome to my Space!</span>
            <a href={resume} download>
              <button className="px-4 py-2 mt-4 flex items-center text-white border bg-purple-600  border-purple-600 rounded-md">
                Download Resume
                <FaCloudDownloadAlt className="ml-3"/>
              </button>
            </a>

          </div>
          {/* RIGHT GRID */}
          <div className="image-container hidden lg:flex relative">
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
