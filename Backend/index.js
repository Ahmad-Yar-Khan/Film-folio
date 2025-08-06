const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors());

const movieRouter = require("./Routes/movieRouter");
const directorRouter = require("./Routes/directorRouter");
const genresRouter = require("./Routes/genresRouter");
const HomeRouter = require("./Routes/HomeRouter");

app.use("/api/movies", movieRouter);
app.use("/api/directors", directorRouter);
app.use("/api/genres", genresRouter);
app.use("/", HomeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
