import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { instance } from "./requests";
import FlipMove from "react-flip-move";

// STATICS
import "./MoviesLists.css";

function MoviesLists({ selectedOptions }) {
  // STATES
  const [movies, setMovies] = useState([]);

  // HOOKS && CONTEXTS
  useEffect(() => {
    async function fetchData() {
      const req = await instance.get(selectedOptions);
      setMovies(req.data.results);
      return req;
    }

    fetchData();
  }, [selectedOptions]);
  // FUNCTIONS

  return (
    <div className="moviesLists">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} {...movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default MoviesLists;
