const {response} = require('express')

const usersGet = (req, res =response) => {

    res.json({
        msg: 'GET API - controller',
    })
}

const usersPost = (req, res) => {

    res.status(201).json({
        msg: 'POST API -controller',
    })
}

const usersPut = (req, res) => {

    res.json({
        msg: 'PUT API - controller',
    })
}

const usersDelete = (req, res) => {
    res.json({
        msg: 'DELETE API - controller'
    })
}

const usersPatch = (req, res) => {
    res.json({
        msg: 'PATCH API - controller'
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}