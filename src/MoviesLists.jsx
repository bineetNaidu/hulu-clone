import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import requests, { instance } from "./requests";

// STATICS
import "./MoviesLists.css";

function MoviesLists() {
  // STATES
  const [movies, setMovies] = useState([]);

  // HOOKS && CONTEXTS
  useEffect(() => {
    async function fetchData() {
      const req = await instance.get(requests.fetchActionMovies);
      setMovies(req.data.results);
      return req;
    }

    fetchData();
  }, []);
  // FUNCTIONS

  return (
    <div className="moviesLists">
      {movies.map((movie) => (
        <VideoCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default MoviesLists;
