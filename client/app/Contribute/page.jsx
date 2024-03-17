'use client'
import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Page = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [title, setTitle] = useState(""); // State variable for title
  const [description, setDescription] = useState(""); // State variable for description

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const addTag = () => {
    if (selectedTag && !tags.includes(selectedTag)) {
      setTags([...tags, selectedTag]);
      setSelectedTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      console.log(selectedFile)
      try {
        const response = await axios.post("http://localhost:8000/api/notes", {
          title: title,
          content: description,
          tags: tags,
          file: selectedFile
        }, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("File uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div className="min-h-screen bg-primary font-display flex flex-col items-center pt-[70px] sm:pt-[100px] px-2">
      <Navbar />

      <div className="fileUpload w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 mt-8 p-6 sm:p-8 shadow-2xl rounded-3xl bg-white text-primary">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6">
          Contribute to Edudoc
        </h1>

        <div className="flex flex-col items-center">
          <div className="mb-4 w-full">
            <label htmlFor="fileInput" className="text-sm text-secondary mb-2">
              Choose a file:
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              className="w-full text-sm sm:text-lg p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4 w-full">
            <input
              type="text"
              id="titleInput"
              name="title"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
              className=" w-full text-sm sm:text-lg p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4 w-full">
            <input
              type="text"
              id="descriptionInput"
              name="description"
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
              className="w-full text-sm sm:text-lg p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4 w-full">
            <div className="">
              <input
                type="text"
                id="tagInput"
                placeholder="#tag"
                value={selectedTag}
                onChange={handleTagChange}
                className="w-full text-sm sm:text-lg p-2 border border-gray-300 rounded"
              />
              <br />
              <button
                type="button"
                onClick={addTag}
                className="bg-secondary my-2 text-white px-2 py-1 rounded hover:scale-105 transition duration-300 ml-2"
              >
                Add Tag
              </button>
            </div>
          </div>

          {tags.length > 0 && (
            <div className="mb-4">
              <p className="text-sm text-secondary mb-2">Selected Tags:</p>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="bg-primary text-black px-2 py-1 rounded-full mr-2 mb-2 flex items-center"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-2"
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={handleFileUpload}
            className="bg-secondary text-white px-4 py-2 rounded hover:scale-105 transition duration-300"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
