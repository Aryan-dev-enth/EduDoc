'use client'
import React from "react";
import { statistics } from "../constants";
import Image from "next/image";
import { SecondImg } from "@/Assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full flex min-h-[70vh] text-center xl:flex-row flex-col justify-center gap-10  max-container">
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{once:true}}
      className="relative xl:w-full xl:mt-32 flex flex-col  items-center text-center xl:items-start xl:text-start xl:ml-6 w-full max-xl:padding-x ">
        <h2 className="text-6xl max-sm:text-4xl pb-5  font-serif">Unlock Academic Success</h2>
        <p className="text-xl text-[#000000]/50">
          Welcome to the realm of academic excellence where you can find
          meticulously crafted notes and previous year question papers to ace
          your courses. Say goodbye to endless searches and step into your own
          digital library.
        </p>
        <div className="flex justify-center xl:justify-start items-start flex-wrap w-full mt-10 gap-16 ">
        {statistics.map((stat) => (
          <div key={stat.label}>
            <p className=" font-bold text-4xl">{stat.value}</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      </motion.div>
    
      <motion.div
        initial={{
          x:100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{once:true}}
      className="w-full flex justify-center xl:justify-end">
        <Image
        src={SecondImg}
        width={600}
        height={600}
        alt="second img"
        className=" relative object-contain "
        />
      </motion.div>
    </section>
  );
};

export default About;
