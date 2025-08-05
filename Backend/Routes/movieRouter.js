const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const moviesFile = path.join(__dirname, "../data/movies.json");

router.get("/", (req, res) => {
  fs.readFile(moviesFile, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to load movies" });
    res.json(JSON.parse(data));
  });
});

router.get("/:id", (req, res) => {
  const movieId = parseInt(req.params.id);
  fs.readFile(moviesFile, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to load movies" });
    const movies = JSON.parse(data);
    const movie = movies.find((m) => m.id === movieId);
    if (!movie) return res.status(404).json({ error: "Movie not found" });
    res.json(movie);
  });
});

module.exports = router;
