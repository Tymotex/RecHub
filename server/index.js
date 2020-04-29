const express = require("express"),
      dotenv = require("dotenv"),
      axios = require("axios");

const nasaRouter = require("./routes/nasa/nasa-routes"),
      indexRouter = require("./routes/index/index-routes");

const app = express();



// ===== Configuration =====
// === Routes ===
app.use("/nasa", nasaRouter);  // For testing HTTP requests to NASA's API
app.use("/", indexRouter)

// === Libraries ===
// dotenv lets us access all the keys and values we define in the .env file
// via the process.env object
dotenv.config();

// === Express config ===
app.set("view engine", "ejs");
app.use(express.static("public"))
app.use("/libs", express.static(__dirname + "/node_modules/"));



// ===== Listening =====
app.listen(3001, () => {
    console.log(`Server listening on ${process.env.BACKEND_PORT}`);
});



