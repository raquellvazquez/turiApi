const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    ejemplito: { type : String , required: true},
})

module.exports =  mongoose.model('Comment', commentSchema);