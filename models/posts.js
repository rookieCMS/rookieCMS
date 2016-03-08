var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var data = {
    "posts": [
        {
            "title": "lorem lolsum",
            "text": "alot of text could be right here"
        },
        {
            "title": "ibjadsibjadsbjiadsbad",
            "text": "why do i make such a random title"
        }
    ]
}

var Posts = new Schema({
    title: String,
    text: String,

});


module.exports = mongoose.model('Posts', Posts);