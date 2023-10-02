'use client'
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import React from 'react'
import Select from 'react-select';

const Search = () => {
  const branch = [
    { value: 'B-Tech', label: 'B-Tech' },
    { value: 'BCA', label: 'BCA' }
   
  ];
  const semester = [
    { value: '1-sem', label: '1-sem' },
    { value: '2-sem', label: '2-sem' },
    { value: '3-sem', label: '3-sem' },
    { value: '4-sem', label: '4-sem' },
    { value: '5-sem', label: '5-sem' },
    { value: '6-sem', label: '6-sem' },
    { value: '7-sem', label: '7-sem' },
    { value: '8-sem', label: '8-sem' }
   
  ];
  const subject = [
    { value: 'Maths', label: 'Maths' },
    { value: 'C', label: 'C' },
    { value: 'C++', label: 'C++' },
    { value: 'Java', label: 'Java' },
    { value: 'Operating system', label: 'Operating system' },
    { value: 'DSA', label: 'DSA' }
   
  ];
  return (
 
    
    <section id='Notes Papers' className='w-full min-h-screen '>
      <motion.div 
      initial={{
        x: 0,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{once:true}}
      className='flex flex-col items-center gap-10'>
        <h1 className='text-center text-8xl font-serif max-sm:text-5xl'>SEARCH HERE</h1>
        <div className=' flex flex-col gap-10 w-full mt-20 max-sm:mt-10 max-sm:justify-center max-sm:items-center  '>
        <div className='flex  justify-start gap-2'>
          <input type="checkbox" name="Notes" id=""  /> <span>Notes*</span> 
          <input  type="checkbox" name="Notes" id="" /> <span>Question Papers*</span>
        </div>
        <div className=' w-full flex gap-5 max-sm:flex-col'>
         
         <Select options={branch} className='w-full' placeholder='Select Branch' />
         <Select options={semester} className='w-full' placeholder='Select Semester' />
         <Select options={subject} className='w-full' placeholder='Select Subject' />
        </div>
       
        </div>
        <Button className='px-8 text-xl w-36'>Search</Button>
        </motion.div>
    </section>
  )
}

export default Search