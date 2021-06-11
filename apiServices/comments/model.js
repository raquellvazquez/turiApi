const mongoose = require('mongoose');
const Town = require('../towns/model');
const User = require('../users/model');

const commentSchema = new mongoose.Schema({
        body: { type : String , required: true},
        pts: { type : Number , required: true},
        dataTownId: { type: mongoose.Schema.Types.ObjectId, ref: "Town", required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        img: { type : String, required: true},
    },
)

module.exports =  mongoose.model('Comment', commentSchema, 'Comments');