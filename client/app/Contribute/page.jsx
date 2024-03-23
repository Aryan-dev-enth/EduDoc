"use client";
import React, { useState } from "react";
import contributeanimation from "/public/contribute animation.json";
import Lottie from "lottie-react";
import axios from "axios";

const Contribute = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/notes",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccessMessage(response.data.message);
      setTitle("");
      setContent("");
      setFile(null);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 md:h-screen p-5">
    <div className="lg:w-1/2 h-full flex justify-center md:justify-start items-center pt-28">
      <Lottie
        animationData={contributeanimation}
        loop={true}
        className="w-[75%] h-auto"
      />
    </div>
    <div className="lg:w-1/2 h-full flex flex-col justify-center items-center  ">
      <h2 className="text-3xl font-bold p-5">Contribute a Note</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md shadow-2xl rounded px-8 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700">Upload PDF File:</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            accept=".pdf"
            className="mt-1 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-secondary text-white px-4 py-2 rounded focus:outline-none"
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div className="text-red-600 mt-4">{errorMessage}</div>
      )}
      {successMessage && (
        <div className="text-green-600 mt-4">{successMessage}</div>
      )}
    </div>
  </div>
  
  
  );
};

export default Contribute;
