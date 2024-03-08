import React from "react";

const Feedback = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-5 py-16">
      <h1 className="text-[30px] sm:text-[45px]">Feedbacks</h1>
      <h4 className="text[15px] sm:text-[20px]">Help Us Serve You Better</h4>
      <p className="sm:w-[35%] w-[95%] text-center text-gray-400">
        We greatly value your feedback! It plays a vital role in our ongoing
        efforts to enhance our services. Whether you have suggestions,
        compliments, or areas where we can improve, we want to hear from you.
      </p>
      <button className='bg-secondary m-2 rounded-3xl shadow-xl sm:hover:scale-105 text-white sm:px-8 sm:py-4 px-4 py-4 transition-all'>Share Feedbacks</button>
    </div>
  );
};

export default Feedback;
