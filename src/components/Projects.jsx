import React from "react";
import Card from "./Cards/Card";
import bg1 from "../assets/bg1.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";

function Projects() {
  return (
    <div name="project" className="w-full md:h-screen text-gray-300 mt-24">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-purple-600">
            My Recent Works
          </p>
          <p className="py-6 text-xl text-black">
            Have a look at my recent works
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card image={bg1}
            title={"SoboPopx"}
            demoLink={"https://sobopopx.web.app/"}
            codeLink={"https://github.com/tracy1-sarah/SoboPopx"}
          />
          <Card image={bg3}
            title={"SoboPopx"}
            link={"https://sobopopx.web.app/"}
            demoLink={"https://sobopopx.web.app/"}
            codeLink={"https://github.com/tracy1-sarah/SoboPopx"}
          />
          <Card image={bg4}
            title={"SoboPopx"}
            link={"https://sobopopx.web.app/"}
            demoLink={"https://sobopopx.web.app/"}
            codeLink={"https://github.com/tracy1-sarah/SoboPopx"}
          />
          
        </div>
      </div>
    </div>
  );
}

export default Projects;
