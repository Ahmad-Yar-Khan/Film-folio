// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        🎬 FilmFolio
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/genres">Genres</Link>
        </li>
        <li>
          <Link to="/directors">Directors</Link>
        </li>
        <li>
          <Link to="/help" className="text-sm text-blue-500 hover:underline">
            Help
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
