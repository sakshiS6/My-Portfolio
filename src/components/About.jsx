import {
  IconBook,
  IconBrandVscode,
  IconBriefcase,
  IconCode,
} from "@tabler/icons-react";
import React from "react";

const About = (isDarkMode) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Nunito">Introduction</h4>
      <h2 className="text-center text-5xl font-Nunito">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-12">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <img src="MyImage.jpg" alt="user-image" className=" rounded-3xl" />
        </div>
        <div className="flex1">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            suscipit facere facilis necessitatibus dolorem, tenetur, distinctio
            nam delectus magni similique sequi quia officia, quo minus. Quasi.
          </p>
          <div className="grid grid-cols-1 mt-6 sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="border border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkhover/50">
              <IconCode size={66} />
              <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
                Languages
              </h3>
              <p className="text-gray-700 dark:text-white/80">HTML , CSS JS , MERN</p>
            </div>
            <div className="border border-gray-400 rounded-xl m-2 px-6 py-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkhover/50">
              <IconBook size={66} />
              <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
                Education
              </h3>
              <p className="text-gray-700 dark:text-white/80">
                Btech in computer science and design
              </p>
            </div>
            <div className="border border-gray-400 rounded-xl m-2 px-6 py-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500  hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkhover/50">
              <IconBriefcase size={66} />
              <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
                Projects
              </h3>
              <p className="text-gray-700 dark:text-white/80">Poll Maker website</p>
            </div>
          </div>
          <h4 className="my-6 text-gray-700 text-2xl font-semibold font-Nunito dark:text-white/90">
            Tools I use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code Logo"
              className="w-12 p-2 flex items-center justify-center sm:14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code Logo"
              className="w-12 p-2 flex items-center justify-center sm:14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code Logo"
              className="w-12 p-2 flex items-center justify-center sm:14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code Logo"
              className="w-12 p-2 flex items-center justify-center sm:14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code Logo"
              className="w-12 p-2 flex items-center justify-center sm:14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
