import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Nunito">Introduction</h4>
      <h2 className="text-center text-5xl font-Nunito">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <img src="" alt="user-image" className="w-full rounded-3xl" />
        </div>
        <div className="flex1">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            suscipit facere facilis necessitatibus dolorem, tenetur, distinctio
            nam delectus magni similique sequi quia officia, quo minus. Quasi.
          </p>
          <ul>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
