const mongoose = require('mongoose');

const townSchema = new mongoose.Schema({
    ejemplito: { type : String , required: true},
})

module.exports =  mongoose.model('Town', townSchema);