
require('dotenv').config();

const mongoose = require('mongoose')


// AQUI SE CAMBIA POR LA URL DE LA BASE MONGOOOOO XD PORQUE  SI NO TRUENA SI NO LO TIENEN "test" en su local
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('Conectado a mongodb'))
    .catch(err => {console.log('Error', err)})

const Server = require('./config/server');

const server = new Server();

server.listen();