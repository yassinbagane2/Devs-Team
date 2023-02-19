import React from "react";
import { FiSearch } from "react-icons/fi";
const Search = () => {
  return (
    <div className="w-full bg-[#f9fafb] rounded-lg h-28">
      <div className="relative w-[90%]">
        <input
          className="py-4 pl-12 mt-4 rounded-md w-full mx-6 focus:right-1 focus:ring-indigo-600 focus:outline-indigo-600"
          type="search"
          name="search"
          id="search"
        />
        <FiSearch className="absolute top-8 left-10 text-gray-500 text-2xl" />
      </div>
    </div>
  );
};

export default Search;
