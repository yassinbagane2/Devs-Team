import React from "react";

const Button = ({ onClick, className, name, type, children }) => {
  return (
    <button onClick={onClick} type={type || "text"} className={`${className}`}>
      {children}
    </button>
  );
};

export default Button;
