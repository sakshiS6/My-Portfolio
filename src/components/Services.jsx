import { IconArrowRight, IconBook, IconBriefcase, IconCode } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Nunito">What I offer</h4>
      <h2 className="text-center text-5xl font-Nunito">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Nunito">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        voluptas quibusdam officia aliquam quam saepe veniam, sed porro vero
        aperiam, perferendis enim tenetur ullam dignissimos tempora odit
        recusandae nihil mollitia accusamus assumenda! Aspernatur et
        voluptatibus amet?
      </p>

      <div className="grid grid-cols-auto gap-6 my-10 ">
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white">
          <IconCode size={66} />
          <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
            Languages
          </h3>
          <p className="text-gray-700 leading-5 dark:text-white/90">HTML , CSS JS , MERN</p>
          <Link href="" className="flex items-center gap-2 mt-5">Read more <IconArrowRight/> </Link>
        </div>

        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white">
          <IconBook size={66} />
          <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">
            Education
          </h3>
          <p className="text-gray-700 leading-5 dark:text-white/90">HTML , CSS JS , MERN</p>
          <Link href="" className="flex items-center gap-2 mt-5">Read more <IconArrowRight/> </Link>
        </div>

        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white">
          <IconBriefcase size={66} />
          <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">Projects</h3>
          <p className="text-gray-700 leading-5 dark:text-white/90">HTML , CSS JS , MERN</p>
          <Link href="" className="flex items-center gap-2 mt-5">Read more <IconArrowRight/> </Link>
        </div>

        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover dark:hover:shadow-white">
          <IconBriefcase size={66} />
          <h3 className="my-4 font-semibold text-gray-700 text-lg dark:text-white">Projects</h3>
          <p className="text-gray-700 leading-5 dark:text-white/90">HTML , CSS JS , MERN</p>
          <Link href="" className="flex items-center gap-2 mt-5">Read more <IconArrowRight/> </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
