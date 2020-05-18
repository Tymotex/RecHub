const express = require("express"),
      colours = require("colors"),    // This is for colouring the console output! :D
      axios = require("axios");

const router = express.Router();

// Constants:
const IGDB_BASE_URL = "https://api-v3.igdb.com";


const formatReqObject = (endpoint) => ({
    url: `${IGDB_BASE_URL}/${endpoint}`,
    method: "POST",
    headers: {
        "Accept": "application/json",
        "user-key": process.env.IGDB_API_KEY
    }
});

// TODO: Helper function documentation
async function fetchGameList(numGames, sortBy) {
    return axios({
            ...formatReqObject("games"),
            data: `fields name, summary, storyline, total_rating; 
                   where ${sortBy}>0;
                   limit ${numGames}; 
                   sort ${sortBy} desc;`
        })
        .then((response) => {
            console.log("===> Fetched games SUCCEEDED".green);
            return response.data
        })
        .catch((err) => {
            console.log("===> Fetched games FAILED".red, err);
        });
}


// Fetching a general list of games:
router.get("/list", async function(req, res) {
    console.log("===== Fetching a List of Games! =====".blue.underline);
    let gamesList = await fetchGameList(12, "popularity");
    const gameIDs = gamesList.map((eachGame) => eachGame.id);

    axios({
            ...formatReqObject("covers"),
            data: `fields game, image_id;
                   where game = (${gameIDs.join(", ")});
                   limit 100;`
        })
        .then((gameCover) => {
            console.log("===> Fetched game covers SUCCEEDED".green);
            // Adding a field 'coverImages' that will contain a list of URLs to the cover
            // image of each game (formatted like: https://images.igdb.com/.../img.jpg)
            gamesList.forEach((currGame) => {
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
                games: gamesList
            });
        })
        .catch((err) => {
            console.log("===> Fetched game covers FAILED".red, err);
        })
});

// Fetching HD game screenshots and other game data for showcasing
router.get("/showcase", async function(req, res) {
    console.log("===== Fetching game showcase! =====".blue.underline);
    let gamesList = await fetchGameList(4, "hypes");
    const gameIDs = gamesList.map((eachGame) => eachGame.id);

    axios({
            ...formatReqObject("screenshots"),
            data: `fields alpha_channel,animated,checksum,game,height,image_id,url,width;
                   where game=(${gameIDs.join(", ")});
                   limit 100;`
        })
        .then((gameScreens) => {
            console.log("===> Fetched game screenshots SUCCEEDED".green);
            const results = [];

            gamesList.forEach((currGame) => {
                const currGameID = currGame.id;
                const screensData = {
                    title: currGame.name,
                    description: currGame.summary, 
                    screenshots: []
                };
                gameScreens.data.forEach((screenshot) => {
                    if (screenshot.game === currGameID) {
                        // Choosing size: 1080p -> 1920 x 1080. See docs: https://api-docs.igdb.com/#images)
                        const formattedURL = `https://images.igdb.com/igdb/image/upload/t_1080p/${screenshot.image_id}.jpg`;
                        screensData.screenshots.push(formattedURL);
                    }
                });
                results.push(screensData);
            });

            return res.json({
                showcase: results
            });
        })
        .catch((err) => {
            console.log("===> Fetched game screenshots FAILED".red, err);
        })
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
