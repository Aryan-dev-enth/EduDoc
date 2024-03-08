import React from "react";

const About = () => {
  return (
    <div className="w-screen h-auto px-4 py-16  mt-10 flex flex-row-reverse justify-evenly items-center gap-10">
      <div className="content w-[80%] sm:w-[50%] flex flex-col justify-center sm:items-start text-center sm:text-left mt-5">
        <h2 className="text-[25px] sm:text-[45px]">Unlock Academic Success</h2>
        <p className="text-[15px] sm:text-[30px] text-gray-500">
          Welcome to the realm of academic excellence where you can find
          meticulously crafted notes and previous year question papers to ace
          your courses. Say goodbye to endless searches and step into your own
          digital library.
        </p>
        <div className="data">data to be displayed</div>
      </div>
      <img src="about.png" alt="" className="w-[30%] hidden sm:flex"/>
    </div>
  );
};

export default About;
