import React from "react";
import aboutanimation from '/public/about animation.json'
import Lottie from "lottie-react";
const About = () => {
  return (
    <div className=" h-auto w-screen flex justify-center items-center flex-col-reverse md:flex-row sm:justify-center overflow-hidden ">
      <div className=" w-full h-full flex flex-col justify-center items-center lg:pl-20 md:items-start ">
        <h2 className=" text-3xl md:text-5xl ">Unlock Academic Success</h2>
        <p className=" md:text-[25px] font-normal  text-gray-500 text-center md:text-start p-5 md:p-0 ">
          Welcome to the realm of academic excellence where you can find
          meticulously crafted notes and previous year question papers to ace
          your courses. Say goodbye to endless searches and step into your own
          digital library.
        </p>
      </div>
      <div className="w-full h-full px-4 flex justify-center  items-center">
      <Lottie animationData={aboutanimation} loop={true} className='w-[70%] h-auto' />
      </div>
    </div>
  );
};

export default About;
