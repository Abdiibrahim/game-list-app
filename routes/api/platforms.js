const express = require('express');
const router = express.Router();

// Load Platform model
const Platform = require("../../models/Platform");

/// @route GET api/platforms/all
/// @desc Gets all platforms
/// @access Public
router.get("/all", async (req, res) => {
    const platforms = await Platform.find().cache({ expire: 1800 });

    res.json(platforms);
});

/// @route POST api/platforms/insert
/// @desc Inserts a platform
/// @access Public
router.post("/insert", (req, res) => {
    const newPlatform = new Platform({
        slug: req.body.slug,
        name: req.body.name
    });

    newPlatform.save()
        .then(platform => res.json(platform))
        .catch(err => console.error(err));
});

module.exports = router;
