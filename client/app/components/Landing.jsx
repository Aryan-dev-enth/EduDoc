'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Lottie from "lottie-react";
import animation from '/public/Landing animation.json'
const Landing = () => {
  const router=useRouter();
  return (
    <div className='h-auto lg:h-screen w-screen flex flex-col-reverse md:flex-row sm:justify-center items-center sm:px-10 pt-10 lg:p-0 '>
      <div className=" flex flex-col  px-4 w-full pl-10">
        <h1 className='text-3xl font-bold sm:w-[80%] sm:text-[60px] leading-normal text-center sm:text-left'>
          Ace your classes with top-notch resources!
        </h1>
        <div className="buttons mt-8 w-full flex flex-col-reverse sm:flex-row">
          <button className='bg-secondary m-2 rounded-xl shadow-xl sm:hover:scale-105 text-white sm:px-8 sm:py-4 px-4 py-4 transition-all' onClick={()=>{
            router.push("/Search");
          }}>Find Notes</button>
          <button className='bg-secondary m-2 rounded-xl shadow-xl sm:hover:scale-105 text-white sm:px-8 sm:py-4 px-4 py-4 transition-all' onClick={()=>{
            router.push("/Search");
          }}>Find Papers</button>
        </div>
      </div>
      <div className="w-full px-4 flex justify-center items-center">
      <Lottie animationData={animation} loop={true} className='w-[90%] h-[90%]' />
      </div>
     
    </div>
  )
}

export default Landing