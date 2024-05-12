import React, { useState } from "react";

const Feedback = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-5 py-16">
      <h1 className="text-[30px] sm:text-[45px]">Feedbacks</h1>
      <h4 className="text-[15px] sm:text-[20px]">Help Us Serve You Better</h4>
      <p className="sm:w-[35%] w-[95%] text-center text-gray-400">
        We greatly value your feedback! It plays a vital role in our ongoing
        efforts to enhance our services. Whether you have suggestions,
        compliments, or areas where we can improve, we want to hear from you.
      </p>
      <button
        className="bg-secondary m-2 rounded-xl shadow-xl sm:hover:scale-105 text-white sm:px-8 sm:py-4 px-4 py-4 transition-all"
        onClick={toggleModal}
      >
        Share Feedbacks
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-8 z-50 relative">
            <button
              className="absolute top-0 right-0 m-2 text-2xl text-gray-600 hover:text-gray-800"
              onClick={toggleModal}
            >
              &times;
            </button>
            <p>We are building this feature.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
