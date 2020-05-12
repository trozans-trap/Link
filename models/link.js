var mongoose = require('mongoose');

var ServerSchema = new mongoose.Schema({
    urlCode: {
        type: String,
    },
    longUrl: {
        type: String,
    },
    shortUrl: {
        type: String,
    },
    date: {
        type: String,
        default: Date.now
    }
})

const Server = mongoose.model('urlshortner', ServerSchema);
module.exports = Server;