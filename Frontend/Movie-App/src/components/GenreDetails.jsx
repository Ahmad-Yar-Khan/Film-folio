import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function GenreDetails() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/genres/${id}/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching movies by genre", err));
  }, [id]);

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default GenreDetails;
