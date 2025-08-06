import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
function DirectorDetails() {
  const { id } = useParams();

  const [directedMovies, setDirectedMovies] = useState([]);
  const [director, setDirector] = useState(null);

  //fetch movies by director
  useEffect(() => {
    fetch(`http://localhost:3000/api/directors/${id}/movies`)
      .then((res) => res.json())
      .then((data) => setDirectedMovies(data))
      .catch((err) =>
        console.log(`Error in fetching movies by director ${id}`, err)
      );

    //fetch director info

    fetch(`http://localhost:3000/api/directors/${id}`)
      .then((res) => res.json())
      .then((data) => setDirector(data))
      .catch((err) => console.log("Error fetching director", err));
  }, [id]);

  return (
    <div style={{ padding: "2rem" }}>
      {/* If director info is not yet loaded */}
      {!director ? (
        <p>Loading director information...</p>
      ) : (
        <>
          {/* Director Info */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              marginBottom: "2rem",
              backgroundColor: "#f5f5f5",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={director.photo}
              alt={director.name}
              style={{
                width: "200px",
                height: "auto",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
            <div>
              <h1 style={{ marginBottom: "0.5rem" }}>{director.name}</h1>
              <p style={{ margin: "0.3rem 0" }}>
                <strong>Born:</strong> {director.birthYear}
              </p>
              <p style={{ margin: "0.3rem 0" }}>
                <strong>Nationality:</strong> {director.nationality}
              </p>
              <p style={{ marginTop: "1rem" }}>{director.bio}</p>
            </div>
          </div>

          {/* Movies List */}
          <h2 style={{ marginBottom: "1rem" }}>
            Movies by <span style={{ color: "#333" }}>{director.name}</span>
          </h2>
          {directedMovies.length === 0 ? (
            <p>This director has no movies listed.</p>
          ) : (
            <div className="movies-grid">
              {directedMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default DirectorDetails;
