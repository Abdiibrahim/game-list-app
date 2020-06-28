const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Genre = require("./Genre");
const Platform = require("./Platform");

// Create Schema
const GameSchema = new Schema({
    slug: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    playtime: {
        type: Number
    },
    platforms: {
        type: [Platform]
    },
    released: {
        type: Date
    },
    metacritic: {
        type: Number
    },
    genres: {
        type: [Genre]
    },
    background_image: {
        type: String
    }
});

module.exports = Game = mongoose.model("games", GameSchema);
