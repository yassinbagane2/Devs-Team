import React from "react";

const Button = ({ onClick, className, name, type, children }) => {
  return (
    <button
      onClick={onClick}
      type={type || "text"}
      className={`px-2 py-3 bg-[#42275a] border-2 border-white rounded-md mt-4 text-white hover:opacity-95 duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
