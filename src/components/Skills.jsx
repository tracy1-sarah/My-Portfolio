import React from "react";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import github from "../assets/github.png";
import next from "../assets/next.png";
import SkillCard from "./Cards/SkillCard";

function Skills() {
    return (
        <div name="stack" className="w-full h-screen">
            <div className="max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-purple-600">Stacks</p>
                    <p className="py-4">Technologies and Tools</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8" >
                    <SkillCard
                        image={html}
                        alt={"html image"}
                        title={"HTML"}
                    />
                    <SkillCard
                        image={javascript}
                        alt={"javascript image"}
                        title={"JavaScript"}
                    />
                    <SkillCard
                        image={css}
                        alt={"css image"}
                        title={"CSS"}
                    />
                    <SkillCard
                        image={react}
                        alt={"react image"}
                        title={"React.js"}
                    />
                    <SkillCard
                        image={tailwind}
                        alt={"tailwind image"}
                        title={"Tailwind CSS"}
                    />
                    <SkillCard
                        image={firebase}
                        alt={"firebase image"}
                        title={"Firebase"}
                    />
                    <SkillCard
                        image={github}
                        alt={"github image"}
                        title={"Github"}
                    />
                    <SkillCard
                        image={next}
                        alt={"next image"}
                        title={"Next Js"}
                    />
                      <SkillCard
                        image={react}
                        alt={"native image"}
                        title={"React Native"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;
