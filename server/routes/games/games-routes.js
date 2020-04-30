const express = require("express"),
      axios = require("axios");
const app = express();

const router = express.Router();

router.get("/", (req, res) => {
    console.log(process.env.IGDB_API_KEY);

    var options = { 
        method: "POST",
        url: "https://api-v3.igdb.com/games",
        headers: {
            "user-key": process.env.IGDB_API_KEY 
        },
        data: {
            id: 1
        },
        json: true
    }

    axios(options)
        .then((response) => {
            console.log("Done!");
            console.log(response.data);
            res.send(response.data);
        })
        .catch((err) => {
            console.log("Error!");
            res.send("Games!");
        });
});

module.exports = router;
