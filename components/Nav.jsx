'use client'
import { useState } from "react";
import { navLinks } from "../app/constants";
import { Fade as Hamburger } from 'hamburger-react'
import { Logo } from "@/Assets";
import Image from "next/image";


const Nav = () => {
  const [isOpen, setOpen] = useState(false)


  return (
    <>
    <header className=" padding-x py-5 fixed top-0 z-10 w-full bg-[#576CBC]">
      <nav className=" flex justify-between items-center max-container ">
        <a href="/">
        <Image
      src={Logo}
      width={150}
      height={150}
      alt="logo"
    />
        </a>
        <ul className=' flex justify-center items-center gap-16 max-lg:hidden'>
              {navLinks.map((item) => (

                <li key={item.label}>

                  <a 
                  href={item.href} className=' font-poppins leading-normal text-lg text-white '>

                {item.label}
                  </a>
                </li>
              ))}

            </ul>
            <div className=" hidden max-lg:block tap">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff"  />
            </div>
            
      </nav>
     
    </header>
     <div 
     

     className=" bg-[#19376D] w-full h-full mt-[88px] lg:hidden ">
     {isOpen && (  <ul className=' flex flex-col gap-8  items-center p-8  '>
           {navLinks.map((item) => (

             <li key={item.label} className="text-2xl">

               <a 
               href={item.href} className='text-white'>

             {item.label}
               </a>
             </li>
           ))}

         </ul>
         )}
 
   </div>
   </>
  );
};

export default Nav;
