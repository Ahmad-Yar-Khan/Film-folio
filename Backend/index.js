const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors());

const movieRouter = require("./Routes/movieRouter");
const directorRouter = require("./Routes/directorRouter");
app.use("/api/movies", movieRouter);
app.use("/api/directors", directorRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
