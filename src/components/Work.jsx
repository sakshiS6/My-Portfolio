import { IconArrowRight, IconSend } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Nunito">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Nunito">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Nunito">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        voluptas quibusdam officia aliquam quam saepe veniam, sed porro vero
        aperiam, perferendis enim tenetur ullam dignissimos tempora odit
        recusandae nihil mollitia accusamus assumenda! Aspernatur et
        voluptatibus amet?
      </p>
      <div className="grid grid-cols-auto my-10 gap-5">
        
          {/* Project-1 */}
          <div
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
          </div>
          {/* Project-2 */}
          <div
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
          </div>
          {/* Project-3 */}
          <div
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
          </div>
          {/* Project-4 */}
          <div
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
          </div>
      
      </div>
      <Link href="" className="w-max flex itmes-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lighthover duration-500">
        Show more <IconArrowRight/>
      </Link>
    </div>
  );
};

export default Work;
