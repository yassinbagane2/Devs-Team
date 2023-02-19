import React, { useState } from "react";

const MediaImageGenerator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rendredImage, setRendredImage] = useState(true);
  const handleRenderImage = () => {
    setIsLoading(true);
    // send post request

    // setIsLoading False
  };
  return (
    <div className="w-[520px] min-h-[620px] relative p-6 mb-6 bg-white rounded-md">
      <h1 className="font-bold text-xl my-2">Generate Image from text</h1>
      <form onSubmit={handleRenderImage}>
        <div className="flex flex-col gap-1">
          <label className="text-sm" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded-md text-sm px-3 py-2"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm" htmlFor="title">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols="10"
            rows="5"
            className="resize-none border rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className={"bg-gray-800 text-white px-3 py-2 rounded-md my-2"}
        >
          Preview
        </button>
      </form>
      <div className="mt-4">
        {isLoading ? (
          <div className="flex items-center justify-center">Loading...</div>
        ) : (
          ""
        )}
        {rendredImage ? (
          <div className="mx-3 border h-64 rounded-md"></div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MediaImageGenerator;
