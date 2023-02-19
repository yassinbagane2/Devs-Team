import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-[1180px] mx-auto py-3">
      <div className="flex items-center gap-3 text-white">
        <img className="w-10 h-10" src={logo} alt="log" />
        <h1>Digimind</h1>
      </div>
      <div>
        <div className="flex items-center gap-5">
          <button className="flex group gap-2 px-3 items-center text-sm w-28 duration-200 transition-all py-2 text-white border-2 hover:text-black hover:bg-white font-medium border-white rounded-md">
            <FiLogOut className="text-white group-hover:text-black" />
            <Link to="/login">Logout</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
