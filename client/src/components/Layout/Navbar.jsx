import React, { useState } from "react";
import profileImg from "../../assets/profile.avif";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <header className="flex items-center justify-between my-2">
      <h1 className="font-bold text-2xl">Library</h1>
      <div className="relative">
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <img
            className="w-10 h-10 object-cover rounded-full"
            src={profileImg}
            alt="profile"
          />
        </button>
        <div
          className={
            !isVisible
              ? "bg-white shadow-md h-40 w-64 rounded-md absolute  opacity-0"
              : "bg-white shadow-md h-40 w-64 rounded-md absolute -translate-x-12 opacity-100"
          }
        >
          <div className="px-2 py-3 flex text-sm border-b">
            <div className="flex-1">
              <img
                className="w-8 h-8 object-cover rounded-md"
                src={profileImg}
                alt="profile"
              />
            </div>
            <div className="flex-1">
              <h2 className="font-bold">Yassin Bagane</h2>
              <p className="text-gray-500 leading-none">
                yassin.bagane2@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col px-4">
            <Link className="py-2 font-medium" to="/settings">
              settings
            </Link>
            <Link
              onClick={() => {
                localStorage.removeItem("token");
              }}
              className="py-2 font-medium"
              to="/login"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
