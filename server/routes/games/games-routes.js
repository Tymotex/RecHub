const express = require("express"),
      colours = require("colors"),    // This is for colouring the console output! :D
      axios = require("axios");

const router = express.Router();

// Constants:
const IGDB_BASE_URL = "https://api-v3.igdb.com";

router.get("/list", function(req, res) {
    console.log("===== Fetching a List of Games! =====".blue.underline);
    axios({
            url: `${IGDB_BASE_URL}/games`,
            method: "POST",
            headers: {
                "Accept": "application/json",
                "user-key": process.env.IGDB_API_KEY
            },
            data: "fields name,popularity; sort popularity desc;"
        })
        .then((gamesList) => {
            console.log("===> Fetched games SUCCEEDED".green);
            axios({
                    url: `${IGDB_BASE_URL}/covers`,
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "user-key": process.env.IGDB_API_KEY
                    },
                    data: `fields game, image_id;
                           where game = (115278,120268,105049,113344,19164,1877,115653,36198,22422,96217,26845,55038);
                           limit 100;`
                })
                .then((gameCover) => {
                    console.log("===> Fetched game covers SUCCEEDED".green);
                    // Adding a field 'coverImages' that will contain a list of URLs to the cover
                    // image of each game (formatted like: https://images.igdb.com/.../img.jpg)
                    gamesList.data.forEach((currGame) => {
                        currGame.coverImages = [];
                        gameCover.data.forEach((cover) => {
                            if (cover.game === currGame.id) {
                                // Choosing size: cover_big -> 264 x 374 
                                // see docs: https://api-docs.igdb.com/#images)
                                const formattedURL = `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`
                                currGame.coverImages.push(formattedURL);
                            }
                        })
                    });
                    return res.json({
                        games: gamesList.data
                    });
                })
                .catch((err) => {
                    console.log("===> Fetched game covers FAILED".red);
                })
        })
        .catch((err) => {
            console.log("===> Fetched games FAILED".red);
        });
});

module.exports = router;

/*
router.get("/", (req, res) => {
    var getCompanyData = { 
        method: "POST",
        url: `${BASE_URL}/companies`,
        headers: {
            "user-key": process.env.IGDB_API_KEY 
        },
        data: 'fields developed; where name="Atlus";',
        json: true
    }
    axios(getCompanyData)
        .then((response) => {
            developedGames = response.data[0].developed.join(", ");
            var getGamesBy = { 
                method: "POST",
                url: `${BASE_URL}/games`,
                headers: {
                    "user-key": process.env.IGDB_API_KEY 
                },
                data: `fields *; where id=(${developedGames}); limit 10; sort popularity desc;`,
                json: true
            };
            axios(getGamesBy)
                .then((nextRes) => {
                    res.send(nextRes.data);
                })
                .catch((err) => {
                    res.render("error", {
                        err: err
                    });
                });
        })
        .catch((err) => {
            res.render("error", {
                err: err
            });
        });
});
*/
