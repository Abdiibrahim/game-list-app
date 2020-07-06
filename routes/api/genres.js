const express = require('express');
const router = express.Router();

// Load Genre model
const Genre = require("../../models/Genre");

/// @route GET api/genres/all
/// @desc Gets all genres
/// @access Public
router.get("/all", async (req, res) => {
    const genres = await Genre.find().cache({ expire: 1800 });

    res.json(genres);
});

/// @route POST api/genres/insert
/// @desc Inserts a genre
/// @access Public
router.post("/insert", (req, res) => {
    const newGenre = new Genre({
        slug: req.body.slug,
        name: req.body.name
    });

    newGenre.save()
        .then(genre => res.json(genre))
        .catch(err => console.error(err));
});

module.exports = router;
