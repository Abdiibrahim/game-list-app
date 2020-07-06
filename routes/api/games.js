const express = require('express');
const router = express.Router();

const Game = require("../../models/Game");

router.get("/all", async (req, res) => {
    const games = await Game.find().cache({ expire: 1800 });

    console.log(games.length);

    res.json(games);
});

/// @route POST api/games/insert
/// @desc Inserts a game
/// @access Public
// router.post("/insert", (req, res) => {
//     const newGame = new Game({
//         slug: req.body.slug,
//         name: req.body.name,
//         playtime: req.body.playtime,
//         platforms: [],
//         released: req.body.released,
//         metacritic: req.body.metacritic,
//         genres: [],
//         background_image: req.body.background_image
//     });

//     req.body['platforms'].forEach(p => {
//         var newPlatform = new Platform({
//             slug: p.slug,
//             name: p.name
//         })
//         console.log(newPlatform);
//         newGame.platforms.push(newPlatform);
//     })

//     console.log(newGame);

//     // newGame.save()
//     //     .then(game => res.json(game))
//     //     .catch(err => console.error(err));
// });

module.exports = router;