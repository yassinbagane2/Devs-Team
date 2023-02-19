import React from "react";
import Navbar from "../components/Layout/Navbar";
import NewTools from "../components/NewTools";
import Search from "../components/Search";

const Dashboard = () => {
  return (
    <div className="w-[1100px] mx-auto">
      <Navbar />
      <Search />
      <NewTools />
    </div>
  );
};

export default Dashboard;
