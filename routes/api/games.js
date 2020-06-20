const express = require('express');
const router = express.Router();
const axios = require('axios');
const keys = require('../../config/keys');

router.get("/all", async (req, res) => {

    const games = await axios({
        url: keys.igdbURL + "/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': keys.igdbKey
        },
        data: "fields *;"
    })
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.error(err);
    });

    res.json(games);
});

module.exports = router;