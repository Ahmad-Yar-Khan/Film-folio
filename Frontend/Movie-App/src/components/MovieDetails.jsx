import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const movieId = parseInt(id);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/api/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.log("Error in fetching movie by id", err));
  }, []);

  if (!movie) return <h1>Loading...</h1>;
  return (
    <div onClick={() => navigate(-1)}>
      <div
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <img
            src={movie.poster || "https://via.placeholder.com/300x450"}
            alt={movie.title}
            style={{
              width: "300px",
              height: "450px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <div style={{ flex: "1" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
              {movie.title}
            </h1>

            <p
              style={{
                color: "#666",
                fontSize: "1.1rem",
                marginBottom: "10px",
              }}
            >
              <strong>Release Year:</strong> {movie.year}
            </p>

            <p
              style={{
                color: "#666",
                fontSize: "1.1rem",
                marginBottom: "10px",
              }}
            >
              <strong>Genre:</strong> {movie.genre}
            </p>

            <p
              style={{
                color: "#666",
                fontSize: "1.1rem",
                marginBottom: "10px",
              }}
            >
              <strong>Rating:</strong> ⭐ {movie.rating} / 10
            </p>

            <p
              style={{
                color: "#333",
                fontSize: "1.1rem",
                lineHeight: "1.6",
                marginTop: "20px",
              }}
            >
              {movie.plot}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
