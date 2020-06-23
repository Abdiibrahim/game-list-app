const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get("/all", async (req, res) => {
    var games = [];
    var nextURL;

    await axios({
        method: "GET",
        url: "https://rawg-video-games-database.p.rapidapi.com/games?platforms=18&dates=2013-11-01,2020-12-31",
        headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": process.env.rawgKey,
            "useQueryString": true
        }
    })
    .then(async (res) => {
        nextURL = res.data.next;
        
        res.data.results.forEach(row => {
            games.push(row);
        });

        while (nextURL != null) {
            await axios({
            method: "GET",
            url: nextURL
            })
            .then((res) => {
                nextURL = res.data.next;

                res.data.results.forEach(row => {
                    games.push(row);
                });
            })
            .catch((err) => {
                console.error(err);
            });
        }
    })
    .catch((err) => {
        console.error(err);
    });

    res.json(games);
});

module.exports = router;