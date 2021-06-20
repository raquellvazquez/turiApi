const mongoose = require('mongoose');

const townSchema = new mongoose.Schema(
    {
        name: { type : String , required: true},
        state: { type : String , required: true},
        infoState: { type : String , required: true},
        img: { type : String , required: true},
        attractions: { type : Array , required: true},
    },
)


module.exports =  mongoose.model('Town', townSchema, 'Towns' );