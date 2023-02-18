import React from "react";

const Button = ({ onClick, className, type, children }) => {
  return (
    <button onClick={onClick} type={type || "text"} className={`text-white w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-indigo-700 my-3 hover:bg-indigo-600${className}`}>
      {children}
    </button>
  );
};

export default Button;
