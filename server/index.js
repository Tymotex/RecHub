const express = require("express"),
      dotenv = require("dotenv"),
      cors = require('cors'),
      axios = require("axios");

const nasaRouter = require("./routes/nasa/nasa-routes"),
      indexRouter = require("./routes/index/index-routes"),
      gamesRouter = require("./routes/games/games-routes");

const app = express();

// TODO: move these constants into their own file?
const IGDB_BASE_URL = "https://api-v3.igdb.com";

// ===== Configuration =====
// === Express config ===
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/libs", express.static(__dirname + "/node_modules/"));
app.use(cors());

// === Routes ===
app.use("/nasa", nasaRouter);  // For testing HTTP requests to NASA's API
app.use("/", indexRouter);
app.use("/games", gamesRouter);

// === Libraries ===
// dotenv lets us access all the keys and values we define in the .env file
// via the process.env object
dotenv.config();



// ===== Listening =====
app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Server listening on port ${process.env.BACKEND_PORT}`);
});



