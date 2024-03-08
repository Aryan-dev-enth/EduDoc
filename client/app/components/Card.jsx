import React from 'react';

const Card = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden my-4 shadow-md hover:shadow-lg transition duration-300">
      <img
        className="w-full h-40 object-cover object-center"
        src="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg" // Replace with the actual image source
        alt="PDF Preview"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">PDF Title</h2>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          varius justo eu neque blandit, eu fermentum nulla blandit.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-100">
        <span className="text-xs text-gray-600 mb-2 sm:mb-0">
          Author: John Doe
        </span>
        <span className="text-xs text-gray-600 mb-2 sm:mb-0">Pages: 10</span>
        <div className="flex justify-between items-center gap-2">
          <button className="bg-secondary text-white px-4 py-2 rounded-full  sm:mb-0 sm:mr-2 hover:scale-105 transition duration-300">
            View
          </button>
          <button className="bg-secondary text-white px-4 py-2 rounded-full hover:scale-105 transition duration-300">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
