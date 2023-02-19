import React from "react";
import Navbar from "../components/Navbar";
import { FaHashtag, FaBrain } from "react-icons/fa";
import HashtagInterface from "../components/HashtagInterface";
const Dashboard = () => {
  return (
    <div className=" bg-gradient-to-r from-[#41295a] to-[#2F0743] min-h-screen w-full">
      <Navbar />
      <div className="mt-10 flex gap-36 items-start mx-auto w-[70%]">
        <div className="w-80 bg-gray-50 rounded-md p-6">
          <div className="border-2 hover:border-black duration-200 transition-all rounded-md p-4">
            <div className="w-12 h-12 shadow-md rounded-md bg-white flex items-center justify-center">
              <FaHashtag />
            </div>
            <h1 className="my-2 text-indigo-600 font-bold">
              Generate trending hashtags
            </h1>
            <p className="text-gray-500 text-sm">
              An awesome ai that generate tre nding hashtags by simple click!
            </p>
          </div>
          <div className="border-2 my-2 hover:border-black duration-200 transition-all rounded-md p-4">
            <div className="w-12 h-12 shadow-md rounded-md bg-white flex items-center justify-center">
              <FaBrain />
            </div>
            <h1 className="my-2 text-indigo-600 font-bold">
              Content idea generator
            </h1>
            <p className="text-gray-500 text-sm">
              Generate an ideas by given word
            </p>
          </div>
        </div>
        <div>
          <HashtagInterface />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
