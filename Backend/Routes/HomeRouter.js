const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.get("/top-movies", (req, res) => {
  try {
    const filePath = path.join(__dirname, "../data/movies.json");
    const moviesData = fs.readFileSync(filePath, "utf-8");
    const movies = JSON.parse(moviesData);

    const topMovies = movies.sort((a, b) => b.rating - a.rating).slice(0, 3);

    res.json(topMovies);
  } catch (err) {
    console.error("Error reading top movies:", err);
    res.status(500).json({ error: "Failed to fetch top movies" });
  }
});

module.exports = router;
