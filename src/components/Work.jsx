import { IconArrowRight, IconSend } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.div
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:1 }}
    id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
      initial={{y:-20, opacity:0}}
      whileInView={{ y:0, opacity:1}}
      transition={{delay:0.3, duration:0.5}}
      className="text-center mb-2 text-lg font-Nunito">My Portfolio</motion.h4>
      <motion.h2
      initial={{y:-20, opacity:0}}
      whileInView={{ y:0, opacity:1}}
      transition={{delay:0.5, duration:0.5}}
      className="text-center text-5xl font-Nunito">My latest work</motion.h2>

      <motion.p
      initial={{y:-20, opacity:0}}
      whileInView={{ y:0, opacity:1}}
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
      transition={{delay:0.9, duration:0.1}}
      className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        
          {/* Project-1 */}
          <motion.div
          whileHover={{ scale:1.05 }}
          transition={{ duration:0.3 }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
            style={{
              backgroundImage: `url(https://www.growth-rocket.com/wp-content/uploads/2023/02/Front-end-vs-back-end-developers-rectangle.jpg)`,
            }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 ">
              <h2 className="font-semibold ">Frontend</h2>
              <h3 className=" text-sm text-gray-700">web design</h3>
              <IconSend className="border rounded-full border-black w-fit aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition"></IconSend>
            </div>
          </motion.div>
          {/* Project-2 */}
          <motion.div
          whileHover={{ scale:1.05 }}
          transition={{ duration:0.3 }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
            style={{
              backgroundImage: `url(https://www.growth-rocket.com/wp-content/uploads/2023/02/Front-end-vs-back-end-developers-rectangle.jpg)`,
            }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 ">
              <h2 className="font-semibold ">Frontend</h2>
              <h3 className=" text-sm text-gray-700">web design</h3>
              <IconSend className="border rounded-full border-black w-fit aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition"></IconSend>
            </div>
          </motion.div>
          {/* Project-3 */}
          <motion.div
          whileHover={{ scale:1.05 }}
          transition={{ duration:0.3 }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
            style={{
              backgroundImage: `url(https://www.growth-rocket.com/wp-content/uploads/2023/02/Front-end-vs-back-end-developers-rectangle.jpg)`,
            }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 ">
              <h2 className="font-semibold ">Frontend</h2>
              <h3 className=" text-sm text-gray-700">web design</h3>
              <IconSend className="border rounded-full border-black w-fit aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition"></IconSend>
            </div>
          </motion.div>
          {/* Project-4 */}
          <motion.div
          whileHover={{ scale:1.05 }}
          transition={{ duration:0.3 }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
            style={{
              backgroundImage: `url(https://www.growth-rocket.com/wp-content/uploads/2023/02/Front-end-vs-back-end-developers-rectangle.jpg)`,
            }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 ">
              <h2 className="font-semibold ">Frontend</h2>
              <h3 className=" text-sm text-gray-700">web design</h3>
              <IconSend className="border rounded-full border-black w-fit aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition"></IconSend>
            </div>
          </motion.div>
      
      </motion.div>
      <motion.Link
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{ delay:1.1, duration:0.5 }}
      href="" className="w-max flex itmes-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lighthover duration-500 dark:text-white dark:hover:bg-darkhover dark:border-white">
        Show more <IconArrowRight />
      </motion.Link>
    </motion.div>
  );
};

export default Work;
