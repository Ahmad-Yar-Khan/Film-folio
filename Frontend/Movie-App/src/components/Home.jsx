import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Home() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/top-movies")
      .then((res) => res.json())
      .then((data) => setTopMovies(data))
      .catch((err) => console.error("Failed to fetch top movies:", err));
  }, []);

  return (
    <div className="home-container">
      <section className="top-movies-section">
        <h2 className="section-title">🎬 Top Rated Movies</h2>
        <div className="movies-grid">
          {topMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* You can add more sections below this */}
    </div>
  );
}

export default Home;
