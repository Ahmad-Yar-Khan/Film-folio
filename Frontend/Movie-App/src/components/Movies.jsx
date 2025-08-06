import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import "../App.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log("Error in fetching movies", err));
  }, []);

  // First filter, then sort (both derived)
  const filteredAndSortedMovies = [...movies]
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        case "rating-high":
          return b.rating - a.rating;
        case "rating-low":
          return a.rating - b.rating;
        case "release-new":
          return b.releaseDate - a.releaseDate; // assuming year like 2023
        case "release-old":
          return a.releaseDate - b.releaseDate;
        default:
          return 0;
      }
    });

  return (
    <div className="movies-container">
      <div className="filter-bar">
        <select
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
          className="sort-dropdown"
        >
          <option value="">Sort By</option>
          <option value="title-asc">Title (A–Z)</option>
          <option value="title-desc">Title (Z–A)</option>
          <option value="rating-high">Rating (High to Low)</option>
          <option value="rating-low">Rating (Low to High)</option>
          <option value="release-new">Release Date (Newest)</option>
          <option value="release-old">Release Date (Oldest)</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="movies-grid">
        {filteredAndSortedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
