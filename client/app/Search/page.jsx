import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import CardContainer from "../components/CardContainer";

const page = () => {
  return (
    <div className="min-h-screen w-screen bg-primary  pt-20">
        <Navbar/>
        <Search />
        <CardContainer/>
    </div>
  );
};

export default page;
