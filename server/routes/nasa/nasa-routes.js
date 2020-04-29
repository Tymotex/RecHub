const express = require("express"),
      dotenv = require("dotenv"),
      axios = require("axios");

dotenv.config();
const router = express.Router();

// Making an HTTP GET request to NASA's API for their 'Astronomy Picture of the Day'
router.get("/", (req, res) => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`)
        .then(response => {
            // response.data has properties: explanation, url
            res.render("nasa/nasa-daily", {
                nasaPicture: response.data.url,
                nasaContent: response.data.explanation
            });
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;
