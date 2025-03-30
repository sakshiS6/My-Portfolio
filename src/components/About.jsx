import {
  IconBook,
  IconBrandVscode,
  IconBriefcase,
  IconCode,
} from "@tabler/icons-react";
import React from "react";
import { motion } from "motion/react";

const About = (isDarkMode) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Nunito"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Nunito"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-80 sm:w-80 rounded-3xl max-w-none"
        >
          <img
            src="MyImage.jpg"
            alt="user-image"
            className=" rounded-3xl w-80"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex1"
        >
          <p>
            As a dedicated Full Stack Developer, I create responsive and
            interactive web applications from concept to deployment. I enjoy
            transforming ideas into user-friendly solutions while ensuring
            performance, accessibility, and scalability. I thrive in
            collaborative environments and am committed to continuous learning
            to stay updated with modern development practices.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 mt-6 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border border-gray-400 rounded-xl m-2 p-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkhover/50"
            >
              <IconCode size={66} />
              <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
                Languages
              </h3>
              <p className="text-gray-700 dark:text-white/80">
                HTML , CSS , JS , MERN
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border border-gray-400 rounded-xl m-2 px-6 py-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkhover/50"
            >
              <IconBook size={66} />
              <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
                Education
              </h3>
              <p className="text-gray-700 dark:text-white/80">
                Btech in computer science and design
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border border-gray-400 rounded-xl m-2 px-6 py-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500  hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkhover/50"
            >
              <IconBriefcase size={66} />
              <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
                Projects
              </h3>
              <p className="text-gray-700 dark:text-white/80">
                Poll Maker website
              </p>
            </motion.div>
          </motion.div>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 text-gray-700 text-2xl font-semibold font-Nunito dark:text-white/90"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code Logo"
              className="w-24 p-1 flex items-center justify-center sm:14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/gitlogo.png"
              alt="VS Code Logo"
              className="w-24 p-1 flex items-center justify-center sm:14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="githublogo.jpg"
              alt="VS Code Logo"
              className="w-24 p-1 flex items-center justify-center sm:14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/Cloudinary.png"
              alt="VS Code Logo"
              className="w-24 p-1 flex items-center justify-center sm:14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/Canva.png"
              alt="VS Code Logo"
              className="w-24 p-1 flex items-center justify-center sm:14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/mongoDB.png"
              alt="VS Code Logo"
              className="w-24 p-1 flex items-center justify-center sm:14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            />
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default About;
