import { useEffect, useState } from "react";
import DirectorCard from "./DirectorCard";

function Directors() {
  const [directorList, setDirectors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/directors")
      .then((res) => res.json())
      .then((data) => setDirectors(data))
      .catch((err) => console.log("Error in fetching directors", err));
  }, []);

  // Filter directors based on search term
  const filteredDirectors = directorList.filter((director) =>
    director.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="directors-container">
      <input
        type="text"
        placeholder="Search directors..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="movies-grid">
        {filteredDirectors.map((director) => (
          <DirectorCard key={director.id} director={director} />
        ))}
      </div>
    </div>
  );
}

export default Directors;
