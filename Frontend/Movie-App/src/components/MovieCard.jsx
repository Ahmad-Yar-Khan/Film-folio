import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/MovieDetails/${movie.id}`);
      }}
    >
      <img src={movie.poster} alt={movie.title} className="card-img" />
      <div className="card-body">
        <h3>{movie.title}</h3>
        <p>⭐{movie.rating}</p>
        <p>{movie.genre}</p>
        <p>{movie.description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
