const {response} = require('express')

const commentsGet = (req, res =response) => {

    res.json({
        msg: 'GET API - controller'
    })
}

const commentsPost = (req, res) => {
    res.status(201).json({
        msg: 'POST API -controller',
    })
}

const commentsPut = (req, res) => {

    res.json({
        msg: 'PUT API - controller',
    })
}

const commentsDelete = (req, res) => {
    res.json({
        msg: 'DELETE API - controller'
    })
}

module.exports = {
    commentsGet,
    commentsPost,
    commentsPut,
    commentsDelete,
}