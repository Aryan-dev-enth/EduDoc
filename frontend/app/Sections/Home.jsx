'use client'
import React from 'react'
import { Button } from '@/components/ui/button';
import { FirstImg } from '@/Assets';
import Image from 'next/image'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    
    <section id='Home' className='w-full flex min-h-screen xl:flex-row flex-col justify-center gap-10 max-container'>
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
    className="relative xl:w-full xl:mt-10 flex flex-col justify-center items-center text-center xl:items-start xl:text-start xl:ml-6 w-full max-xl:padding-x ">
    <h1 className=' text-9xl font-bold max-sm:text-[55px] md:text-[90px] z-[9] font-poppins text-[#0B2447] '>Ace your classes  with top-notch resources!</h1>
    <div className=' flex gap-5 mt-5'>
    <Button className='px-7 mt-5'>Find Notes</Button>
    <Button className='px-7 mt-5'>Find Papers</Button>
    </div>
    </motion.div>
    <motion.div
      initial={{
        x: 100,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{once:true}}
    className=' relative flex justify-center items-center w-full '>
      <Image
      src={FirstImg}
      width={900}
      height={900}    
      alt="main image"
      className=' relative object-contain '
    />
    </motion.div>
    </section>
  )
}

export default Home;