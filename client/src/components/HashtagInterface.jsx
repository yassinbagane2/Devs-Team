import hashtag from "../assets/hashtag.jpg";
import React, { useState } from "react";

import axios from "axios";

const api = "http://localhost:5019/api/services/hashtag";

const HashtagInterface = () => {
  const [hashtags, setHashtags] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [keyword, setKeyword] = useState("");

  const loading = isLoading ? "Loading ..." : "";
  const hashtagsElements =
    hashtags.length > 0
      ? hashtags.map((hashtag) => <li key={hashtag}>{hashtag}</li>)
      : "";

  const getHashtags = async (e) => {
    setIsLoading(true);

    axios
      .post(api, { hashtag: keyword })
      .then((res) => {
        setHashtags(res.data.hashtags);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="w-[520px] min-h-[620px] relative p-6 mb-6 bg-white rounded-md">
      <div className="flex items-center flex-col">
        <h1 className="text-2xl text-gray-900 font-bold">
          Hashtags generators
        </h1>
        <input
          className="py-2 px-3 mt-3 placeholder:text-sm border rounded-md focus:outline-indigo-600 w-[70%] z-20 shadow-sm"
          placeholder="ex. Summer"
          type="text"
          onKeyDown={getHashtags}
        />
        <button onClick={getHashtags}>get</button>
      </div>
      <div>
        <img
          className="w-24 absolute top-2 right-2"
          src={hashtag}
          alt="hashtag"
        />
      </div>
      <div className="w-[400px] mx-auto rounded-md bg-gray-50 mt-3 shadow-sm border-2 p-4">
        {loading}

        <ul>{hashtagsElements}</ul>
      </div>
    </div>
  );
};

export default HashtagInterface;
