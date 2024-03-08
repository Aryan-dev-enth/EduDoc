'use client'
import React from 'react'

const Landing = () => {
  return (
    <div className='h-auto w-screen flex flex-col-reverse sm:flex-row sm:justify-center items-center sm:px-10'>
      <div className="left px-4 w-full">
        <h1 className='text-3xl sm:w-[80%] sm:text-[60px] leading-normal text-center sm:text-left'>
        Ace your classes with top-notch resources!
        </h1>
        <div className="buttons mt-8 w-full flex flex-col-reverse sm:flex-row">
          <button className='bg-secondary m-2 rounded-3xl shadow-xl sm:hover:scale-105 text-white sm:px-8 sm:py-4 px-4 py-4 transition-all'>Find Notes</button>
          <button className='bg-secondary m-2 rounded-3xl shadow-xl sm:hover:scale-105 text-white sm:px-8 sm:py-4 px-4 py-4 transition-all'>Find Papers</button>
        </div>
      </div>
      <div className="right w-full px-4 flex justify-center items-center">
        <img src="landing.png" alt="landing..." className='w-[90%] h-[90%]'/>
      </div>
    </div>
  )
}

export default Landing