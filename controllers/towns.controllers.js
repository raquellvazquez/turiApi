const {response} = require('express')

const townsGet = (req, res =response) => {

    const {date} = req.query;
    res.json({
        msg: 'GET API - controller',
        date
    })
}

const townsPost = (req, res) => {
    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'POST API -controller',
        nombre,
        edad
    })
}

const townsPut = (req, res) => {
    const userId = req.params.id;

    res.json({
        msg: 'PUT API - controller',
        userId
    })
}

const townsDelete = (req, res) => {
    res.json({
        msg: 'DELETE API - controller'
    })
}

module.exports = {
    townsGet,
    townsPost,
    townsPut,
    townsDelete,
}