// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import Directors from "./components/Directors";
import DirectorDetails from "./components/DirectorDetails";
// Dummy page components
const Genres = () => <h2>Genres Page</h2>;
const About = () => <h2>About Page</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/directors" element={<Directors />} />
          <Route path="/DirectorDetails/:id" element={<DirectorDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
