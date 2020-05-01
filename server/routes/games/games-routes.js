const express = require("express"),
      axios = require("axios");

const router = express.Router();

BASE_URL = "https://api-v3.igdb.com";

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


module.exports = router;
