import { IconArrowRight, IconBook, IconBriefcase, IconCode } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
      initial={{y:-20, opacity:0}}
      whileInView={{ y:0, opacity:1}}
      transition={{delay:0.3, duration:0.5}}
      className="text-center mb-2 text-lg font-Nunito">What I offer</motion.h4>
      <motion.h2
      initial={{y:-20, opacity:0}}
      whileInView={{ y:0, opacity:1}}
      transition={{delay:0.5, duration:0.5}}
      className="text-center text-5xl font-Nunito">My Services</motion.h2>

      <motion.p 
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{delay:0.7, duration:0.5}}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Nunito">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        voluptas quibusdam officia aliquam quam saepe veniam, sed porro vero
        aperiam, perferendis enim tenetur ullam dignissimos tempora odit
        recusandae nihil mollitia accusamus assumenda! Aspernatur et
        voluptatibus amet?
      </motion.p>

      <motion.div
      initial={{ opacity:0}}
      whileInView={{ opacity:1}}
      transition={{delay:0.9, duration:0.6}}
      className="grid grid-cols-auto gap-6 my-10 ">
        <motion.div
        whileHover={{scale:1.05}}
        className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white">
          <IconCode size={66} />
          <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
            Languages
          </h3>
          <p className="text-gray-700 leading-5 dark:text-white/90">HTML , CSS JS , MERN</p>
          <Link href="" className="flex items-center gap-2 mt-5">Read more <IconArrowRight/> </Link>
        </motion.div>

        <motion.div
        whileHover={{scale:1.05}}
        className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white">
          <IconBook size={66} />
          <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
            Education
          </h3>
          <p className="text-gray-700 leading-5 dark:text-white/90">HTML , CSS JS , MERN</p>
          <Link href="" className="flex items-center gap-2 mt-5">Read more <IconArrowRight/> </Link>
        </motion.div>

        <motion.div
        whileHover={{scale:1.05}}
        className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white">
          <IconBriefcase size={66} />
          <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">Projects</h3>
          <p className="text-gray-700 leading-5 dark:text-white/90">HTML , CSS JS , MERN</p>
          <Link href="" className="flex items-center gap-2 mt-5">Read more <IconArrowRight/> </Link>
        </motion.div>

        <motion.div
        whileHover={{scale:1.05}}
        className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white">
          <IconBriefcase size={66} />
          <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">Projects</h3>
          <p className="text-gray-700 leading-5 dark:text-white/90">HTML , CSS JS , MERN</p>
          <Link href="" className="flex items-center gap-2 mt-5">Read more <IconArrowRight/> </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
