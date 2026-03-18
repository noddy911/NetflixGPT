import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
const MovieCards = ({ posterPath }) => {
  return (
    <div>
      <div className="min-w-[180px] transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10">
        <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
      </div>
    </div>
  );
};

export default MovieCards;
