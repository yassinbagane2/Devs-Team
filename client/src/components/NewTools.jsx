import React from "react";
import { BsStars } from "react-icons/bs";
import { BiHash } from "react-icons/bi";
import { Link } from "react-router-dom";

const NewTools = () => {
  const tools = [
    {
      link: "/generate/hashtags",
      icon: <BiHash className="text-xl text-indigo-800" />,
      title: "Ai to generate hashtags",
      text: "a simple word can generate trending hashtags that will help your article to reash to more people",
    },
    {
      link: "/",
      icon: <BiHash className="text-xl text-indigo-800" />,
      title: "Ai to generate hashtags",
      text: "a simple word can generate trending hashtags that will help your article to reash to more people",
    },
  ];

  return (
    <div className="mt-6">
      <h1 className="font-bold text-2xl flex gap-2 items-center mb-4">
        New collection
        <BsStars className="text-xl text-yellow-400" />
      </h1>
      <div className="flex gap-6 flex-wrap">
        {tools.map((item, i) => (
          <div
            key={i}
            className="border-2 hover:scale-105 duration-200 flex rounded-md border-indigo-700 w-[230px] h-[250px] p-3"
          >
            <Link to={item.link}>
              <div className="p-3 mt-4 w-10 flex items-center justify-center shadow-md">
                {item.icon}
              </div>
              <h2 className="font-semibold my-2">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.text}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewTools;
