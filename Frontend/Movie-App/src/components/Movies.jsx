import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import "../App.css";

function Movies() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/movies")
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .then(console.log("Fetching data"))
      .catch((err) => console.log("Error in fetching movies", err));
  }, []);

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}></MovieCard>
      ))}
      ;
    </div>
  );
}

export default Movies;
