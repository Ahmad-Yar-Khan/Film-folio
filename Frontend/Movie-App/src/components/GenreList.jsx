import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const genreImages = {
  "Sci-Fi":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4wBiPL1jY9CeWMQFrx6K3YdWKkkxM0swsA&s",
  Action:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2AKn4Q3k3sFXhn6MCkkpaDAdcbOEDhO6Q5w&s",
  Crime:
    "https://www.shutterstock.com/image-vector/crime-movies-poster-design-template-600nw-702758095.jpg",
  Comedy:
    "https://www.shutterstock.com/image-vector/circus-carnival-template-swirl-stripes-600nw-1706166904.jpg",
  Western: "https://content.artofmanliness.com/uploads/2013/06/wales.jpg",
};

function GenreList() {
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/genres")
      .then((res) => res.json())
      .then((data) => setGenres(data))
      .catch((err) => console.error("Error fetching genres", err));
  }, []);

  const filteredGenres = genres.filter((genre) =>
    genre.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search genre here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      ></input>
      <div className="movies-grid">
        {filteredGenres.map((genre) => (
          <div
            key={genre.id}
            className="card"
            onClick={() => navigate(`/genres/${genre.id}`)}
          >
            <img
              src={
                genreImages[genre.title] || "https://via.placeholder.com/200"
              }
              alt={genre.title}
              className="card-img"
            />
            <div className="card-body">
              <h3>{genre.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GenreList;
