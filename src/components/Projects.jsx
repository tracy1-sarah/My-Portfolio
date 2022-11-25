import React from "react";
import Card from "./Cards/Card";
import bg1 from "../assets/movie.PNG";
import bg3 from "../assets/fairwork.PNG";



function Projects() {
  return (
    <div name="project" className="project-bg w-full md:h-screen mt-24 bg-gray-200">
      <div className="max-w-[1240px] mx-auto p-2 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-purple-600"
         >
            My Recent Works
          </p>
          <p className="py-6">
            Have a look at my recent works
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <Card image={bg1}
            title={"MoviePop"}
            demoLink={"https://popx-f5998.web.app/"}
            codeLink={"https://github.com/tracy1-sarah/MoviePop"}
          />
          <Card image={bg3}
            title={"The FairWork"}
            demoLink={"https://thefairwork.com/"}
            // codeLink={"https://github.com/tracy1-sarah/SoboPopx"}
          />
          {/* <Card image={bg4}
            title={"SoboPopx"}
            link={"https://sobopopx.web.app/"}
            demoLink={"https://sobopopx.web.app/"}
            codeLink={"https://github.com/tracy1-sarah/SoboPopx"}
          /> */}
          
          </div>
      </div>
    </div>
  );
}

export default Projects;
