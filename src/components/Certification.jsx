import {
  IconArrowRight,
  IconBook,
  IconBriefcase,
  IconCode,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const Certification = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="certification"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Nunito"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Nunito"
      >
        Certifications and Workshops
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Nunito"
      >
        Actively enhancing my professional growth by earning certifications and
        participating in workshops focused on web development and software
        engineering. I am dedicated to staying ahead of industry trends and
        consistently refining my skills to build impactful and efficient digital
        solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-10 my-10"
      >

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-gray-400 rounded-lg p-2 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white"
        >
          <img src="/Certificate1.jpeg" alt="certificate"/>
          <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
            MERN - Full Stack Development Course
          </h3>
          <p className="text-gray-700 leading-5 dark:text-white/90">
            Digipodium
          </p>
          <p className="text-gray-700 mt-2 leading-5 dark:text-white/90">
            September 2024
          </p>
          <Link href="" className="flex items-center gap-2 mt-5">
            Read more <IconArrowRight />{" "}
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-gray-400 rounded-lg p-2 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white"
        >
          <img src="/Certificate2.jpeg" alt="certificate"/>
          <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
            Project Completion Certificate
          </h3>
          <p className="text-gray-700 leading-5 dark:text-white/90">
            Digipodium
          </p>
          <p className="text-gray-700 mt-2 leading-5 dark:text-white/90">
            December 2024
          </p>
          <Link href="" className="flex items-center gap-2 mt-5">
            Read more <IconArrowRight />{" "}
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-gray-400 rounded-lg p-2 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white"
        >
          <img src="/Certificate3.jpeg" alt="certificate"/>
          <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
            Google My Business- Local SEO
          </h3>
          <p className="text-gray-700 leading-5 dark:text-white/90">
            Google
          </p>
          <p className="text-gray-700 mt-2 leading-5 dark:text-white/90">
            December 2024
          </p>
          <Link href="" className="flex items-center gap-2 mt-5">
            Read more <IconArrowRight />{" "}
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-gray-400 rounded-lg p-2 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white"
        >
          <img src="/Certificate4.jpeg" alt="certificate"/>
          <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
            Death Race- Robotics
          </h3>
          <p className="text-gray-700 leading-5 dark:text-white/90">
            Indian Institute of Technology IIT, Patna
          </p>
          <p className="text-gray-700 mt-2 leading-5 dark:text-white/90">
            December 2023
          </p>
          <Link href="" className="flex items-center gap-2 mt-5">
            Read more <IconArrowRight />{" "}
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-gray-400 rounded-lg p-2 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white"
        >
          <img src="/Certificate5.jpeg" alt="certificate"/>
          <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
            Tech Revolution- Robo Race
          </h3>
          <p className="text-gray-700 leading-5 dark:text-white/90">
            Shri Ramswaroop University
          </p>
          <p className="text-gray-700 mt-2 leading-5 dark:text-white/90">
            April 2024
          </p>
          <Link href="" className="flex items-center gap-2 mt-5">
            Read more <IconArrowRight />{" "}
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-gray-400 rounded-lg p-2 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white"
        >
          <img src="/Certificate6.jpeg" alt="certificate"/>
          <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
            Python Programming Workshop
          </h3>
          <p className="text-gray-700 leading-5 dark:text-white/90">
            SoftPro
          </p>
          <p className="text-gray-700 mt-2 leading-5 dark:text-white/90">
            February 2024
          </p>
          <Link href="" className="flex items-center gap-2 mt-5">
            Read more <IconArrowRight />{" "}
          </Link>
        </motion.div>
        

      </motion.div>
    </motion.div>
  );
};

export default Certification;
