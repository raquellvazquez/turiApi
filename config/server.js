const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/users';
        this.townsPath = '/towns';
        this.commentsPath = '/comments';

        /**
         * Midellware
         */
       this.middlewares();

       /**
        * Rutas
        */
        this.routes()
    }

    routes() {
       this.app.use(this.userPath, require('../routes/user.routes'));
       this.app.use(this.townsPath, require('../routes/towns.routes'));
       this.app.use(this.commentsPath, require('../routes/comments.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('escuchando en puerto', this.port)
        })
    }

    middlewares() {
        this.app.use(express.json());
    }
}

module.exports = Server;