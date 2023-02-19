import React, { useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
const GenerateHashtag = () => {
  const [tags, setTags] = useState([]);
  const handleAddHashtag = (e) => {
    if (e.keyCode === 13) {
      const newArr = [...tags];
      newArr.push(e.target.value);
      inputRef.current.value = "";
      setTags(newArr);
      console.log(tags);
    }
  };
  const removeHashTag = (tag) => {
    const newArr = tags.filter((item) => item !== tag);
    setTags(newArr);
  };
  const inputRef = useRef();
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="mt-20">
        <h1 className="text-2xl font-bold text-blue-700">
          AI hashtags generator!
        </h1>
        <p className="my-3 text-gray-500">
          This tool Generates successful hashtags for your posts. Achieve higher
          visibility and more followers. Simply enter a hashtag ‘to start
        </p>
        <div
          onClick={() => inputRef.current.focus()}
          className="flex gap-2 border cursor-pointer py-2"
        >
          <div className="px-1 flex">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="py-1 px-3 gap-2 flex items-center rounded-md bg-indigo-600 text-white mx-1"
              >
                <AiFillCloseCircle
                  onClick={() => {
                    removeHashTag(tag);
                  }}
                />
                {tag}
              </span>
            ))}
          </div>
          <input
            ref={inputRef}
            type="text"
            className="bg-transparent outline-none"
            onKeyDown={handleAddHashtag}
          />
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        <div className="w-80 rounded-md mt-3 p-3 bg-white">
          <h1 className="text-xl font-bold">#Summer</h1>
          <p>#love</p>
          <p>#love</p>
          <p>#love</p>
          <p>#love</p>
        </div>
      </div>
    </div>
  );
};

export default GenerateHashtag;
