import React from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const Card = ({ title, content, author, pages, fileUrl, admin, noteId, onVerify }) => {
  const handleVerify = async () => {
    try {
      // Make an API call to verify the note with the given ID
      const response = await axios.patch(`http://localhost:8000/api/verifyNotes/${noteId}`);
      console.log(response)
      
    } catch (error) {
      console.error('Error verifying note:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden my-4 shadow-md hover:shadow-lg transition duration-300  ">
      <img
        className="w-full h-52 object-cover object-center"
        src="vercel.svg"
        alt="PDF Preview"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm">
          {content}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-100">
        <span className="text-xs text-gray-600 mb-2 sm:mb-0">
          Author: {author}
        </span>
        <span className="text-xs text-gray-600 mb-2 sm:mb-0">Pages: {pages}</span>
        <div className="flex justify-between items-center gap-2">
          <a href={fileUrl.webViewLink} target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-4 py-2 rounded-full sm:mb-0 sm:mr-2 hover:scale-105 transition duration-300">
            View
          </a>
          <a href={fileUrl.webContentLink} target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-4 py-2 rounded-full hover:scale-105 transition duration-300">
            Download
          </a>
          {admin && ( // Conditionally render admin options if admin is true
            <div className='flex flex-col gap-3'>
              <button onClick={handleVerify} className="bg-green-500 text-white px-4 py-2 rounded-full hover:scale-105 transition duration-300">
                Verify
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:scale-105 transition duration-300">
                Decline
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
