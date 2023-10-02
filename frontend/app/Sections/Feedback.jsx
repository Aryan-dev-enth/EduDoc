'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import React from 'react'

const Feedback = () => {
  return (
    <section className=' w-full min-h-[50vh] flex  justify-center '>
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
      
      className='w-[90vh] flex flex-col justify-center text-center gap-5 items-center '>
      <h1 className='text-4xl font-bold '>Feedback</h1>
      <h3 className=' text-2xl'>Help Us Serve You Better</h3>
      <p className=' text-xl text-[#000000]/50'>We greatly value your feedback! It plays a vital role in our ongoing efforts to enhance our services. Whether you have suggestions, compliments, or areas where we can improve, we want to hear from you.</p>
      <Button className='w-40 text-lg'>Share feedback</Button>
      </motion.div>
    </section>
  )
}

export default Feedback