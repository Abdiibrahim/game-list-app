const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const GenreSchema = new Schema({
    slug: {
        type: String
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('genres', GenreSchema);
