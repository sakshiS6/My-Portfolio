"use client";
import { IconSend } from "@tabler/icons-react";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="project"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Nunito"
      >
        My Latest Work
      </motion.h4>
      
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Nunito"
      >
        My Project
      </motion.h2>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Nunito"
      >
        Recently worked on developing a full-stack web application using the
        MERN stack with real-time features powered by Socket.io. Focused on
        creating a responsive user interface, seamless client-server
        communication, and dynamic data handling to enhance user interactivity
        and performance.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.1 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {/* Project-1 */}
        <Link href="https://live-poll-creator.vercel.app/" passHref>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
          style={{
            backgroundImage: `url(/livepollcreator.png)`,
          }}
        >
          <div className="bg-gray-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 ">
            <h2 className="font-semibold ">CloudStream</h2>
            <h2 className=" text-sm text-gray-700 pl-2">Live Poll Creator</h2>
            <IconSend className="border rounded-full border-black w-fit aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-gray-200 transition"></IconSend>
          </div>
        </motion.div>
        </Link>
        {/* Project-2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
          style={{
            backgroundImage: `url(https://www.growth-rocket.com/wp-content/uploads/2023/02/Front-end-vs-back-end-developers-rectangle.jpg)`,
          }}
        >
          <div className="bg-gray-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 ">
            <h2 className="font-semibold ">MediBot</h2>
            <h3 className=" text-sm pl-2 text-gray-700">AI Medical Assisstant</h3>
            <IconSend className="border rounded-full border-black w-fit aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-gray-200 transition"></IconSend>
          </div>
        </motion.div>
        {/* Project-3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
          style={{
            backgroundImage: `url(https://www.growth-rocket.com/wp-content/uploads/2023/02/Front-end-vs-back-end-developers-rectangle.jpg)`,
          }}
        >
          <div className="bg-gray-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 ">
            <h2 className="font-semibold ">AutoGenie</h2>
            <h3 className=" text-sm pl-2 text-gray-700">AI Car Marketplace</h3>
            <IconSend className="border rounded-full border-black w-fit aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-gray-200 transition"></IconSend>
          </div>
        </motion.div>
        {/* Project-4 */}
        <Link href="https://todo-list-tau-ruddy-67.vercel.app/" passHref>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className=" p-2 aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
          style={{
            backgroundImage: `url(/todolist.png)`,
          }}
        >
          <div className="bg-gray-100 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 ">
            <h2 className="font-semibold ">Todone</h2>
            <h3 className=" text-sm pl-2 text-gray-700">Todo list</h3>
            <IconSend className="border rounded-full border-black w-fit aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-gray-200 transition"></IconSend>
          </div>
        </motion.div>
        </Link>
      </motion.div>
      
    </motion.div>
  );
};

export default Project;
