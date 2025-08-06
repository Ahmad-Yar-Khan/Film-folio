const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const genresFile = path.join(__dirname, "../data/genres.json");
const moviesFile = path.join(__dirname, "../data/movies.json");

// GET all genres
router.get("/", (req, res) => {
  fs.readFile(genresFile, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to load genres" });
    res.json(JSON.parse(data));
  });
});

// GET movies by genre ID
router.get("/:id/movies", (req, res) => {
  const genreId = parseInt(req.params.id);
  fs.readFile(moviesFile, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to load movies" });

    const movies = JSON.parse(data);
    const genreMovies = movies.filter((m) => m.genreId === genreId);

    if (genreMovies.length === 0) {
      return res.status(404).json({ error: "No movies found for this genre" });
    }

    res.json(genreMovies);
  });
});

module.exports = router;
