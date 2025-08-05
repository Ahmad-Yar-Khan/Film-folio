// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎬 MovieApp</div>
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
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
