import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto py-16 bg-secondary flex flex-col text-white gap-10 p-10">
      <div className="top w-full flex flex-col sm:flex-row justify-center items-center">
        <div className="left w-full sm:w-[50%] text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4">Edudoc</h1>
          <p className="text-sm text-gray-300">
            Unlock academic success with Edudoc. Our library offers meticulously crafted notes and resources to elevate your learning experience. Say goodbye to endless searches and step into your own digital library.
          </p>
        </div>
        <div className="right  w-full flex flex-col sm:flex-row sm:gap-24 justify-evenly items-center">
          <ul className="text-center sm:text-left list-none text-gray-300">
            Resources
            <li className="text-sm text-gray-400">Notes</li>
            <li className="text-sm text-gray-400">Papers</li>
            <li className="text-sm text-gray-400">CGPA Calculator</li>
          </ul>
          <div className="text-center sm:text-left text-sm text-gray-300">
            For inquiries, reach us at:
            <br />
            Email: info@edudoc.com
            <br />
            Phone: +1 (123) 456-7890
          </div>
        </div>
      </div>
      <div className="bottom flex justify-center items-center mt-8">
        <p className="text-xs text-gray-300">Designed and developed by <a href="" className="underline"> Deepak</a> & <a href="" className="underline">Aryan</a></p>
      </div>
    </div>
  );
};

export default Footer;
