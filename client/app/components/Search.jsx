import React from "react";

const Search = () => {
  return (
    <div className="w-[95%] h-auto p-8 bg-gray-100 rounded-xl shadow-2xl max-w-3xl mx-auto my-20 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Search Resources</h1>
      <div className="checkboxes grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center">
          <input type="checkbox" id="notes" className="mr-2" />
          <label htmlFor="notes" className="text-sm text-gray-600">
            Notes
          </label>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="papers" className="mr-2" />
          <label htmlFor="papers" className="text-sm text-gray-600">
            Papers
          </label>
        </div>
      </div>
      <form className="flex flex-col gap-4">
        <div className="mb-4">
          <label
            htmlFor="department"
            className="text-sm text-gray-600 block mb-1"
          >
            Department:
          </label>
          <select
            name="department"
            id="department"
            className="w-full p-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a department</option>
            <option value="computer">Computer Science</option>
            <option value="physics">Physics</option>
            <option value="history">History</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="text-sm text-gray-600 block mb-1">
            Year:
          </label>
          <select
            name="year"
            id="year"
            className="w-full p-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a year</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="text-sm text-gray-600 block mb-1">
            Subject:
          </label>
          <select
            name="subject"
            id="subject"
            className="w-full p-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a subject</option>
            <option value="math">Math</option>
            <option value="biology">Biology</option>
            <option value="chemistry">Chemistry</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-secondary text-white px-4 py-2 rounded hover:scale-105 transition duration-300 self-start"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
