const { Router } = require('express');
const { townsGet, townsPost, townsPut, townsDelete} = require('../controllers/towns.controllers');

const router = Router();

router.get('/', townsGet)
    .put('/:id', townsPut )
    .post('/', townsPost )
    .delete('/', townsDelete );

module.exports = router;