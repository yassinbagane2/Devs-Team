import React, { useState } from "react";
import img from "../assets/image2.png";

import axios from "axios";

const api = "http://localhost:5019/api/services/ideas";

const IdeasInterface = () => {
  const [ideas, setIdeas] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [subject, setSubject] = useState("");

  const loading = isLoading ? "Loading ..." : "";
  const ideasList =
    ideas.length > 0
      ? ideas.map((idea) => (
          <li className="text-md" key={idea}>
            {idea}
          </li>
        ))
      : "";

  const getIdeas = async (e) => {
    console.log(subject);

    setIdeas([]);
    setIsLoading(true);

    axios
      .post(api, { subject: subject })
      .then((res) => {
        setIdeas(res.data.ideas);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="w-[620px] min-h-[620px] relative p-6 mb-6 bg-white rounded-md">
      <div className="flex items-center gap-4 flex-col">
        <h1 className="text-2xl text-gray-900 font-bold">Ideas generators</h1>
        <div className="flex items-center gap-2">
          <input
            className="p-3  placeholder:text-sm border rounded-lg focus:outline-indigo-600 w-[70%] z-20 shadow-sm"
            placeholder="ex. Digital Marketing"
            onChange={(e) => setSubject(e.target.value)}
            type="text"
          />
          <button
            className="rounded-md bg-indigo-600 p-3 text-white font-semibold"
            onClick={getIdeas}
          >
            Generate
          </button>
        </div>
      </div>

      <div>
        <img className="w-24 absolute top-2 right-2" src={img} alt="Image" />
      </div>

      {loading ||
        (ideasList.length > 0 && (
          <div className="w-[400px] mx-auto rounded-md bg-gray-50 mt-3 shadow-sm border-2 p-4">
            {loading}
            <ul className="flex flex-col gap-3 py-2 px-4 list-disc">
              {ideasList}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default IdeasInterface;
