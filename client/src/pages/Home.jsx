import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image.png";
import logo from "../assets/logo.png";
import Typical from "react-typical";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#41295a] to-[#2F0743]">
      <nav className="py-4 mx-auto max-w-[1200px] flex justify-between items-center ">
        <h1 className="font-semibold text-3xl text-white flex items-center gap-3">
          <img className="w-10 h-10" src={logo} alt="logo" />
          digimind
        </h1>
        <div className="text-white">
          <Link to="/login">Login</Link>
          <Link
            className="ml-4 border-2 border-white rounded-md py-3 px-4 hover:bg-white hover:text-black duration-300"
            to="/signup"
          >
            Signup
          </Link>
        </div>
      </nav>
      <div className="mt-10 mx-auto max-w-[1200px]  flex items-center justify-between">
        <div className="flex flex-col h-80">
          <h1 className="text-4xl text-white mb-4">
            Best AI Writer for Creating
          </h1>

          <div className="text-white text-4xl">
            <Typical
              wrapper="b"
              steps={["Hashtags", 2000, "Posts description", 3000]}
              className="text-[#ff00cc]"
            />
          </div>
          <p className="max-w-xl text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            voluptas libero ducimus repudiandae. Architecto eaque, accusantium
            cupiditate illum eos in?
          </p>
          <Link to={"/login"}>
            <button className="px-2 py-3 bg-[#42275a] border-2 border-white rounded-md w-32 mt-4 text-white hover:scale-105 duration-200">
              Join Us
            </button>
          </Link>
        </div>
        <div>
          <img className="h-[470px]" src={image} alt="" />
        </div>
      </div>
      <footer className="text-center text-white mt-24 font-bold text-sm">
        Designed and developed by <span>Devs Team</span>
      </footer>
    </div>
  );
};

export default Home;
