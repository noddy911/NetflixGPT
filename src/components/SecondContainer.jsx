import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="">
      <div className="-mt-52 relative z-20">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"New Release"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Originals"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top 10"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondContainer;
