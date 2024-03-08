'use client'
import React, { useState } from "react";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="w-full h-[60px] sm:h-[100px] bg-secondary fixed top-0 left-0 flex items-center justify-between px-4 sm:px-10 z-50">
      <div className="flex justify-start w-1/2">
        <p className="text-white text-[20px] sm:text-[40px]">Edudoc</p>
      </div>
      <div className="flex justify-end w-1/2 items-center">
        <div className="hidden sm:flex justify-end w-full">
          <ul className="flex justify-around items-center text-white list-none w-full max-w-md">
            <li>Notes</li>
            <li>Papers</li>
            <li>CGPA Calculator</li>
          </ul>
        </div>
        <div className="sm:hidden relative">
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" size={30} />
          {isOpen && (
            <div className="absolute right-5 top-16 w-56 bg-black text-white rounded-xl py-4 px-2 opacity-90 transition-all duration-300">
              <ul aria-label="Mobile menu" className="space-y-4">
                <li className="mb-4 text-center">Notes</li>
                <li className="mb-4 text-center">Papers</li>
                <li className="text-center">CGPA Calculator</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
