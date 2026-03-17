import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video px-6 pt-[20%] absolute z-10 text-white bg-gradient-to-r from-black to-transparent">
      <h1 className="p-4 text-6xl font-bold">{title}</h1>
      <p className="p-4 w-1/3">{overview}</p>
      <div className="p-4 flex">
        <button className="bg-white text-black px-4 py-2 m-2 rounded-lg flex space-x-2 ">
          <Play />
          <span>Play</span>
        </button>
        <button className="bg-gray-300 text-black px-4 py-2 m-2 rounded-lg opacity-80 flex space-x-2">
          <Info />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
