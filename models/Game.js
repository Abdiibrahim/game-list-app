const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require('./Genre');
require('./Platform');

const GenreSchema = mongoose.model('genres').schema;
const PlatformSchema = mongoose.model('platforms').schema;

// Create Schema
const GameSchema = new Schema({
    slug: String,
    name: String,
    playtime: Number,
    platforms: [PlatformSchema],
    released: Date,
    metacritic: Number,
    genres: [GenreSchema],
    background_image: String
});

module.exports = mongoose.model('games', GameSchema);
