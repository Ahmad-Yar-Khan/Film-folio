// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import Directors from "./components/Directors";
import DirectorDetails from "./components/DirectorDetails";
import GenreList from "./components/GenreList";
import GenreDetails from "./components/GenreDetails";
import Help from "./components/Help";
import Home from "./components/Home";

// Dummy page components
const About = () => <h2>About Page</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/directors" element={<Directors />} />
          <Route path="/DirectorDetails/:id" element={<DirectorDetails />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
          <Route path="/genres" element={<GenreList />} />
          <Route path="/genres/:id" element={<GenreDetails />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
