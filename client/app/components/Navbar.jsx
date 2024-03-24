"use client"

import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { useRouter } from "next/navigation";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className=" w-full h-[80px]  bg-secondary fixed top-0 left-0 flex items-center justify-between px-4 sm:px-10 z-50">
      <div className="flex justify-start w-1/2">
        <p
          className="text-white text-[20px] sm:text-[40px] cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          Edudoc
        </p>
      </div>
      <div className="flex justify-end w-1/2 items-center">
        <div className=" hidden lg:flex justify-end w-full">
          <ul className="flex justify-around items-center text-white list-none w-full max-w-md">
            <li>
              <a href="/Notes">Notes</a>
            </li>
            <li>
              <a href="/QuestionPaper">PYQ</a>
            </li>
            <li>
              <a href="#">CGPA Calculator</a>
            </li>
            <li>
              <a href="/Contribute">Contribute</a>
            </li>
            <SignedIn>
              <li>
                <UserButton afterSignOutUrl="/" />
              </li>
              <li>
                <SignOutButton />
              </li>
            </SignedIn>
            <SignedOut>
              <li>
                <SignInButton />
              </li>
            </SignedOut>
          </ul>
        </div>
        <div className=" lg:hidden relative">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="white"
            size={30}
          />
          {isOpen && (
            <div className="absolute right-5 top-16 w-56 bg-black text-white rounded-xl py-4 px-2 opacity-90 transition-all duration-300">
              <ul aria-label="Mobile menu" className="space-y-4">
                <li className="mb-4 text-center">
                  <a href="/Notes">Notes</a>
                </li>
                <li className="mb-4 text-center">
                  <a href="/QuestionPaper">PYQ</a>
                </li>
                <li className="text-center">
                  <a href="/Contribute">Contribute</a>
                </li>
                <li className="mb-4 text-center">
                  <a href="#">CGPA Calculator</a>
                </li>
                <SignedIn className="text-white flex items-center">
                  <li>
                    <UserButton />
                  </li>
                  <li>
                    <SignOutButton />
                  </li>
                </SignedIn>
                <SignedOut>
                  <li>
                    <SignInButton />
                  </li>
                </SignedOut>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
