const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PlatformSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = Platform = mongoose.model("platforms", PlatformSchema);
