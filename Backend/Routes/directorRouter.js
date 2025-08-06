const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const directorsFile = path.join(__dirname, "../data/directors.json");
const movieFile = path.join(__dirname, "../data/movies.json");

router.get("/", (req, res) => {
  fs.readFile(directorsFile, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to load directors" });
    res.json(JSON.parse(data));
  });
});

router.get("/:id/movies", (req, res) => {
  const directorId = parseInt(req.params.id);

  fs.readFile(directorsFile, "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ error: "Error reading director file" });
    const directorList = JSON.parse(data);
    const isDirector = directorList.find((d) => d.id === directorId);

    //if director does not exist
    if (!isDirector)
      return res.status(404).json({ error: "Director not found" });

    //if we found the director

    fs.readFile(movieFile, "utf8", (err, data) => {
      if (err)
        return res.status(500).json({ error: "Error in reading movie file" });
      const movieList = JSON.parse(data);
      const directedMovies = movieList.filter(
        (movie) => movie.directorId === directorId
      );
      res.json(directedMovies);
    });
  });
});

router.get("/:id", (req, res) => {
  const directorId = parseInt(req.params.id);
  fs.readFile(directorsFile, "utf8", (err, data) => {
    if (err)
      return res.status(500).json({ error: "Error in loading director info" });
    const allDirectors = JSON.parse(data);
    if (!allDirectors)
      return res.status(404).json({ error: "Director does not exist" });
    const reqDirector = allDirectors.find((d) => d.id === directorId);
    res.json(reqDirector);
  });
});

module.exports = router;
