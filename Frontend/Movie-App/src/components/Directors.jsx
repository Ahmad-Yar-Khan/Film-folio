import { useEffect, useState } from "react";
import DirectorCard from "./DirectorCard";

function Directors() {
  const [directorList, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/directors")
      .then((res) => res.json())
      .then((data) => setDirectors(data))
      .catch((err) => console.log("Error in fetching directors", err));
  }, []);

  return (
    <div className="movies-grid">
      {directorList.map((director) => (
        <DirectorCard key={director.id} director={director} />
      ))}
    </div>
  );
}

export default Directors;
