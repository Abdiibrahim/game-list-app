const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PlatformSchema = new Schema({
    slug: {
        type: String
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('platforms', PlatformSchema);
