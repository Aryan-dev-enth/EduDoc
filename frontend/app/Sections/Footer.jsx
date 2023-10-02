'use client'
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <section className=" w-full min-h-[45vh] bg-[#0B2447] text-white px-16 py-10">
      <motion.div
       initial={{
        y:0,
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once:true}}
      className=" flex gap-20 flex-col justify-center text-center lg:text-start lg:flex-row  ">
        <div className="flex flex-col gap-4 w-full lg:w-[30%] ">
          <h1 className=" text-5xl font-serif">EduDoc</h1>
          <p className=" text-lg">No more missing notes or poor grades. Say hello to success with EduDoc’s library of top-notch resources. Let’s revolutionize your learning experience today!</p>
        </div>
        <div className="  flex flex-col gap-5 w-full lg:w-[20%]">
          <p className=" text-lg font-bold">Resources</p>
          <p className=" text-sm">Notes</p>
          <p className=" text-sm">Question Papers</p>
          <p className=" text-sm">CGPA Calculator</p>
        </div>
        <div className="  flex flex-col gap-5 w-full lg:w-[20%]">
          <p className="  text-lg font-bold">About</p>
          <p className=" text-sm">Team</p>
        </div>
        <div className="   flex flex-col gap-5 w-full lg:w-[20%]">
          <p className=" text-lg font-bold">Contact</p>
          <p>Abc@gmail.com</p>
          <p>+91 7896541236</p>
        </div>
      </motion.div>
      <motion.div
       initial={{
        x:0,
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{once:true}}
      className=" text-center mt-24">
        <p>Made With 💕 by Deepak & Aryan</p>
      </motion.div>
    </section>
  );
};

export default Footer;
