import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  console.log(movies);
  return (
    <div className="px-6 py-4 m-4">
      <h1 className="text-white text-2xl font-bold mb-4">{title}</h1>

      <div className="flex overflow-x-scroll no-scrollbar space-x-4">
        {movies &&
          movies.map((movie) => (
            <MovieCards key={movie.id} posterPath={movie.poster_path} />
          ))}

        {/* <MovieCards title={title} posterPath={movies?.[0]?.poster_path} /> */}
      </div>
    </div>
  );
};

export default MovieList;
