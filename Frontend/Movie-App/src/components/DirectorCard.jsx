import "../App.css";
import { useNavigate } from "react-router-dom";

function DirectorCard({ director }) {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/DirectorDetails/${director.id}`);
      }}
    >
      <img src={director.photo} alt={director.name} className="card-img" />
      <div className="card-body">
        <h3>{director.name}</h3>
        <p>⭐{director.birthYear}</p>
        <p>{director.nationality}</p>
        <p>{director.bio}</p>
      </div>
    </div>
  );
}

export default DirectorCard;
