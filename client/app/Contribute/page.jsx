"use client";
import React, { useState } from "react";
import contributeanimation from "/public/contribute animation.json";
import Lottie from "lottie-react";
import axios from "axios";

const Contribute = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [college, setCollege] = useState("");
  const [subject, setSubject] = useState("");
  const [branch, setBranch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isUploading, setUploading] = useState(false);
  const [type, setType] = useState(""); // For radio button choice

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
    formData.append("college", college);
    formData.append("subject", subject);
    formData.append("branch", branch);
    formData.append("type", type);

    try {
      setUploading(true);
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
      setUploading(false);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center gap-5 md:min-h-screen p-5">
      <div className="lg:w-1/2 h-full flex justify-center md:justify-start items-center pt-28">
        <Lottie
          animationData={contributeanimation}
          loop={true}
          className="w-[100%] h-auto hidden sm:block"
        />
      </div>
      <div className="lg:w-1/2 h-full flex flex-col justify-center items-center pt-20">
        <h2 className="text-3xl font-bold p-5">Contribute a Note</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md shadow-2xl rounded px-8 pb-8 mb-4"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title:
            </label>
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
            <label htmlFor="content" className="block text-gray-700">
              Content:
            </label>
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
            <label htmlFor="college" className="block text-gray-700">
              College:
            </label>
            <input
              type="text"
              id="title"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700">
              Subject:
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Engineering Mechanics">
                Engineering Mechanics
              </option>
              <option value="Engineering Graphics">Engineering Graphics</option>
              <option value="Basics of Electrical Engineering">
                Basics of Electrical Engineering
              </option>
              <option value="Basics of Electronics Engineering">
                Basics of Electronics Engineering
              </option>
              <option value="Environmental Studies">
                Environmental Studies
              </option>
              <option value="Computer Programming and Utilization">
                Computer Programming and Utilization
              </option>
              <option value="Workshop Practice">Workshop Practice</option>
              <option value="Communication Skills">Communication Skills</option>
              <option value="Constitution of India and Professional Ethics">
                Constitution of India and Professional Ethics
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="branch" className="block text-gray-700">
              Branch:
            </label>
            <select
              id="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="B.Tech. CSE Core">B.Tech. CSE Core</option>
              <option value="B.Tech. CSE DSAI">B.Tech. CSE DSAI</option>
              <option value="B.Tech. CSE Others">B.Tech. CSE Others</option>
              <option value="B. Computer Application">B. Computer Application</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Type:</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="question_paper"
                  checked={type === "question_paper"}
                  onChange={() => setType("question_paper")}
                  className="mr-2"
                />
                Question Paper
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  value="notes"
                  checked={type === "notes"}
                  onChange={() => setType("notes")}
                  className="mr-2"
                />
                Notes
              </label>
            </div>
            <div className="mb-4">
              <label htmlFor="file" className="block text-gray-700">
                Upload PDF File:
              </label>
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                accept=".pdf"
                className="mt-1 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded focus:outline-none"
          >
            {isUploading ? "Uploading..." : "Submit"}
          </button>
          </form>
      {errorMessage && <div className="text-red-600 mt-4">{errorMessage}</div>}
      {successMessage && <div className="text-green-600 mt-4">{successMessage}</div>}
    </div>
  </div>
</div>
  );
};

export default Contribute;
